function sendRequest(url, json){
	  $.ajax({
	  	url: url,
	  	data: JSON.stringify(json),
	  	type: "POST",
	  	
	  	beforeSend: function(xhr) {
	  		xhr.setRequestHeader("Accept", "application/json");
	  		xhr.setRequestHeader("Content-Type", "application/json");
	  	},
	  	success: function(item) {
	  		console.log(JSON.stringify(item));

	  		if (item.success == false){
	  			alert(item.message);
	  		}else{
		  		alert('Your ' + item.data.type + ' request was successfully registered!');
	  		}
	  	},
	  	error: function(jq, status, message){
	  		alert(jq.status + " - " + message);
	  	}
	  });

}

$(document).ready(function(){
  
	$('.header_cover').click(function() {
		  
		  var request_type = $(this).find('h3').text();  
		  var comment = 'Comment ---- ' + request_type;
		  var id = $(this).attr('id');
		  var patient = '0031a000003RTbLAAW';
		  var sub_category = 'SUB';
		  
		  var json = {
	  		"type":request_type,
	  		"comment":comment,
	  		"originId":id,
	  		"patient":patient,
	  		"subCategory":sub_category
  		  }
		  
		  console.log(JSON.stringify(json));

		  var url = 'http://localhost:8080/demo-hls/api/v1/pr/request';

		  sendRequest(url, json);
	   
	});

});







