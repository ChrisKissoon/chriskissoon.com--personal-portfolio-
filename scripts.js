$(window).on("load",function(){

    
     if($(window).scrollTop() >  $winHeight-90){
            
            $(".navbar").addClass("navbar1");
            $(".navbar-default .navbar-nav>li>a").css("color", "black");
            $(".navbar-default .navbar-nav>li>a").hover(function(){
                                $(this).css("color", "#c1272d");
                                }, function(){
                                $(this).css("color", "black");
             });
             $(".navbar-brand > img").attr('src','images/logo1.svg');
            
        }else{
            $(".navbar").removeClass("navbar1");
            $(".navbar-default .navbar-nav>li>a").css("color", "white");
            $(".navbar-default .navbar-nav>li>a").hover(function(){
                                $(this).css("color", "#c1272d");
                                }, function(){
                                $(this).css("color", "white");
             });
            $(".navbar-brand > img").attr('src','images/logo12.svg');
            
            
        }
    
 var $grid = $('.grid').isotope({
  // options
  itemSelector: '.grid-item',
     
      layoutMode: 'fitRows',
      
      filter: '.2',
      filter: '.3',
      filter: '.4',
      filter: '*'
     
      
     
    
});
 $('.filter-button-group').on( 'click', 'button', function() {
     $('.filter-button-group > button').removeClass("activity");
     $(this).addClass("activity");
     var filterValue = $(this).attr('data-filter');
     $grid.isotope({ filter: filterValue });
});  
   


});

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
        if($(window).scrollTop() >  $winHeight-90){
            
            $(".navbar").addClass("navbar1");
            $(".navbar-default .navbar-nav>li>a").css("color", "black");
            $(".navbar-default .navbar-nav>li>a").hover(function(){
                                $(this).css("color", "#c1272d");
                                }, function(){
                                $(this).css("color", "black");
             });
             $(".navbar-brand > img").attr('src','images/logo1.svg');
            
        }else{
            $(".navbar").removeClass("navbar1");
            $(".navbar-default .navbar-nav>li>a").css("color", "white");
            $(".navbar-default .navbar-nav>li>a").hover(function(){
                                $(this).css("color", "#c1272d");
                                }, function(){
                                $(this).css("color", "white");
             });
            $(".navbar-brand > img").attr('src','images/logo12.svg');
            
            
        }
   
});


    
$('a[href^="#"]').on('click', function(event) {
    $(".mobile-nav").fadeOut(200);
    var target = $(this.getAttribute('href'));
  
   if(target[0]["id"] == 4){
       
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top+-15
        }, 1000);
       
   }else if( target.length ) {
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
    
    
$(".customBtn").click(function(){
    
    
    var fname = $("#firstName").val();
    var lname = $("#lastName").val();
    var email = $("#email").val();
    var selection = $("#selection").val();
    var message =  $("#message").val();
    $.post("contactForm.php", {
        fname :fname,
        lname :lname,
        email :email,
        selection :selection,
        message:message
    }, function(data, status){
       
     
        if(data == "<p class='animated flash'>Your message was received</p>"){
             $("#firstName").val('');
             $("#lastName").val('');
             $("#email").val('');
             $("#selection").val('select');
             $("#message").val('');
            $(".error").fadeIn().html(data);
            
        }else{
             $("#firstName").css("border-bottom","1px solid crimson");
             $("#lastName").css("border-bottom","1px solid crimson");
             $("#email").css("border-bottom","1px solid crimson");
             $("#selection").css("border-bottom","1px solid crimson");
             $("#message").css("border-bottom","1px solid crimson");
             $(".error").fadeIn().html(data);
        }
            
            
           
    
        
    });
           
    
}); 
    
    
    
    
    
    
    
    
    
    
   
});   



//var vHeight = window.innerHeight;
//var newHeight = vHeight - 100;
//var newPixel = newHeight+"px";
//document.getElementById("jumbotron").style.height = newPixel;