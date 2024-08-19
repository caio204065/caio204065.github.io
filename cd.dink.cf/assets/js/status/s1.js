YAML.load('https://raw.githubusercontent.com/Color-Drop/status/master/history/storage-1-server.yml', function(result) {
    nativeObject = result;
    let statusParagraph = document.getElementById("status-s1");
    let statusText;
    if (result.status === "up") {
        statusText = "✅ This service is running normally.";
    } else if (result.status === "down") {
        statusText = "⚠️ We are currently experiencing issues with this service. Check back soon.";
    }

    statusParagraph.innerHTML = statusText;
});