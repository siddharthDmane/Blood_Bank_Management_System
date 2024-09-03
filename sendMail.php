<?php

$dname=$_POST["dname"];
$to=$_POST["dmail"];

setcookie("donor-name",$dname);
setcookie("donor-email",$to);

$char=[1,2,3,4,5,6,7,8,9,0,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

$otp="";

for($i=0;$i<8;$i++){
	$otp.=$char[array_rand($char,1)];
}

$con=mysqli_connect("localhost:5000","root","root","bloodbank");
$query="select donorId from donors where donorEmail='{$to}'";
$rows=mysqli_query($con,$query);

if(mysqli_num_rows($rows)>0){
	echo "1";
	mysqli_close($con);
}
else{
	mysqli_close($con);
	$subject="Blood Bank Management System OTP";
	$message="Dear ".$dname.", your otp is : ".$otp;

	$con=mysqli_connect("localhost:5000","root","root","bloodbank");
	$query="insert into donors(donorName,donorEmail,donorOTP) values('{$dname}','{$to}','{$otp}')";
	mysqli_query($con,$query);
	mysqli_close($con);

	mail($to,$subject,$message);

	echo $otp;
}

?>