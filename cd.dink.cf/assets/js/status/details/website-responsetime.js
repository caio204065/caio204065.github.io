$.get('https://raw.githubusercontent.com/Color-Drop/status/master/history/website.yml', function(data) {
    // Parse the YAML data into a JavaScript object
    var serviceData = YAML.parse(data);
    // Select the part of the JavaScript object that you want to write to the HTML page
    var responseTime = serviceData.responseTime;
    // Create a HTML span element and set its text content to the author name
    var responseTimeSpan = document.createElement("span");
    var responseTimeText = document.createTextNode(responseTime);
    responseTimeSpan.appendChild(responseTimeText);
    // Append the span element to the paragraph element
    var responseTimePara = document.getElementById("responsetime");
    responseTimePara.appendChild(responseTimeSpan);
});
