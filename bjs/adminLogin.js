$("#admin-login").click(function(){
	var mail=$("#admin-id").val();
	var pass=$("#admin-pass").val();
	$.ajax({
		url:"./fetch-admin-single.php",
		type:"POST",
		data:{email:mail},
		success:function(data){
			if(data=="error"){
				alert(" Error !! ");
			}
			if(data==pass){
				alert(" Succeed !! ");
				location.href="adminDashboard.html";
			}
			else{
				alert(" Incorrect Password !!");
			}
		}
	});
});