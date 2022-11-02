$(document).ready(function(){
  AOS.init();

    $('.m_menu_box #m_label').click(function(){
        $('.m_sub_box').toggleClass('active')
    });

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 0,
        // freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

  
      });
    
      var swiper = new Swiper(".mySwiper2", {
        loop:true,
        effect:"fade",  
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        autoplay:{
          delay:2000,
        },
      });

      // $('m_sub_box').click(function(e){
      //   if(e.target == e.)
      // });
});