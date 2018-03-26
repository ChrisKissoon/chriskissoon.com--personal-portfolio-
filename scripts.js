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
        if($(window).scrollTop() >  $winHeight-81){
            
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

    


$(".navEl").on('click', function(event) {
     
     $('.nav li > a').removeClass('active1');
     $(this).addClass('active1');     
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
   
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
     
      $('html, body').animate({
        scrollTop: $(hash).position().top - 80
      }, 800, function(){
  
        // Add hash (#) to URL when done scrolling (default click behavior)
       
      });
    
    } // End if
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