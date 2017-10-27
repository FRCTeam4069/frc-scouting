function save_log_data() {
  var teamnum = $('#teamnum').val();
  var canthrow = $('#canthrow').is(':checked');
  var canclimb = $('#canclimb').is(':checked');
  var teamcolor = $('#color').val();
  var notes = $('#notes').val();

  var request = $.ajax(
    {
      url: "new_log_save.py",
      type: "post",
      data:
      JSON.stringify({
        "tnum": teamnum,
        "throw": canthrow,
        "climb": canclimb,
        "color": teamcolor,
        "tnotes": notes
      }),
      dataType: "json",
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert("Status: " + textStatus);
        alert("Error: " + errorThrown);
      },
      success: function (data) {
        if (data.error) {
          alert(data.error);
          return;
        }
        var pj = $.parseJSON(data);
        var success = pj.success;
        if (success == true) {
          alert("Log recorded.");
        }

        var boo = 1;
      }
    });
}
