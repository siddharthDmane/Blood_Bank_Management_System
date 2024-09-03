<?php
$con=mysqli_connect("localhost:5000","root","root","Fuel");
$res=mysqli_query($con,"select * from Sample");
$cnt=mysqli_num_rows($res);
if($cnt>0){
	echo "yes";
	$r=mysqli_fetch_assoc($res);
	echo "<pre>";
	print_r($res);
	echo "</pre>";
}
else{
	echo "No";
}
?>