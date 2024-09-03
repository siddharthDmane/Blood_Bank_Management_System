//alert("ok");
var admin=0;
var donor=0;
var patient=0;
var hospital=0;
var camp=0;
var total=0;
	var cookies=document.cookie;
	var reg2=cookies.match("admin[=a-zA-Z0-9@.%]*");
	reg2=reg2.toString();
	var amail=reg2.slice("admin=".length);
	amail=amail.replace("%40","@");
	$("#aname").val(amail);

	function setUnits(){
		$.ajax({
			url:"fetch-bloodStocks.php",
			type:"GET",
			success:function(data){
				$("#ap_stocks").val(data);
				json=JSON.parse(data);
				$("#ap_stocks").html(json[0]['units']);
				$("#bp_stocks").html(json[1]['units']);
				$("#abp_stocks").html(json[2]['units']);
				$("#op_stocks").html(json[3]['units']);
				$("#an_stocks").html(json[4]['units']);
				$("#bn_stocks").html(json[5]['units']);
				$("#abn_stocks").html(json[6]['units']);
				$("#on_stocks").html(json[7]['units']);
				total+=json[0]['units']+json[1]['units']+json[2]['units']+json[3]['units']+json[4]['units']+json[5]['units']+json[6]['units']+json[7]['units'];
			}
		});
	}

    setUnits();

function donorDelete(mail,tble){
	$.ajax({
		url:"./deleteRecord.php",
		type:"POST",
		data:{email:mail,table:tble},
		success:function(data){
			alert(" status : "+data);
		}
	}); 
	location.reload();
}

function patientDelete(mail,tble){
	$.ajax({
		url:"./deleteRecord.php",
		type:"POST",
		data:{email:mail,table:tble},
		success:function(data){
			alert(" status : "+data);
		}
	}); 
	location.reload();
}

function campDelete(mail,tble){
	$.ajax({
		url:"./deleteRecord.php",
		type:"POST",
		data:{email:mail,table:tble},
		success:function(data){
			alert(" status : "+data);
		}
	}); 
	location.reload();
}

$("#madmin").click(function(){
	if(admin==0){
		$("#dashup").hide();
		$("#dashdown").hide();
		$("#stockDash").hide();
		admin=1;
		donor=0;
		patient=0;
		hospital=0;
		camp=0;
		$.ajax({
			url:"./fetch-admins.php",
			type:"POST",
			success:function(data){
				$("#aright").empty();
				$("#aright").append(data);
			}
		});
	}
	else{

	}
});

$("#mdonor").click(function(){
	if(donor==0){
		$("#dashup").hide();
		$("#dashdown").hide();
		$("#stockDash").hide();
		admin=0;
		donor=1;
		patient=0;
		hospital=0;
		camp=0;
		$.ajax({
			url:"./fetch-donors.php",
			type:"POST",
			success:function(data){
				$("#aright").empty();
				$("#aright").append(data);
			}
		});
	}
	else{

	}
});

$("#mpatient").click(function(){
	if(patient==0){
		admin=0;
		donor=0;
		patient=1;
		hospital=0;
		camp=0;
		$.ajax({
			url:"./fetch-patients.php",
			type:"POST",
			success:function(data){
				$("#aright").empty();
				$("#aright").append(data);
			}
		});
	}
});


$("#mcamp").click(function(){
	if(camp==0){
		admin=0;
		donor=0;
		patient=0;
		hospital=0;
		camp=1;
		$.ajax({
			url:"./fetch-camps.php",
			type:"POST",
			success:function(data){
				$("#aright").empty();
				$("#aright").append(data);
			}
		});
	}
});

$("#ustocks").click(function(){
	var sbg=$("#sbg").val();
	var sunit=$("#sunits").val();
	$.ajax({
		url:"./update-stocks.php",
		type:"POST",
		data:{bg:sbg,unit:sunit},
		success:function(data){
			alert(data);
		}
	});
	setUnits();	
});