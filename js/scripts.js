/*===========================

    Transition effect navbar

===========================*/

$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('.topnav');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.topnav').css('background-color', 'rgba(34,34,34,0.9)');
       } else {
          $('.topnav').css('background-color', 'transparent');
       }
   });
});

/*===========================

    Back to top button

===========================*/

$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});

/*===========================

    Responsive topnav button

===========================*/


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function responsiveFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/*===========================

    Loader

===========================*/


$(document).ready(function() {
  
  setTimeout(function(){
    $('body').addClass('loaded');
  }, 1000);
  
});