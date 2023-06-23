//change navbar styles to scroll, as we move 
window.addEventListener('scroll',()=> {
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY>100)
})

//show/hide faq answers

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click',()=> {
        faq.classList.toggle('open');
        //change icon to minus
        const icon= faq.querySelector('.faq__icon i');
        if(icon.className == 'uil uil-plus')
            icon.className ='uil uil-minus';
        else
            icon.className = 'uil uil-plus'
    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // when screen-size is greater than 600px
    breakpoints: {
        600: {
            slidesPerView: 3
        }
    }
  });