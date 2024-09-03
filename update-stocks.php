<?php

$bg=$_POST["bg"];
$unit=$_POST["unit"];
	
$con=mysqli_connect("localhost:5000","root","root","bloodbank");
$query="update bloodStocks set units={$unit} where bloodGroup='{$bg}'";
mysqli_Query($con,$query);
mysqli_close($con);
echo " Updated !! ";

?>