const slides=document.querySelectorAll(".slide");



slides.forEach(slide => {
    slide.addEventListener('click', ()=> {
        removeCurrentActives()
        slide.classList.add('active');
    })
})

function removeCurrentActives () {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
}

const slideHeaders = document.querySelectorAll(".slide h3");

// Function to adjust font size based on viewport width
function adjustFontSize() {
    const isSmallScreen = window.innerWidth<=1000;
    slideHeaders.forEach((header) => {
        if(isSmallScreen){
            header.style.fontSize="50px";
        }
        else{
            header.style.fontSize="60px"
        }
    });
}


window.addEventListener("resize", adjustFontSize);

adjustFontSize();
