$( document ).ready(function() {

  $( ".main-content-project" ).fadeIn( "slow", function() {

  });

  $( ".main-content-project-detail" ).fadeIn( "slow", function() {

  });


  //link click handler
  $( "#60" ).click(function() {

    $(".main-content-project").fadeOut("slow",function(){
       window.location.href = "60days";
    });

  });

  $( "#android" ).click(function() {

    $(".main-content-project").fadeOut("slow",function(){
       window.location.href = "android";
    });

  });

  $( "#python" ).click(function() {

    $(".main-content-project").fadeOut("slow",function(){
       window.location.href = "python";
    });

  });

  $( "#2d" ).click(function() {

    $(".main-content-project").fadeOut("slow",function(){
       window.location.href = "stickmanWar";
    });

  });

  $( "#youtube" ).click(function() {

    $(".main-content-project").fadeOut("slow",function(){
       window.location.href = "youtubefun";
    });

  });

});
