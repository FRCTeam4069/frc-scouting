<?php
session_start();

  $fp=fopen("log.out","wb");
  fwrite($fp,"Opening database connection...\n");
  $con = mysqli_connect("localhost","root","","frc4069");
  if (!$con)
  {
      fwrite($fp,"Could not connect to database\n");
      fclose();
  		die('Could not connect: ' . mysql_error());
  }

$tnum = $_POST['tnum'];
$throw = $_POST['throw'];
$climb = $_POST['climb'];
$color = $_POST['color'];
$tnotes = $_POST['tnotes'];

$abilities=0;
if ($climb=='true')
  $abilities=1;
if ($throw=='true')
  $abilities |= 2;

fwrite($fp,"tnum=".$tnum.",throw=".$throw.",climb=".$climb.",color=".$color.",notes=".$tnotes.",abilities=".$abilities."\n");


$sql="insert into teaminfo (teamnumber,notes,color,abilities) values ('".$tnum."','".$tnotes."','".$color."',".$abilities.")";

fwrite($fp,"sql=".$sql."\n");
$result = $con->query($sql);

echo '{"success": true}';
fclose($fp);
mysqli_close($con); // Close the DB Connection
?>
