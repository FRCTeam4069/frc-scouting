function load_log_data() {
    var request = $.ajax({
        type: 'post',
        url: 'load_logs.py'
    }).done(function (output) {
        for (var i in output) {
            console.log(output[i].team_color)
        }
    })
}