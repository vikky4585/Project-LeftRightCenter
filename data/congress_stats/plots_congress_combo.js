function init() {
  data = [{
    x: ["thinking_style","type_a","conscientiousness","power_driven","stressed","dutiful","organized","money_oriented","workhorse","cautious"],
    y: [98, 97, 96, 96, 95, 93, 90, 90, 89, 88], 
    type: "bar",
    orientation: 'v',
    title:'Data Labels on the Plot'}];
  var BAR = document.getElementById("plot");

    Plotly.plot(BAR, data,layout);

}

  var layout = {
    height: 600,
    width: 1200,
    title:'Personality Traits of Congress'

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
    x = ["thinking_style","type_a","conscientiousness","power_driven","stressed","dutiful","organized","money_oriented","workhorse","cautious"];
    y = [98, 97, 96, 96, 95, 93, 90, 90, 89, 88];
    color: "red";
    break;
  case "dataset2":
    x = ["agreeableness","empathetic","emotionally_aware","generous","impulsive","humble","cold","reward_bias","cheerful","genuine"];
    y = [8, 9, 9, 10, 11, 15, 19, 19, 22, 24];
    break;
  case "dataset3":
    x = ["thinking_style",
"type_a",
"conscientiousness",
"power_driven",
"stressed",
"dutiful",
"organized",
"money_oriented",
"workhorse",
"cautious",
"disciplined",
"anxious",
"independent",
"work_oriented",
"neuroticism",
"persuasive",
"health_oriented",
"self_conscious",
"assertive",
"depression",
"ambitious",
"melancholy",
"religion_oriented",
"adjustment",
"artistic",
"sexual_focus",
"aggressive",
"sociable",
"friend_focus",
"family_oriented",
"leisure_oriented",
"social_skills",
"cooperative",
"food_focus",
"body_focus",
"adventurous",
"liberal",
"intellectual",
"active",
"self_assured",
"trusting",
"extraversion",
"happiness",
"insecure",
"friendly",
"netspeak_focus",
"imaginative",
"energetic",
"openness",
"genuine",
"cheerful",
"reward_bias",
"cold",
"humble",
"impulsive",
"generous",
"emotionally_aware",
"empathetic",
"agreeableness"];
    y = ["98.3",
"97.1",
"96.3",
"96.3",
"95.7",
"93.9",
"90.3",
"90.2",
"89.4",
"88.8",
"87.6",
"86.9",
"86.5",
"84.1",
"82.4",
"81.5",
"80.4",
"79.1",
"78.2",
"76.4",
"75.1",
"74.4",
"73",
"69.5",
"66.7",
"65.2",
"63",
"61.6",
"61.6",
"57.9",
"57.5",
"49.6",
"48.6",
"47.4",
"46.7",
"45.3",
"44.9",
"44.6",
"43",
"41.5",
"35.1",
"34.9",
"34.1",
"29.3",
"28.9",
"28.2",
"27.4",
"26.8",
"25.9",
"24.1",
"22.4",
"19.9",
"19.4",
"18.9",
"16",
"11.9",
"10.3",
"9.5",
"8.3"
];
  case "dataset4":
    x = ["adjustment","happiness","dutiful","cooperative","power_driven","energetic","persuasive","adventurous","disciplined","ambitious","cheerful","workhorse","reward_bias"];
    y = [1.36,0.91,0.8,0.79,0.7,0.65,0.64,0.64,0.64,0.63,0.54,0.53,0.5];
    color: "red";
    break;
  case "dataset5":
    x = ["cold","anxious","self_conscious","melancholy","cautious","insecure","type_a","stressed","depression","aggressive"];
    y = [0.53,0.7,0.75,0.98,1.01,1.25,1.28,1.49,1.51,1.7];
    break;
  case "dataset6":
    x = ["aggressive",
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
    y = [1.7,
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
