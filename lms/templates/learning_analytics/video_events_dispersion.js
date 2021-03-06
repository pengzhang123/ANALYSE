<%page args="scatter_array"/>

// Scatter chart for video events dispersion relative to position within video

// Load the Visualization API and the chart package. Currently done on the HTML page.
//google.load('visualization', '1.0', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(
  function() {
    drawChart6(${scatter_array});
  }
);  

// Callback that creates and populates a data table,
// instantiates the chart, passes in the data and
// draws it.
function drawChart6(json_data) {
  
  var DEFAULT_COLORS = ["#3366cc","#dc3912","#ff9900","#109618","#990099"]
  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.ScatterChart(document.getElementById('dispersion_chart'));
  
  if (json_data != null && json_data.length > 0) {
    
    // Create the data table.

    var data = new google.visualization.arrayToDataTable(json_data);

    // Set chart options
    var options = {
		    hAxis: {title: 'Position of the video event (seconds)', minValue: 0},
    		vAxis: {textPosition: 'none', minValue: 0, ticks: [1,2,3,4,5]},
		    width : 500,
		    height : 400,
		    colors: DEFAULT_COLORS,
		    legend: {position: 'none'}
		    };
    
    chart.draw(data, options);
    
  } else {   

    var node = document.createTextNode("No data to display.");
    var noData = document.createElement("p");
    noData.appendChild(node);
    document.getElementById('dispersion_chart').innerHTML = "";
    document.getElementById('dispersion_chart').appendChild(noData);
  }  
}