import json
import re
from datetime import datetime
from keras.models import load_model
import tensorflow as tf
from keras.models import Sequential
from keras.utils import to_categorical
from keras.layers import Dense
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import requests
import tweepy
from flask import Flask, jsonify, redirect, render_template, request

from config import (access_token, access_token_secret, consumer_key,
                    consumer_secret, x_api_key, x_api_secret_key)

# Setup Tweepy API Authentication
auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
api = tweepy.API(auth, parser=tweepy.parsers.JSONParser())
url='https://api-v3.receptiviti.com/v3/api/content'
headers={'X-API-KEY': x_api_key, 'X-API-SECRET-KEY':x_api_secret_key}

app = Flask(__name__)

def payload(text):
    payload = {}
    tags = []
    tags.append('string')
    payload['content_tags'] = tags
    payload['content_handle'] = 'string'
    payload['language'] = 'english'
    payload['content_source'] = 4
    payload['content_date'] = '2018-12-25T00:46:05.119779'
    payload['recipient_id'] = 'string'
    payload['language_content'] = text
    return payload

def gettweets(target_user):
    tweets = []
    #decrease count list from 26 to 10
    for x in range(1, 11):
        
        public_tweets = api.user_timeline(target_user, page=x, tweet_mode='extended')

        for twt in public_tweets:
            try:
                details = {}
            
                details['created_at'] = twt['created_at']
                details['screen_name'] = twt['user']['screen_name']
                #details['text'] = twt['text']
                #details['full_text'] = twt['extended_tweet']['full_text']
                details['full_text'] = twt['full_text']
                
                tweets.append(details)
            except tweepy.TweepError:
                print(f'skipping for {target_user}')
            
    return tweets

def cleanText(x):
    x = x.replace('RT','')
    x = x.replace(' .','.')
    x = x.replace('. ','.')
    x = re.sub('[^a-zA-Z0-9 \n\.]', '', x)
    x = re.sub(r'http\S+', '', x)
    x = re.sub(r'\w+:\s?', '', x)
    return x

def sendLIWC(text):
    
    response = requests.post(url, headers=headers,json=payload(text))
    print(f'liwc response {response.json()}')
    liwc = {}
    raw_score = dict(liwc)
    raw_score.update(response.json()['receptiviti_scores']['raw_scores'])
    percentile_score = dict(liwc)
    percentile_score.update(response.json()['receptiviti_scores']['percentiles'])
    category_score = dict(liwc)
    category_score.update(response.json()['liwc_scores']['categories'])
    
    return (raw_score, percentile_score, category_score)

def predictions(liwcdata, modelType):

    model = load_model('models/raw_full.h5')
    ynew = model.predict(liwcdata[0])
    return ynew

@app.route("/")
def home():
    return render_template("landingpage.html")

@app.route("/dnn")
def dnn():
    return render_template("dnn.html")

@app.route("/predict", methods=['POST'])
def predict():
    handle = request.form['handle']
    algoname = request.form['algoname']
    print(f'Predicting for handle: {handle} via algorithm: {algoname}')
    tweetlist = gettweets(handle)
    df = pd.DataFrame(tweetlist)
    df['full_text_formatted'] = df['full_text'].apply(cleanText)
    text = ''
    for t in df['full_text_formatted']:
        text = text + t + '.'
    print(f'sending text to liwc api : {text}')

    liwcdata = sendLIWC(text)
    predicted = predictions(liwcdata, algoname)
    print(f'predicted value from model {predicted}')
    #return a jsonify version of preidctons and other data
    return render_template("dnn.html")

@app.route("/buzzwordmap/<buzzword>")
def buzzwordmap(buzzword):
    print(f'map buzz word {buzzword}')
    return render_template("map_buzzwordmap.html", buzzword=buzzword)








if __name__ == "__main__":
    app.run(debug=True)
