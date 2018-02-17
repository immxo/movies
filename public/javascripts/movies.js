function ajaxload(){	
		var movie = document.getElementById('search').value;
		console.log(movie);
		$.ajax({
			url: "http://www.omdbapi.com/?t=&apikey=f881e201",
			type: 'GET',
			dataType: 'json',
			data: {t: movie},		
		})
		.done(function(data) {
			
			console.log(data);
			$('#movie').empty().append(
				
				"<h1>"+data.Title+"</h1>"+
				"<p>"+data.Year+"</p>"+
				"<p>"+data.Actors+"<p>"+
				"<p>"+data.Country+"<p>"+
				"<p>"+data.Plot+"<p>"+
				"<p>"+data.imdbRating+"<p>"
			);

			$('#poster').empty().append(
				"<img src='"+data.Poster+"'/>"
			);

			$('.addBtn').removeClass("invisible");



		})
	
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		})

		 
	}	

function addToWatch(){
	
	$('#watchPoster').append(
		"<img src='"+$('#poster img').attr('src')+"'/>"
	);

	$(".watch").removeClass("invisible");
}
