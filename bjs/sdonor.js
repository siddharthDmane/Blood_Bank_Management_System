$("#sdist").change(function(){
	var g=$("#sdist").val();
	alert(g);
	var load;

	$.ajax({
		url:"sdonor.php",
		type:"POST",
		data:{dist:g},
		success:function(data){
			//alert(data);
			$("#loaded").remove();
			$("#sblood-dash").append(data);
		}
	});
});