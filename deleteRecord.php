<?php
	
	$mail=$_POST["email"];
	$table=$_POST["table"];
	$query="";
	
	$con=mysqli_connect("localhost:5000","root","root","bloodbank");

	if($table=="donors"){
		$query="delete from {$table} where donorEmail='{$mail}'";
	}
	else if($table=="admins"){
		$query="delete from {$table} where adminEmail='{$mail}'";
	}
	else if($table=="patients"){
		$query="delete from {$table} where patientEmail='{$mail}'";
	}
	else if($table=="camp"){
		$query="delete from {$table} where campName='{$mail}'";
	}

	$r=mysqli_query($con,$query);
	mysqli_close($con);
	echo $r;
?>