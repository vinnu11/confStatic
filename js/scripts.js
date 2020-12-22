$(document).ready(function(){
    $("#mycarousel").carousel({ interval: 2000, pause:'false'});
    $("#carouselButton").on('click',function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });

    $('#loginlink').on('click',function(){
        $('#loginModal').modal('show');
    });

    $('#reserveTable').on('click',function(){
        $('#reserveModal').modal('show');
    });
});