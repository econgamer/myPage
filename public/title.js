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

  var folded = new OriDomi('.paper');

  $( ".paper" ).hover(
  function() {
    console.log("Paper trick: " ,folded._lastOp.angle);

    if(folded._lastOp.angle < 25){
      $('.hint').css("display", "none");
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
