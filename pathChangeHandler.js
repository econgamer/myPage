// Page change handler

// home link
$( "#home" ).click(function() {

  $(".main-content").fadeOut("slow",function(){
     window.location.href = "index.html";
  });

  $(".main-content-project").fadeOut("slow",function(){
     window.location.href = "index.html";
  });

});



// project link
$( "#projects" ).click(function() {

  $(".main-content").fadeOut("slow",function(){
     window.location.href = "project.html";
  });

  $(".main-content-project").fadeOut("slow",function(){
     window.location.href = "project.html";
  });

});
