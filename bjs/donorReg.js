$(document).ready(function(){
//   	alert("ok");
	var cookies=document.cookie;
 // 	alert(cookies);

	var reg1=cookies.match("donor-name[=a-zA-Z]*");
	var reg2=cookies.match("donor-email[=a-zA-Z0-9@.%]*");
	reg1=reg1.toString();
	reg2=reg2.toString();
	var dname=reg1.slice("donor-name=".length);
	var dmail=reg2.slice("donor-email=".length);
	dmail=dmail.replace("%40","@");
//   	alert(dname+" "+dmail);
	
	$("#dname").val(dname);
	$("#dmail").val(dmail);

	$("#dreg").click(function(){
		var bg=$("#dbg").val();
		var loc=$("#dloc").val();
		var dis=$("#ddis").val();
		var age=$("#dage").val();
		var gender=$("#dgender").val();
		if(dname !="" && dmail!="" && bg!="select-none" && loc!="select-none" && dis!="select-none" && age!="" && gender!="select-none"){
            $.ajax({
            	url:"./registerDonor.php",
            	type:"POST",
            	data:{mail:dmail,dbg:bg,dloc:loc,ddis:dis,dage:age,dgen:gender},
            	success:function(data){
            		if(data=" Registered !! "){
            			//alert(data);
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