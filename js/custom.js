

 
 
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
