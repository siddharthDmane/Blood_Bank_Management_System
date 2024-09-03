<?php

$mail=$_POST["mail"];
$loc=$_POST["dloc"];
$bg=$_POST["dbg"];
$dis=$_POST["ddis"];
$age=$_POST["dage"];
$gen=$_POST["dgen"];
$response=-1;

$con=mysqli_connect("localhost:5000","root","root","BloodBank");
$query="update donors set location='{$loc}',bloodGroup='{$bg}',district='{$dis}',age={$age},gender='{$gen}' where donorEmail='{$mail}'";
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