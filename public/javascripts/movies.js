function ajaxload(){	
		var movie = document.getElementById('search').value;
		console.log(movie);
		$.ajax({
			url: "http://www.omdbapi.com/?t=&plot=full&apikey=f881e201",
			type: 'GET',
			dataType: 'json',
			data: {t: movie},		
		})
		.done(function(data) {
			
			console.log(data);
			$('#movie').empty().append(
				"<p><span class='descript'>Дата выхода: </span>"+data.Year+"</p>"+
                "<p><span class='descript'>Страна: </span>"+data.Country+"<p>"+
                "<p><span class='descript'>Тип: </span>"+data.Type+"</p>"+
                "<p><span class='descript'>Жанр: </span>"+data.Genre+"</p>"+
                "<p><span class='descript'>Актеры: </span>"+data.Actors+"<p>"+
                "<p><span class='descript'>Длительность: </span>"+data.Runtime+"<p>"+
                "<p><span class='descript'>Рейтинг: </span>"+data.imdbRating+"<p>"+
            	"<p><span class='descript'>Режисер: </span>"+data.Writer+"<p>"+
                "<p><span class='descript'>Награды: </span>"+data.Awards+"<p>"


			);

            $('#title').empty().append(
                "<h1>"+data.Title+"</h1>"
            );

			$('#poster').empty().append(
				"<img src='"+data.Poster+"'/>"
			);

            $('#description').empty().append(
                "<p>"+data.Plot+"</p>"
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
