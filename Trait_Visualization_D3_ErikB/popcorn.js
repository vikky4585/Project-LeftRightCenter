// Dataset we will be using to set the height of our rectangles.
var topPrecincts = [];

// Setting the dimensions for the SVG container
var svgHeight = 500;
var svgWidth = 500;

var svg = d3
  .select("#svg-area")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);
// svgGroup now refers to the `g` (group) element appended.
// The SVG group would normally be aligned to the top left edge of the chart.
// Now it is offset to the right and down using the transform attribute
var svgGroup = svg.append("g");  

// Selects all rectangles currently on the page - which is none - and binds our dataset to them. If there are no rectangles, it will append one for each piece of data.
svgGroup.selectAll("rect")
  .data(topPrecincts)
  .enter()
  .append("rect")
  .attr("width", 40)
  .attr("height", function(data) {
    return data * 10;
  })
  .attr("x", function(data, index) {
    return index * 60;
  })
  .attr("y", function(data) {
    return 600 - data;
  })
  .attr("class", "bar");

// svg.call(tip);

var colorClick = document.getElementById('color-click');
colorClick.onclick = function() {
  if (this.style.backgroundColor) {
    this.style.backgroundColor = '';
  } else {
    this.style.backgroundColor = 'orange';
  }
}

var width = 800,
    height = 500;

var nodes = d3.range(102).map(function() { return {radius: 5}; }),
    root = nodes[0];

root.radius = 0;
root.fixed = true;

var force = d3.layout.force()
    .gravity(.09)
    .charge(function(d, i) { return i ? 10 : 1000; })
    .nodes(nodes)
    .size([width, height]);

force.start();

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);


var circles = svg.selectAll("circle");

var rValues = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
  10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
var bValues = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
  10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

var oValues = [30]
circles.data(oValues)
    .enter()
    .append("circle")
    .attr("cx", 750)
    .attr("cy", 750)
    .attr("r", function(d) {
      return d;
    })
    .attr("stroke", "red")
    .attr("stroke-width", "10")
    .attr("fill", "orange");

circles.data(rValues)
    .enter()
    .append("circle")
    .attr("cx", 750)
    .attr("cy", 750)
    .attr("r", function(d) {
      return d;
    })
    .attr("stroke", "black")
    .attr("stroke-width", "2")
    .attr("fill", "red");

circles.data(bValues)
    .enter()
    .append("circle")
    .attr("cx", 750)
    .attr("cy", 750)
    .attr("r", function(d) {
      return d;
    })
    .attr("stroke", "black")
    .attr("stroke-width", "2")
    .attr("fill", "blue");
    
svg.selectAll("circle")
    .data(nodes.slice(1))
  .enter().append("circle")
    .attr("r", function(d) { return d.radius; })
    .style("fill", function(d, i) { return color(i % 2); });

force.on("tick", function(e) {
  var q = d3.geom.quadtree(nodes),
      i = 0,
      n = nodes.length;

  while (++i < n) q.visit(collide(nodes[i]));

  svg.selectAll("circle")
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; });
});

svg.on("mousemove", function() {
  var p1 = d3.mouse(this);
  root.px = p1[0];
  root.py = p1[1];
  force.resume();
});

function collide(node) {
  var r = node.radius + 16,
      nx1 = node.x - r,
      nx2 = node.x + r,
      ny1 = node.y - r,
      ny2 = node.y + r;
  return function(quad, x1, y1, x2, y2) {
    if (quad.point && (quad.point !== node)) {
      var x = node.x - quad.point.x,
          y = node.y - quad.point.y,
          l = Math.sqrt(x * x + y * y),
          r = node.radius + quad.point.radius;
      if (l < r) {
        l = (l - r) / l * 2;
        node.x -= x *= l;
        node.y -= y *= l;
        quad.point.x += x;
        quad.point.y += y;
      }
    }
    return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
  };
}
