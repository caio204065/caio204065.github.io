YAML.load('https://raw.githubusercontent.com/Color-Drop/status/master/history/website.yml', function(result) {
    nativeObject = result;
    let statusParagraph = document.getElementById("status-website");
    let statusText;
    if (result.status === "up") {
        statusText = "✅ This service is running normally.";
    } else if (result.status === "down") {
        statusText = "⚠️ We are currently experiencing issues with this service. Check back soon.";
    }

    statusParagraph.innerHTML = statusText;
});