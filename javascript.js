
//creating svg area to be same size as content
var svg = d3.select('.content').append("svg")
	.style("height", "100%")
	.style("width", "100%");

// adding shape

circles.enter()
    .append('circle')
    .attr({'cx': "50",
           'cy': "50",
           'fill': "#ff0000",
           'r': 45});










$("circle").click(function() {
    var randomRGB = function(){
        return Math.floor(Math.random() * 256).toString();
    };
    $(this).attr("fill", "rgb(" + randomRGB() + "," + randomRGB() + "," + randomRGB() + ")");
});