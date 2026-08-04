window.onload = function () {
    alert("Welcome to Nusrat Jahan Dipa's Portfolio!");
};

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });

    });

});


const images = document.querySelectorAll("#achievement img, #certificate img");

images.forEach(function(img){

    img.addEventListener("click", function(){

        if(img.style.transform === "scale(2)"){

            img.style.transform = "scale(1)";

        }else{

            img.style.transform = "scale(2)";
            img.style.transition = "0.4s";

        }

    });

});

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function(){

    sections.forEach(function(section){

        const position = section.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }

    });

});