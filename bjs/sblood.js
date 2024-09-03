$("#searchbg").change(function(){
	var g=$("#searchbg").val();
	alert(g);
	var load;

	$.ajax({
		url:"sblood.php",
		type:"POST",
		data:{bg:g},
		success:function(data){
			//alert(data);
			$("#loaded").remove();
			$("#none").remove();
			$("#sblood-dash").append(data);
		}
	});
});