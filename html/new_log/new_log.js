// A function to collect information from the user interface and send it off
// to the Python backend to be saved in a data file
function save_log_data() {
    // Get the values from the interface
    var teamNumber = parseInt(document.getElementById('teamNumber').value)
    var ballsThrown = parseInt(document.getElementById('ballsThrown').innerText)
    var canClimb = $('#canClimb').is(':checked')
    var teamColor = $('#color').val()
    var notes = $('#notes').val()

    // Send the data in a JSON format to the Python script
    var request = $.ajax({
        type: 'post',
        url: 'new_log_save.py',
        data: JSON.stringify({
            'team_number': teamNumber,
            'balls_thrown': ballsThrown,
            'can_climb': canClimb,
            'team_color': teamColor,
            'notes': notes
        }),

    }).done(function (output) {
        // Reload the page when complete
        if (output.success) {
            location.reload();
        }
    })
}
