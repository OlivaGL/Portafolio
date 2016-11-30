// alert('¡FUNCIONA!');

$(document).ready(function(){
    $(".icono").hover(function(){
        $(this).css("color", "yellow");
        }, function(){
        $(this).css("color", "pink");
    });
});





// $(document).ready(function() {
// 	    $('.itemNav').click(function(){

//                     var $target = $('.nav-collapse');

//                     if($target.hasClass('in')){

//                         $target.height(0).css('overflow','hidden');                           }

//                 });
// $(document).ready(function(){
//     // Activate Carousel
//     $("#myCarousel").carousel();
    
//     // Enable Carousel Indicators
//     $(".item1").click(function(){
//         $("#myCarousel").carousel(0);
//     });
//     $(".item2").click(function(){
//         $("#myCarousel").carousel(1);
//     });
//     $(".item3").click(function(){
//         $("#myCarousel").carousel(2);
//     });

    
//     // Enable Carousel Controls
//     $(".left").click(function(){
//         $("#myCarousel").carousel("prev");
//     });
//     $(".right").click(function(){
//         $("#myCarousel").carousel("next");
//     });
// });