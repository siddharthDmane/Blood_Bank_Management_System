<?php

$con=mysqli_connect("localhost:5000","root","root","bloodbank");
$rows=mysqli_query($con,"select * from admins");
if(mysqli_num_rows($rows)>0){
	$output="<table border='1' cellspacing='8'>";
	$output=$output."<tr><th class='ff hclr'>AdminName</th><th class='ff hclr'>AdminEmail</th><th class='ff hclr'>Action</th></tr>";
	while($r=mysqli_fetch_assoc($rows)){
		$output=$output."<tr>";
		$output=$output."<th class='ff' align='left'>".$r['adminName']."</th>";
		$output=$output."<th class='ff' align='left'>".$r['adminEmail']."</th>";
$output=$output."<th align='left'><input type='button' onclick=donorDelete('".$r["adminEmail"]."','admins') value='DELETE'  class='ff'/></th>";
	}
	$output=$output."</table>";
	echo $output;
}
else{
	echo " No records are found !! ";
}

?>