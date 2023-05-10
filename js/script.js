/* Script para Menú Hamburguesa */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

function scrollFunction() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

window.onscroll = scrollFunction;


/* Script Carousel */ 

const buttonPrev = document.getElementById("button-prev");
const buttonNext = document.getElementById("button-next");
const track = document.getElementById("track");
const slickList = document.getElementById("slick-list");
const slick = document.querySelectorAll(".slick");

const slickWidth = slick[0].offsetWidth;

buttonPrev.onclick = () => Move(1);
buttonNext.onclick = () => Move(2);

function Move(value) {
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left = "" ? leftPosition = tack.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0,-2)*-1);

    if(leftPosition < (trackWidth - listWidth) && value == 2) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    } else if(leftPosition > 0 && value == 1) {
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}

/* Script para consumir API */

async function getDogPhotos() {
    try {
      const arrDogPhotos = document.querySelectorAll(".carousel-img");
      const url =
        "https://api.thedogapi.com/v1/images/search?format=json&limit=15";
      const options = {
        method: "GET",
        headers: {
          "x-api-key":
            "live_RtYC0gBTCLs63KjZptWU0VzGdPIgRJt05yxC3tgeSleJ62WHq2gNzsBsWFxgqcvL",
          "Content-Type": "application/json",
        },
      };
      let counter = 0;
      const response = await fetch(url, options);
      const data = await response.json();
      data.forEach((dog) => {
        if (dog.url.slice(-3) !== "gif" && counter < 12) {
          arrDogPhotos[counter].src = dog.url;
          counter++;
        }
      });
    } catch (error) {
      console.error(error);
    }
  }
  
  getDogPhotos();
  

/*Script para validaciòn de datos del envio del formulario */
function validar() {
                           
    var a = document.getElementById('nombre').value;
    var b = document.getElementById('email').value;
    var c = document.getElementById('telefono').value;
    var d = document.getElementById('tBox').value;

    if (a.length==0 || !isNaN(a)){
        alert("Verificar el campo Nombre");        
        document.getElementById('nombre').focus();
        return false;
    }
    if (b.length==0 || !isNaN(b)){
        alert("Verificar el campo E Mail");        
        document.getElementById('email').focus();
        return false;
    }
    if (isNaN(c) || (isNaN(c) && c.length==0 || c.length==0 ) ){
        alert("Verificar el campo Telefono");        
        document.getElementById('telefono').focus();
        return false;
   
    }
    if (d.length==0 || !isNaN(d)){
        alert("Verificar el campo Mensaje");        
        document.getElementById('tBox').focus();
        return false;
    }
    alert("Datos enviados con exito!");    
                                    
}