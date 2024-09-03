<?php

$con=mysqli_connect("localhost:5000","root","root","bloodbank");
$query="select adminPass from admins where adminEmail='{$_POST['email']}'";
$row=mysqli_query($con,$query);
if(mysqli_num_rows($row)>0){
	$r=mysqli_fetch_assoc($row);
	echo $r['adminPass'];
	setcookie("admin",$_POST['email']);
}
else{
	echo "error";
}
?>