document.addEventListener('DOMContentLoaded', function() {
    var db = document.getElementById('downloadButton');
    var hdl = document.getElementById('hiddenDownloadLink');

    async function releaseUrl() {
        try {
            const response = await fetch('https://api.github.com/repos/femboypig/brush-client/releases/latest');
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            return data.assets.find(asset => asset.name.includes("jar")).browser_download_url;
        } catch (error) {
            console.error("Failed to fetch the latest release URL:", error);
            return null;
        }
    }

    db.addEventListener('click', async function(e) {
        e.preventDefault();
        const url = await releaseUrl();
        if (url) {
            hdl.href = url;
            hdl.click();
        } else {
            alert('Failed to find the download URL.');
        }
    });
});