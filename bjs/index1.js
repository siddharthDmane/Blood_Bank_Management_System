var display=0;
$("#menu").click(function(){
		if(display==0){
			$("#menu-card").show();
			display=1;
		}
		else{
			$("#menu-card").hide();
			display=0;			
		}
});

function loadCamp(){
	$.ajax({
		url:"addCamp.php",
		type:"GET",
		success:function(data){
			$("#drtable").remove();
			$("#dright").html(data);
		}
	});
}

loadCamp();