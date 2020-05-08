$(document).ready(function () {
  
  
  //  fixed menu
  $('.fixed-menu .toggler').on('click',function(){

    $(this).parent('.fixed-menu').toggleClass('is-visible');

    if($(this).parent('.fixed-menu').hasClass('is-visible')){


      $(this).parent('.fixed-menu').animate({
        right: -220
      },500)

      $('body').animate({
        marginRight: 0
      },500)

    }else{

      $(this).parent('.fixed-menu').animate({
        right: 0
      },500)

      $('body').animate({
        marginRight: 220
      },500)

    }

  })

 

	$(' .primary-ul .menu').on('click', function() {
		$( $(this).children()[1] ).slideToggle(300);
	});
  

  $('.info-form i').on('click',function(){
    $('.info').slideToggle();
  })

 


});

