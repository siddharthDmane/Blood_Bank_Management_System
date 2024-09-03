$(document).ready(function(){
	var otp="";
	$("#dcheck").click(function(){
		var name=$("#dname").val();
		var mail=$("#dmail").val();
		if((name== "")  ||  (mail.length<5)){
			alert(" Please, Enter the valid details !!");
		}
		else{
			$.ajax({
				url:"./sendMail.php",
				type:"POST",
				data:{dname:name,dmail:mail},
				success:function(data){
					otp=data;
					if(otp == "1"){
						alert(" you are already registered !! ");
					}else{
						console.log(otp);
						$("#sotp").hide();
						$("#otp-row").show();
						$("#verify-row").show();						
					}
				}
			});			
		}
	});

	$("#dverify").click(function(){
		if(otp == $("#eotp").val()){
			alert("Verification Successfull !!");
			location.href="http://localhost/Blood%20Bank/donorReg.html";
		}
		else{
			alert("Incorrect OTP!!");
		}
	});

});