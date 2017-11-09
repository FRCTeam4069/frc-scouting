function save_log_data() {
    var teamnum = $('#teamnum').val();
    var canthrow = $('#canthrow').is(':checked');
    var canclimb = $('#canclimb').is(':checked');
    var teamcolor = $('#color').val();
    var notes = $('#notes').val();

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
        if (output.success) {
            alert('Log successfully saved.')
        }
    })
}
