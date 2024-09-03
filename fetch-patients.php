<?php

$con=mysqli_connect("localhost:5000","root","root","bloodbank");

$rows=mysqli_query($con,"select * from patients");
if(mysqli_num_rows($rows)>0){
	$output="<table border='1' cellspacing='8'>";
	$output=$output."<tr><th class='ff hclr'>PatientName</th><th class='ff hclr'>PatientEmail</th><th class='ff hclr'>Action</th></tr>";
	while($r=mysqli_fetch_assoc($rows)){
		$output=$output."<tr>";
		$output=$output."<th class='ff' align='left'>".$r['patientName']."</th>";
		$output=$output."<th class='ff' align='left'>".$r['patientEmail']."</th>";
$output=$output."<th align='left'><input type='button' onclick=patientDelete('".$r["patientEmail"]."','patients') value='DELETE'  class='ff'/></th>";
	}
	$output=$output."</table>";
	echo $output;
}
else{
	echo " No records are found !! ";
}

?>