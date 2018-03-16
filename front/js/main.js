$(document).ready(function(){
	var car,comment,wishes,date,time,from,to;
	var n=0;
	

	//Car type checking with click
	$('.car-container').click(function(){
		$('.car-container').css('border','none');
		$('.car-container').css('opacity','0.8');
		car = $(this).clone();								
		$(this).css('border','3px inset snow');
		$(this).css('opacity','1');
		$('#selectedCar').html(car);
	});
	
	//Load description field
	$('#comment').keyup(function(){
		comment=$(this).val();								
		$('#sComment').html(comment);
	});

	//Wishes field
	$('#wishes').keyup(function(){
		wishes=$(this).val();								
		$('#sWishes').html(wishes);
	});


	$('.btn-warning').click(function(){
		$('#car').addClass('active');
	});
	

	$('.btn-primary').click(function(){
		n+=1;
		$('.vertical-nav li').removeClass('active');
		$('.vertical-nav li:eq('+n+')').addClass('active');
		if(n==3){n=0};
	});
	$('#rd').click(function(){
		from = $('#from').val();
		to = $('#to').val();
		$('#sFrom').html('Откуда: '+from);
		$('#sTo').html('Куда: '+to);

		date=$('#date').val();									
		time=$('#time').val();
		console.log(date + time);
		$('#sDate').html(date+' ('+time+')');
	});
	
	$('#send').click(function(){
		if(car.id||comment||from||to||date||time==''){
			alert('Не все поля заполнены!');
		}
	});
	

	


});

