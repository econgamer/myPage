// Page change handler

// home link
$( "#home" ).click(function() {

  $(".main-content").fadeOut("slow",function(){
     window.location.href = "/";
  });

  $(".main-content-project").fadeOut("slow",function(){
     window.location.href = "/";
  });

});



// project link
$( "#projects" ).click(function() {

  $(".main-content").fadeOut("slow",function(){
     window.location.href = "project";
  });

  $(".main-content-project").fadeOut("slow",function(){
     window.location.href = "project";
  });

});
