// A function to collect information from the user interface and send it off
// to the Python backend to be saved in a data file
function saveLogData() {
    // Get the values from the interface and send it in a JSON format to the Python script
    var request = $.ajax({
        type: 'post',
        url: 'save_log_data.py',
        data: JSON.stringify({
            'teamNumber': parseInt(document.getElementById('team-number').value),
            'ballsThrown': parseInt(document.getElementById('balls-thrown').innerText),
            'teamColor': document.getElementById('team-color').value,
            'canClimb': document.getElementById('can-climb').checked,
            'notes': document.getElementById('notes').value
        }),

    }).done(function (output) {
        // Reload the page when complete
        if (output.success) {
            location.reload();
        }
    })
}
