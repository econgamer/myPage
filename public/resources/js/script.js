    var animated = false;

    $('.js--nav-icon').click(function(){
        
        
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        var bar = $('.nav-bar');
        var maindiv = $('.main-div');
        
        
        if(animated == false){
            animated = true;
            
            nav.animate({width: "+=300"}, 900, function() { 
            });
        
            setTimeout(function(){bar.fadeIn( "fast" );}, 400);
        }else{
            animated = false;
            
            nav.animate({width: "-=300"}, 900, function() { 
            });
            setTimeout(function(){bar.fadeOut( "fast" );}, 100);
        }
        
        

        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }else{
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');
        }
        
        
        
        
    });
    
    
    
