<?php
	
	$bg=$_POST["bg"];
	$con=mysqli_connect("localhost:5000","root","root","bloodbank");
	$query="select donorName,donorEmail,gender,district from donors where bloodGroup='{$bg}'";
	$rows=mysqli_query($con,$query);

	if(mysqli_num_rows($rows)>0){
		$data="<table border='1' id='loaded'>";
		$data=$data."<tr class='tblhead'><th class='ff'>DonorName</th><th class='ff'>DonorEmail</th><th class='ff'>DonorGender</th><th class='ff'>DonorLocation</th></tr>";
		while($r=mysqli_fetch_assoc($rows)){
			$data=$data."<tr>";
			$data=$data."<th class='ff'>".$r["donorName"]."</th>";
			$data=$data."<th class='ff'>".$r["donorEmail"]."</th>";
			$data=$data."<th class='ff'>".$r["gender"]."</th>";
			$data=$data."<th class='ff'>".$r["district"]."</th>";
			$data=$data."</tr>";
		}
		$data=$data."</table>";
		echo $data;
	}
	else{
		echo " <h1 id='none' style='margin:15px 350px 15px 350px;'> No Records Found !! </h1>";
	}

?>