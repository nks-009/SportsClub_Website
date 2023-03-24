




function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     slides[slideIndex - 1].style.display = "block";
//     setTimeout(showSlides, 5000);
// }

burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.mhead')
rightNav = document.querySelector('.rhead')




burger.addEventListener('click', () => {
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})


// searchbtn = document.querySelector('.searchbtn')
// search = document.querySelector(".search");


// searchbtn.addEventListener('click', () => {
//     search.classList.toggle("hde");
// })

// function call() {
//     const n = document.getElementById("us").value;
//     const element = document.getElementById(n);
//     element.classList.toggle("hde");
// }