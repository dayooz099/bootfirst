
$(document).ready(function(){
    $(".headings").click(function(){
        $("p").toggle();
    });
    $(".head_in").click(function(){
        $(".recent_works").fadeToggle(1000);
    });
    $("#nav_btn").click(function(){
        $(".nav_options").fadeToggle(500); 
    });
    $("#theme_btn").click(function(){
       
         $(".header,.lower_body,button").css("background-color","#545151");
        $("button").css("color","white");
         $(".header").css("text-color","white");
         $("h3,h2").css("color","white");
         $("p,li,label").css("color","white");
         $("#nav_btn").css("border","1px solid white");


  
    });
    $('.contact_btn').click(function(){
   $('.inside').show()
})
});
