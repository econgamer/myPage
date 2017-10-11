var lineDrawing = anime({
  targets: '.lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 700 },
  direction: 'alternate',
  loop: false
});


$( document ).ready(function() {




  $( ".opening" ).fadeIn( "opening", function() {
    // Animation complete
  });

  var folded = new OriDomi('.paper', {maxAngle:88, shading:'hard' });



  $( ".paper" ).mouseover(
  function() {
    console.log("Paper trick: " ,folded._lastOp.angle);

    if(folded._lastOp.angle < 25){
      $('.hint').css("display", "none");
    }

    if(folded._lastOp.angle > 82){
      folded.reveal(82);
    }


    // else{
    //   $('.hint').css("display", "block");
    // }
  },
);

  folded.reveal(82);

  setTimeout(function(){ $( ".opening" ).fadeOut( "slow", function() {
    $( ".main-content" ).fadeIn( "slow", function() {
      // Animation complete
    });




  }); }, 3900);







});
