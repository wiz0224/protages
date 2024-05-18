    
    
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 0) {
        navbar.classList.add('shrink');
    } if(scrollTop == 0) {
        navbar.classList.remove('shrink');
    }
        lastScrollTop = scrollTop;
    });

var registrationForm = document.getElementById('registration-form');

function moveFormToLeft() {
    registrationForm.style.left = '8%';
    }
function moveFormToOriginal() {
    registrationForm.style.left = '';
    }

    window.addEventListener('scroll', function() {
    if (window.scrollY > window.innerHeight) {
        moveFormToLeft();
    } else {
        moveFormToOriginal();
    }
    });

var LoginForm = document.getElementById('login-form');

    function moveToLeft() {
        LoginForm.style.left = '8%';
        }
    function moveToOriginal() {
        LoginForm.style.left = '';
        }
    
        window.addEventListener('scroll', function() {
        if (window.scrollY > window.innerHeight) {
            moveToLeft();
        } else {
            moveToOriginal();
        }
        });

        



function toggleForm(formToShow) {
    if (formToShow === 'registration') {
        document.getElementById('registration-form').style.display = 'block';
        document.getElementById('login-form').style.display = 'none';
    } else if (formToShow === 'login') {
        document.getElementById('registration-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
    }
}


document.addEventListener('DOMContentLoaded', (event) => {
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    let currentIndex = 0;
    const intervalTime = 3000; // 3000ms = 3 seconds

    function goToNextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlidePosition();
    }

    function updateSlidePosition() {
        const slideWidth = slides.children[0].offsetWidth;
        const newTransformValue = -currentIndex * slideWidth;
        slides.style.transform = `translateX(${newTransformValue}px)`;
    }

    setInterval(goToNextSlide, intervalTime);
});