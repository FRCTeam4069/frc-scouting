function save_log_data() {
  var teamnum = $('#teamnum').val();
  var canthrow = $('#canthrow').is(':checked');
  var canclimb = $('#canclimb').is(':checked');
  var teamcolor = $('#color').val();
  var notes = $('#notes').val();

  var request = $.ajax({
    type: "POST",
    url: "new_log_save.py",
    data: JSON.stringify({
      "tnum": teamnum,
      "throw": canthrow,
      "climb": canclimb,
      "color": teamcolor,
      "tnotes": notes
    }),

  }).done(function (o) {
    console.log(o)
  })
}
