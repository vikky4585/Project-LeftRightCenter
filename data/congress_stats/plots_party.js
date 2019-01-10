function init() {
  data = [{
    y: ["adjustment",
"happiness",
"dutiful",
"cooperative",
"power_driven",
"energetic",
"persuasive",
"adventurous",
"disciplined",
"ambitious",
"cheerful",
"workhorse",
"reward_bias"],
    x: [1.36,
0.91,
0.8,
0.79,
0.7,
0.65,
0.64,
0.64,
0.64,
0.63,
0.54,
0.53,
0.5], 
    type: "bar",
    orientation: 'h',
    title:'xxx'}];
  var BAR = document.getElementById("plot");

    Plotly.plot(BAR, data);

}

  var layout = {
    height: 600,
    width: 800,

  };

function updatePlotly(newx, newy) {
  var BAR = document.getElementById("plot");

  // Note the extra brackets around 'newx' and 'newy'
  Plotly.restyle(BAR, "x", [newx]);
  Plotly.restyle(BAR, "y", [newy]);
}

function getData(dataset) {

  // Initialize empty arrays to contain our axes
  var x = [];
  var y = [];

  // Fill the x and y arrays as a function of the selected dataset
  switch (dataset) {
  case "dataset1":
    y = ["adjustment","happiness","dutiful","cooperative","power_driven","energetic","persuasive","adventurous","disciplined","ambitious","cheerful","workhorse","reward_bias"];
    x = [1.36,
0.91,
0.8,
0.79,
0.7,
0.65,
0.64,
0.64,
0.64,
0.63,
0.54,
0.53,
0.5];
    color: "red";
    break;
  case "dataset2":
    y = ["cold",
"anxious",
"self_conscious",
"melancholy",
"cautious",
"insecure",
"type_a",
"stressed",
"depression",
"aggressive"];
    x = [0.53,
0.7,
0.75,
0.98,
1.01,
1.25,
1.28,
1.49,
1.51,
1.7];
    break;
  case "dataset3":
    y = ["aggressive",
"depression",
"stressed",
"type_a",
"insecure",
"cautious",
"melancholy",
"self_conscious",
"anxious",
"cold",
"family_oriented",
"intellectual",
"neuroticism",
"liberal",
"humble",
"assertive",
"health_oriented",
"self_assured",
"generous",
"leisure_oriented",
"body_focus",
"sexual_focus",
"empathetic",
"food_focus",
"work_oriented",
"friend_focus",
"netspeak_focus",
"imaginative",
"religion_oriented",
"artistic",
"openness",
"money_oriented",
"agreeableness",
"conscientiousness",
"sociable",
"independent",
"organized",
"extraversion",
"trusting",
"genuine",
"active",
"social_skills",
"friendly",
"emotionally_aware",
"impulsive",
"thinking_style",
"reward_bias",
"workhorse",
"cheerful",
"ambitious",
"disciplined",
"adventurous",
"persuasive",
"energetic",
"power_driven",
"cooperative",
"dutiful",
"happiness",
"adjustment"];
    x = [1.7,
1.51,
1.49,
1.28,
1.25,
1.01,
0.98,
0.75,
0.7,
0.53,
0.45,
0.43,
0.4,
0.19,
0.18,
0.17,
0.14,
0.1,
0.07,
0.07,
0.05,
0.03,
0.01,
0,
0,
0,
0.03,
0.04,
0.12,
0.12,
0.15,
0.18,
0.21,
0.21,
0.23,
0.26,
0.26,
0.26,
0.29,
0.3,
0.35,
0.38,
0.38,
0.39,
0.41,
0.47,
0.5,
0.53,
0.54,
0.63,
0.64,
0.64,
0.64,
0.65,
0.7,
0.79,
0.8,
0.91,
1.36];
    break;
  default:
    x = [1, 2, 3, 4, 5];
    y = [1, 2, 3, 4, 5];
    break;
  }

  updatePlotly(x, y);
}

init();
