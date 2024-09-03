$(document).ready(function(){
	var i=0;
	$("#admin").click(function(){
		if(i==0){
			$("#demo").hide();
			$("#addAdmin").show();
			i=1;
		}
	});

	$("#submitStocks").click(function(){
		var bg=$('#bloodgroup option:selected').val();
		var u=$('#units').val();
	   alert(bg+" "+u);
	   if(bg=="A+"){ $("#ap_stocks").html(u);}
	   if(bg=="B+"){ $("#bp_stocks").html(u);}
	   if(bg=="AB+"){ $("#abp_stocks").html(u);}
	   if(bg=="O+"){ $("#op_stocks").html(u);}
	   if(bg=="A-"){ $("#an_stocks").html(u);}
	   if(bg=="B-"){ $("#bn_stocks").html(u);}
	   if(bg=="AB-"){ $("#abn_stocks").html(u);}
	   if(bg=="O-"){ $("#on_stocks").html(u);}
	});

});