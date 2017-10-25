function sendpage1data() {
  var teamnum = $('#teamnum').val();
  var canthrow = $('#canthrow').is(':checked');
  var canclimb = $('#canclimb').is(':checked');
  var teamcolor = $('#color').val();
  var notes = $('#notes').val();

  var request = $.ajax(
    {
      url: "page1save.php",
      type: "post",
      data:
      {
        "tnum": teamnum,
        "throw": canthrow,
        "climb": canclimb,
        "color": teamcolor,
        "tnotes": notes
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert("Status: " + textStatus);
        alert("Error: " + errorThrown);
      },
      success: function (data) {
        console.log(data)
        if (data.error) {
          alert(data.error);
          return;
        }
        var pj = $.parseJSON(data);
        var whatarepoodles = pj.poodles;
        var succsess = pj.success;
        alert("Poodles: " + whatarepoodles);

        var boo = 1;
      }
    });
}
