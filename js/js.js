$(document).ready(function () {

    var owl = $('.owl-carousel');
    // Go to the next item
    $('.customNextBtn').click(function () {
        owl.trigger('next.owl.carousel');
    });
    // Go to the previous item
    $('.customPrevBtn').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    });

    $('#owlcc').owlCarousel({
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });



});
// $(document).ready(function(){
//     $("button").click(function(){
//         $(".logo").hide();
//     });