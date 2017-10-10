// Page change handler

// home link
$( '[id^="home"]' ).click(function() {

  $(".main-content").fadeOut("slow",function(){
     window.location.href = "/";
  });

  $(".main-content-about").fadeOut("slow",function(){
     window.location.href = "../";
  });

  $(".main-content-project").fadeOut("slow",function(){
     window.location.href = "/";
  });

  $(".main-content-project-detail").fadeOut("slow",function(){
     window.location.href = "../../";
  });

  $(".main-content-contact").fadeOut("slow",function(){
     window.location.href = "../";
  });

});

//about link

$( '[id^="about"]' ).click(function() {


  $(".main-content").fadeOut("slow",function(){
     window.location.href = "/about";
  });

  $(".main-content-about").fadeOut("slow",function(){
     window.location.href = "../about";
  });

  $(".main-content-project").fadeOut("slow",function(){
     window.location.href = "../about";
  });

  $(".main-content-project-detail").fadeOut("slow",function(){
     window.location.href = "../../about";
  });

  $(".main-content-contact").fadeOut("slow",function(){
     window.location.href = "../about";
  });



});



// project link
$( '[id^="projects"]' ).click(function() {

  console.log("project button click");

  $(".main-content").fadeOut("slow",function(){
     window.location.href = "/project";
  });

  $(".main-content-about").fadeOut("slow",function(){
     window.location.href = "../project";
  });

  $(".main-content-project").fadeOut("slow",function(){
     window.location.href = "../project";
  });

  $(".main-content-project-detail").fadeOut("slow",function(){
     window.location.href = "../";
  });

  $(".main-content-contact").fadeOut("slow",function(){
     window.location.href = "../project";
  });

});


// contact link
$( '[id^="contact"]' ).click(function() {

  console.log("project button click");

  $(".main-content").fadeOut("slow",function(){
     window.location.href = "/contact";
  });

  $(".main-content-about").fadeOut("slow",function(){
     window.location.href = "../contact";
  });

  $(".main-content-project").fadeOut("slow",function(){
     window.location.href = "../contact";
  });

  $(".main-content-project-detail").fadeOut("slow",function(){
     window.location.href = "../../contact";
  });

  $(".main-content-contact").fadeOut("slow",function(){
     window.location.href = "../contact";
  });

});



//logo handler


$( ".logo" ).click(function() {

  console.log("project button click");

  $(".main-content").fadeOut("slow",function(){
     window.location.href = "../";
  });

  $(".main-content-about").fadeOut("slow",function(){
     window.location.href = "../";
  });

  $(".main-content-project").fadeOut("slow",function(){
     window.location.href = "../";
  });

  $(".main-content-project-detail").fadeOut("slow",function(){
     window.location.href = "../../";
  });

  $(".main-content-contact").fadeOut("slow",function(){
     window.location.href = "../";
  });



});
