	$( document ).ready(function() {
$('#normal').click(function() {
	$.mobile.changePage ($("#pg2"));
});


$('#search1').click(function() {
	$.mobile.changePage ($("#search"));
});

var obj;$.getJSON('http://akash.com.bd:8080/stockwatch/getData.php?output=json', function(json) {

  
  obj = json;
$('#my-final-table').dynatable({
  dataset: {
    records: obj
  }
});
});


$('#searchtxt').keyup(function(){
		var searchField = $('#searchtxt').val();
		var myexp = new RegExp(searchField,"i");
		$.getJSON('http://akash.com.bd:8080/stockwatch/getData.php?output=json', function(data) {
			var obj = data;
var output = '<ul>';
			$.each(obj, function(key,val){

				if (val.company.search(myexp)!= -1){
output+='<li>';
output+='<h2>'+"Company: "+ val.company+'</h2>';//changeAmount
output+='<p>'+"changeAmount: "+val.changeAmount+", " +"change %: "+ val.changePercent +'</p>';
				}


				});
output+='</ul>';

$('#updateee').html(output);
		 });


	});



});