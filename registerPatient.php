<?php

$dname=$_POST["dname"];
$mail=$_POST["dmail"];
$loc=$_POST["dloc"];
$bg=$_POST["dbg"];
$dis=$_POST["ddis"];
$age=$_POST["dage"];
$gen=$_POST["dgen"];

$con=mysqli_connect("localhost:5000","root","root","bloodbank");

$query="insert into patients(patientName,patientEmail,gender,age,bloodgroup,district,location) values('{$dname}','{$mail}','{$gen}','{$age}','{$bg}','{$dis}','{$loc}')";

if(mysqli_query($con,$query)){
	$response=1;
}
else{
	$response=0;
}
mysqli_close($con);

if($response==1){
	echo " Registered !! ";
}
else{
	echo "false";
}

?>