$(function () {
   
   /* //banner js slider */
   $('.banner_slider').slick({
    arrows: false,
    autoplay: true,
    dots: true,
 })
   //recent product slider 
   $('.recent_product_slider').slick({
    slidesToShow: 4,
    prevArrow:'<i class="fa-solid fa-chevron-left recent_product_slider_icon"></i>',
    nextArrow:'<i class="fa-solid fa-chevron-right recent_product_slider_icon"></i>',
   })
   
    //deals section
  $("#clock").countdown("2023/01/29", function (event) {
   var $this = $(this).html(
     event.strftime(
       "" +
         '<div class="deals_countdown_item"><span>%D</span><span>days</span></div>' +
         '<span class="separator">:</span>' +
         '<div class="deals_countdown_item"><span>%H</span><span>hours</span></div>' +
         '<span class="separator">:</span>' +
         '<div class="deals_countdown_item"> <span>%M</span><span>minutes</span></div>' +
         '<span class="separator">:</span>' +
         '<div class="deals_countdown_item"><span>%S</span><span>seconds</span></div>'
     )
   );
 });
//deals_banner slider
$('.deals_banner_slider').slick({
  arrows: false,
  autoplay:true,
  dots: true,
  slidesToShow: 2
})

  //Latest News section
  $(".latest_news_slide").slick({
   arrows: false,
   slidesToShow: 3,
   dots: true,
   dotsClass: "latest_news_item_dots",
  autoplay: true,
  });


})