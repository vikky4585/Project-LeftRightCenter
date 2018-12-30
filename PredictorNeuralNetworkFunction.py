
#%%
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, StandardScaler
from keras.utils import to_categorical
from keras.models import Sequential
from keras.layers import Dense
from sklearn.neighbors import KNeighborsClassifier
from sklearn.svm import SVC 
from sklearn.metrics import classification_report


#%%



#%%

def runPredictor(X,y, modelType):
    print(f'***Running for {modelType} X size: {X.shape}, y size: {y.shape}')
    X_train, X_test, y_train, y_test = train_test_split(X,y, random_state=1, stratify=y)

    label_encoder = LabelEncoder()
    label_encoder.fit(y_train)

    y_train_encoded = label_encoder.transform(y_train)
    y_test_encoded = label_encoder.transform(y_test)

    y_train_category = to_categorical(y_train_encoded)
    y_test_category = to_categorical(y_test_encoded)


#%%


    model = Sequential()
    model.add(Dense(units=100,activation='relu', input_dim=X.shape[1]))
    model.add(Dense(units=100,activation='relu'))
    model.add(Dense(units=2, activation='softmax'))
            

    model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

    model.fit(X_train, y_train_category,epochs=200, shuffle=True,verbose=2)


    #%%
    model_loss, model_accuracy = model.evaluate(
        X_test, y_test_category, verbose=2)
    print(
        f"Normal Neural Network - Loss: {model_loss}, Accuracy: {model_accuracy}")


    #%%
    predictions = model.predict_classes(X_test[:10])
    prediction_labels = label_encoder.inverse_transform(predictions)
    prediction_labels

    print(f"Predicted classes: {prediction_labels}")
    print(f"Actual Labels: {list(y_test[:10])}")

def runSVM(X,y, modelType):
    X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=42)
    model = SVC(kernel='linear')
    model.fit(X_train, y_train)
    print('Test Acc: %.3f' % model.score(X_test, y_test))    
    predictions = model.predict(X_test)
    print(classification_report(y_test, predictions,target_names=['democrats','republicans']))