

 
 
$(".faq-item").click(function () {

    $(".faq-content-inner").slideUp(500);
    $(".faq-item").removeClass("active"); 

    var answer = $(this).find(".faq-content-inner");
    if (!answer.is(":visible")) {
        answer.stop(true, true).slideDown(500);
        $(this).addClass("active");
    }
});
 

$(window).scroll(function () {
    var scrollHeight = $(document).height() - $(window).height();
    var scrollPercent = ($(window).scrollTop() / scrollHeight) * 100; 
    if (scrollPercent >= 4) {
        $(".leftsidebt").addClass("show");
    } else {
        $(".leftsidebt").removeClass("show");  
    }
});

 
const modal = document.getElementById('videoModal');
const player = document.getElementById('videoPlayer');
const closeBtn = document.querySelector('.close-btn');
const videoBoxes = document.querySelectorAll('.videobox'); 
 
videoBoxes.forEach(box => {
    box.addEventListener('click', function () { 
        const videoId = this.getAttribute('data-video');  
        player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`; 
        modal.style.display = 'flex';
    });
});

 
closeBtn.addEventListener('click', closeModal); 
modal.addEventListener('click', function (e) {
    if (e.target === modal) {
        closeModal();
    }
});

 function closeModal() {
    modal.style.display = 'none';
    player.src = '';  
}


document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("consultationPopup");
    const closeBtn = document.getElementById("closePopup");

    setTimeout(function () {
        popup.classList.add("active");
    }, 1200);


    closeBtn.addEventListener("click", function () {
        popup.classList.remove("active");
    });


    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.classList.remove("active");
        }
    });
});



let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop; 
    if (currentScroll > lastScrollTop && currentScroll > 100) {

        header.classList.add('hideheader');
    } else { 
        header.classList.remove('hideheader');
    } 
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;  
});

 
document.addEventListener("DOMContentLoaded", function () {
 
  const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.5
  });

 
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

 
  lenis.on("scroll", function ({ scroll }) {

    const section = document.querySelector(".tp-hero-bottom");

    if (!section) return;

    const sectionOffset = section.getBoundingClientRect().top + scroll;
    const windowHeight = window.innerHeight;

    const distance = scroll - sectionOffset + windowHeight;

    if (distance > 0) {

 
      document.querySelectorAll(".tp-hero-bottom-height img").forEach(function (img) {
        img.style.transform =
          "translateY(" + (distance * -0.15) + "px) scale(1.05)";
      });

 
      document.querySelectorAll(".tp-hero-customer-shape").forEach(function (shape) {
        shape.style.transform =
          "translateY(" + (distance * -0.08) + "px)";
      });

    }
  });

}); 
 

