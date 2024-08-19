$.get('https://raw.githubusercontent.com/Color-Drop/status/master/history/storage-1-server.yml', function(data) {
    // Parse the YAML data into a JavaScript object
    var serviceData = YAML.parse(data);
    // Select the part of the JavaScript object that you want to write to the HTML page
    var lastUpdated = serviceData.lastUpdated;
    // Create a HTML span element and set its text content to the author name
    var lastUpdatedSpan = document.createElement("span");
    var lastUpdatedText = document.createTextNode(lastUpdated);
    lastUpdatedSpan.appendChild(lastUpdatedText);
    // Append the span element to the paragraph element
    var lastUpdatedPara = document.getElementById("lastupdated");
    lastUpdatedPara.appendChild(lastUpdatedSpan);
});