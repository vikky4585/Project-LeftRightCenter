function init() {
  data = [{
    x: ["thinking_style","type_a","conscientiousness","power_driven","stressed","dutiful","organized","money_oriented","workhorse","cautious"],
    y: [98, 97, 96, 96, 95, 93, 90, 90, 89, 88], 
    type: "bar",
    orientation: 'v',
    title:'Data Labels on the Plot'}];
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
    break;
  default:
    x = [1, 2, 3, 4, 5];
    y = [1, 2, 3, 4, 5];
    break;
  }

  updatePlotly(x, y);
}

init();
