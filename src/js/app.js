//Side-Bar Start Here
function dropDown() {
  document.querySelector('#submenu').classList.toggle('hidden')
  document.querySelector('#arrow').classList.toggle('rotate-0')
}

function Openbar() {
  document.querySelector('.sidebar').classList.toggle('top-0')
}
//Side-Bar End Here

// Navbar Change Color When Scroll Start Here
let navbar = document.getElementById('navBar');

if (document.documentElement.scrollTop > 30) {
  navbar.classList.add('bg-white')
} else {
  navbar.classList.remove('bg-white')
}

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 30) {
    navbar.classList.add('bg-white')
  } else {
    navbar.classList.remove('bg-white')
  }
})
// Navbar Change Color When Scroll End Here

// Table One Start Here
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += "active";
}
// Table One End Here

// Table Two Start Here
let secondSlideIndex = 1;
showSecondSlides(secondSlideIndex);

function secondPlusSlide(i) {
  showSecondSlides((secondSlideIndex += i));
}

function secondCurrentSlide(i) {
  showSecondSlides((secondSlideIndex = i));
}

function showSecondSlides(i) {
  let n;
  let slider = document.getElementsByClassName("secondSlider");
  let secondDots = document.getElementsByClassName("secondDots");
  if (i < 1) {
    secondSlideIndex = slider.length;
  }
  for (n = 0; n < slider.length; n++) {
    slider[n].style.display = "none";
  }
  for (n = 0; n < secondDots.length; n++) {
    secondDots[n].className = secondDots[n].className.replace(
      "active",
      ""
    );
  }
  slider[secondSlideIndex - 1].style.display = "block";
  secondDots[secondSlideIndex - 1].className += "active";
}
      // Table Two End Here