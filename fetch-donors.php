<?php

$con=mysqli_connect("localhost:5000","root","root","bloodbank");

$rows=mysqli_query($con,"select * from donors");
if(mysqli_num_rows($rows)>0){
	$output="<table border='1' cellspacing='8'>";
	$output=$output."<tr><th class='ff hclr'>DonorName</th><th class='ff hclr'>DonorEmail</th><th class='ff hclr'>Action</th></tr>";
	while($r=mysqli_fetch_assoc($rows)){
		$output=$output."<tr>";
		$output=$output."<th class='ff' align='left'>".$r['donorName']."</th>";
		$output=$output."<th class='ff' align='left'>".$r['donorEmail']."</th>";
$output=$output."<th align='left'><input type='button' onclick=donorDelete('".$r["donorEmail"]."','donors') value='DELETE'  class='ff'/></th>";
	}
	$output=$output."</table>";
	echo $output;
}
else{
	echo " No records are found !! ";
}

?>