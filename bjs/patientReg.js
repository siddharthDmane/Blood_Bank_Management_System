$(document).ready(function(){

	$("#dreg").click(function(){
		var name=$("#dname").val();
		var mail=$("#dmail").val();
		var bg=$("#dbg").val();
		var loc=$("#dloc").val();
		var dis=$("#ddis").val();
		var age=$("#dage").val();
		var gender=$("#dgender").val();
		if(dname !="" && dmail!="" && bg!="select-none" && loc!="select-none" && dis!="select-none" && age!="" && gender!="select-none"){
            $.ajax({
            	url:"./registerPatient.php",
            	type:"POST",
            	data:{dname:name,dmail:mail,dbg:bg,dloc:loc,ddis:dis,dage:age,dgen:gender},
            	success:function(data){
            		if(data=" Registered !! "){
            			alert(data);
            			location.href="index.html";
            		}else{
            			alert(data);
            		}
            	}
            });
		}
		else{
			alert(" please, fill all details !!");
		}
	});

});