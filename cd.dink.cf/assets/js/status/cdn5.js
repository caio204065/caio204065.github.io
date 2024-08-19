YAML.load('https://raw.githubusercontent.com/Color-Drop/status/master/history/cdn-5.yml', function(result) {
    nativeObject = result;
    let statusParagraph = document.getElementById("status-cdn5");
    let statusText;
    if (result.status === "up") {
        statusText = "✅ This service is running normally.";
    } else if (result.status === "down") {
        statusText = "⚠️ We are currently experiencing issues with this service. Check back soon.";
    }

    statusParagraph.innerHTML = statusText;
});