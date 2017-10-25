<?php
session_start();

  $fp=fopen("demo_test.out","wb");
  fwrite($fp,"Opening database connection...\n");
  $con = mysqli_connect("localhost","root","waterwater","frc4069");
  if (!$con)
  {
      fwrite($fp,"Could not connect to database\n");
      fclose();
  		die('Could not connect: ' . mysql_error());
  }


$bikeval = $_POST['thebikevalue'];
$carval = $_POST['thecarvalue'];
$mess = $_POST['themessagevalue'];

fwrite($fp,"I was called\n");
fwrite($fp,"bike = ".$bikeval."\ncar = ".$carval."\nmessage=".$mess."\n");
echo '{"success":"true","poodles":"arefurry"}';
fclose($fp);
mysqli_close($con);//Close the DB Connection
?>
