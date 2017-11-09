// A function to collect information from the user interface and send it off
// to the Python backend to be saved in a data file
function save_log_data() {
    // Get the values from the interface
    var teamnum = $('#teamnum').val()
    var canthrow = $('#canthrow').is(':checked')
    var canclimb = $('#canclimb').is(':checked')
    var teamcolor = $('#color').val()
    var notes = $('#notes').val()

    // Send the data in a JSON format to the Python script
    var request = $.ajax({
        type: 'post',
        url: 'new_log_save.py',
        data: JSON.stringify({
            'team_number': teamnum,
            'team_color': teamcolor,
            'can_throw': canthrow,
            'can_climb': canclimb,
            'notes': notes
        }),

    }).done(function (output) {
        // Notify the user when complete
        if (output.success) {
            alert('Log successfully saved.')
        }
    })
}
