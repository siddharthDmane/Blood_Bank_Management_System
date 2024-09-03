<?php

	$con=mysqli_connect("localhost:5000","root","root","bloodbank");
	$query="select bloodGroup,units from bloodStocks";
	$rows=mysqli_query($con,$query);

	
	if(mysqli_num_rows($rows)>0){
		$r=mysqli_fetch_all($rows,MYSQLI_ASSOC);
		echo json_encode($r);
	}
	mysqli_close($con);

?>