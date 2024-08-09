document.addEventListener('DOMContentLoaded', function() {
    var db = document.getElementById('downloadButton');
    var hdl = document.getElementById('hiddenDownloadLink');
    var url = 'https://cdn.modrinth.com/data/ntmv3V8v/versions/VMRuYl1H/brush-client-1.4.6.jar';
    db.addEventListener('click', function(e) {
        e.preventDefault();
        hdl.href = url;
        hdl.click();
    });
});