$(document).ready(function(){
    
    
 //Call owl-carousel slider   
  $(".owl-carousel").owlCarousel({
      
      items:1,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:4000,
      autoplayHoverPause:true,
      autoplaySpeed:1000
      
  });
  $winHeight =  $(window).height()
  $(window).on('scroll', function() {
        if($(window).scrollTop() >  $winHeight-85){
            
            $(".navbar").addClass("navbar1");
            $("#bs-example-navbar-collapse-1 ul li a").css("color", "black");
            $("#bs-example-navbar-collapse-1 ul li a").hover(function(){
                                $(this).css("color", "#c1272d");
                                }, function(){
                                $(this).css("color", "black");
             });
             $(".navbar-brand > img").attr('src','images/logo1.svg');
            
        }else{
            $(".navbar").removeClass("navbar1");
            $("#bs-example-navbar-collapse-1 ul li a").css("color", "white");
            $("#bs-example-navbar-collapse-1 ul li a").hover(function(){
                                $(this).css("color", "#c1272d");
                                }, function(){
                                $(this).css("color", "white");
             });
            $(".navbar-brand > img").attr('src','images/logo12.svg');
            
            
        }
   
});


    
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top-80
        }, 1000);
    }
});    

  
  $(window).on('scroll', function() {
          $('.target').each(function() {
              if($(window).scrollTop() >= $(this).offset().top - 80 || $(window).scrollTop() >= $(this).offset().top - 82 ) {
                  var id = $(this).attr('id');
                  $('.nav li > a').removeClass('active1');
                  $('.nav li > a[href="#'+id+'"]').addClass('active1');
              }
          });
      });
   
});   



//var vHeight = window.innerHeight;
//var newHeight = vHeight - 100;
//var newPixel = newHeight+"px";
//document.getElementById("jumbotron").style.height = newPixel;