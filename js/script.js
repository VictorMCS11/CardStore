// const welcomeAlert = () =>{
//     document.getElementById("welcomeModal").style.display = "block";
//     document.querySelector(".logo_welcome").style.animationPlayState = "paused";
//     document.querySelector(".index_welcome").style.animationPlayState = "paused";
//     document.documentElement.style.overflow = "hidden";
// }

// const closeWelcomeAlert = () =>{
//     document.getElementById("welcomeModal").style.display = "none";
//     document.querySelector(".logo_welcome").style.animationPlayState = "running";
//     document.querySelector(".index_welcome").style.animationPlayState = "running";
//     document.documentElement.style.overflow = "auto";
// }
// welcomeAlert()

// Menu Burguer para móvil
const toggleMenu = () => {
    const menuButton = document.getElementById('menu_button');
    const menuOptions = document.querySelector('.menu_open_options');
    const icons = {
        whiteBurguer: document.querySelector('.white_burguer'),
        yellowBurguer: document.querySelector('.yellow_burguer'),
        whiteClose: document.querySelector('.white_close'),
        yellowClose: document.querySelector('.yellow_close')
    };

    if (menuButton.checked) {
        // Mostrar íconos de cierre y opciones de menú
        icons.whiteBurguer.style.display = "none";
        icons.yellowBurguer.style.display = "none";
        icons.whiteClose.style.display = "block";
        icons.yellowClose.style.display = "block";
        menuOptions.style.display = "flex";
    } else {
        // Restaurar íconos de hamburguesa y ocultar opciones
        icons.whiteBurguer.style.display = "block";
        icons.yellowBurguer.style.display = "block";
        icons.whiteClose.style.display = "none";
        icons.yellowClose.style.display = "none";
        menuOptions.style.display = "none";
    }
};

// Menu Burguer para móvil
const toggleSubmenu = () => {
    const sublist = document.querySelector('.sublist_open');
    const submenuOption = document.querySelector('.sublist_open_option');

    if (sublist.style.display === "none" || !sublist.style.display) {
        sublist.style.display = "block";
        submenuOption.style.backgroundColor = "var(--primary-color)"
    } else {
        sublist.style.display = "none";
        submenuOption.style.backgroundColor = "white"
    }
};

const closeMenuOnClick = () => {
    const menuButton = document.getElementById('menu_button');
    let menuLinks = Array.from(document.querySelectorAll('.menu_open_options a')); // Seleccionar todos los enlaces
    // menuLinks = menuLinks.filter(link => !link.classList.contains("sublist_open_a"))
    console.log(menuLinks)
    menuLinks.forEach(link => {
        if(!link.classList.contains("sublist_open_a")){
            link.addEventListener('click', () => {
                menuButton.checked = false; // Desmarcar el botón del menú
                toggleMenu(); // Actualizar el estado del menú
            });
        }else{

        }
    });
};

const setupMenu = () => {
    // Inicializar eventos
    const menuButton = document.getElementById('menu_button');
    const submenuOption = document.querySelector('.sublist_open_option');

    menuButton.addEventListener('change', toggleMenu);
    submenuOption.addEventListener('click', toggleSubmenu);

    closeMenuOnClick(); // Cerrar menú al hacer clic en cualquier enlace

    // Inicializar estado del menú
    document.querySelector('.menu_open_options').style.display = "none";
    document.querySelector('.sublist_open').style.display = "none";
};

document.addEventListener('DOMContentLoaded', setupMenu);

//Aquí empieza el carrusel automático
let headerBgCounter = 1;
const slideShow = () =>{

    let headersImgs = document.querySelectorAll(".fondosHero")

    for(let i = 0; i < headersImgs.length; i++){
        headersImgs[i].classList.remove("nextHeaderImg");
        headersImgs[i].classList.remove("mainHeaderImg")
        headersImgs[i].classList.remove("hiddenHeaderImg")

        if(i === headerBgCounter){
            headersImgs[i].classList.add("nextHeaderImg");
        }else if(i === headerBgCounter-1 && headerBgCounter != 0){
            headersImgs[i].classList.add("mainHeaderImg");
        }else if(i === headersImgs.length-1 && headerBgCounter === 0){
            headersImgs[i].classList.add("mainHeaderImg");
        }else{
            headersImgs[i].classList.add("hiddenHeaderImg");
        }
    }
    headerBgCounter++;
    if(headerBgCounter === headersImgs.length){
        headerBgCounter = 0;
    }
}
setInterval(slideShow, 6000)



const closeCashierAlert = () =>{
    document.getElementById("cashierModal").style.display = "none";
    document.body.style.overflowY = "auto";
}

const cashierAlert = (e) =>{
    e.preventDefault();

    let data = Object.fromEntries(new window.FormData(e.target));
    let message1 = ""
    let message2 =""
    let title = ""
    console.log(data)

    if(data.name !== "" && data.email !== "" && data.address !== "" && data.number !== ""){
        let name = data.name
        let email = data.email
        let address = data.address
        let number = data.number

        message1 = `¡${name}, nos alegra comunicarte que tu pedido ha sido realizado con éxito!`
        message2 = `Email: ${email} </br>
        Dirección: ${address} </br>
        Número de tel.: ${number}`
        title = "¡Pedido realizado!"
    }else{
        title = `¡Ups! </br>💀💀💀💀💀`
        message1 = `Lamentamos comunicarte que tu pedido no se ha podido realizar con éxito ya que faltan datos`
    }

    document.getElementById("cashierModal").style.display = "block";
    document.body.style.overflowY = "hidden";
    document.getElementById("closeCashierAlertButton").focus();

    document.getElementById("cashierTitle").innerHTML = title
    document.getElementById("cashierMessage1").innerHTML = message1
    document.getElementById("cashierMessage2").innerHTML = message2
}

document.addEventListener('submit', cashierAlert);

//Aquí empieza el código para el menú
let actualScrollPos = document.documentElement.scrollTop;
if(actualScrollPos === 0){
    document.querySelector(".shoppingCart").style.boxShadow = "0 0 0 0px rgb(0, 0, 0)";
    document.querySelector(".shoppingCart").style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.querySelector(".menu_button").style.boxShadow = "0 0 0 0px rgb(0, 0, 0)";
    document.querySelector(".menu_button").style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.querySelector(".menu").style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.querySelector(".menu_container").style.maxWidth = "1001px";
    document.querySelector(".sublist").style.backgroundColor = "rgba(0, 0, 0, 0)";
}else{
    document.querySelector(".shoppingCart").style.boxShadow = "0 0 0 10px rgb(0, 0, 0)";
    document.querySelector(".shoppingCart").style.backgroundColor = "rgba(0, 0, 0, 1)";
    document.querySelector(".menu_button").style.boxShadow = "0 0 0 10px rgb(0, 0, 0)";
    document.querySelector(".menu_button").style.backgroundColor = "rgba(0, 0, 0, 1)";
    document.querySelector(".menu").style.backgroundColor = "rgba(0, 0, 0, 1)";
    document.querySelector(".menu_container").style.maxWidth = "1920px";
    document.querySelector(".sublist").style.backgroundColor = "rgba(0, 0, 0, 1)";
}
window.addEventListener('scroll', () =>{
    let newScrollPos = document.documentElement.scrollTop;
    if(actualScrollPos < newScrollPos && newScrollPos > 0){
        actualScrollPos = newScrollPos;
        document.querySelector(".shoppingCart").style.marginTop = "65px";
        document.querySelector(".menu_button").style.marginTop = "157px";
        document.querySelector(".menu").style.marginTop = "-80px";
    }else if(actualScrollPos > newScrollPos && newScrollPos > 0){
        actualScrollPos = newScrollPos;
        document.querySelector(".shoppingCart").style.marginTop = "-15px";
        document.querySelector(".menu_button").style.marginTop = "0";
        document.querySelector(".menu").style.marginTop = "0";
    }
    if(newScrollPos === 0){
        document.querySelector(".shoppingCart").style.boxShadow = "0 0 0 0px rgb(0, 0, 0)";
        document.querySelector(".shoppingCart").style.backgroundColor = "rgba(0, 0, 0, 0)";
        document.querySelector(".menu_button").style.boxShadow = "0 0 0 0px rgb(0, 0, 0)";
        document.querySelector(".menu_button").style.backgroundColor = "rgba(0, 0, 0, 0)";
        document.querySelector(".menu").style.backgroundColor = "rgba(0, 0, 0, 0)";
        document.querySelector(".menu_container").style.maxWidth = "1001px";
        document.querySelector(".sublist").style.backgroundColor = "rgba(0, 0, 0, 0)";
    }else{
        document.querySelector(".shoppingCart").style.boxShadow = "0 0 0 10px rgb(0, 0, 0)";
        document.querySelector(".shoppingCart").style.backgroundColor = "rgba(0, 0, 0, 1)";
        document.querySelector(".menu_button").style.boxShadow = "0 0 0 10px rgb(0, 0, 0)";
        document.querySelector(".menu_button").style.backgroundColor = "rgba(0, 0, 0, 1)";
        document.querySelector(".menu").style.backgroundColor = "rgba(0, 0, 0, 1)";
        document.querySelector(".menu_container").style.maxWidth = "1920px";
        document.querySelector(".sublist").style.backgroundColor = "rgba(0, 0, 0, 1)";
    }
})


//envelopes cards
const selectEnvelopes = (section, background, text) =>{
    let sections = document.querySelectorAll(".envelopes_cards")
    let sectionButtonBackground = document.querySelectorAll(".buttonBackground")
    let sectionButtonText = document.querySelectorAll(".buttonText")

    sections.forEach(section =>{
        section.classList.remove("envelopesSelected")
    })
    sectionButtonBackground.forEach(button =>{
        button.classList.remove("backgroundSelected")
    })
    sectionButtonText.forEach(button =>{
        button.classList.remove("textSelected")
    })
    document.getElementById(section).classList.add("envelopesSelected")
    document.querySelector(`.${background}`).classList.add("backgroundSelected")
    document.querySelector(`.${text}`).classList.add("textSelected")
}


//LIGHTBOX
let srcList = []
let numberImg = 0;
// Abre el lightbox
const modelLightBox = () =>{
    document.getElementById("modalLightBox").style.display = "block";
    document.body.style.overflowY = "hidden";

    document.getElementById("imageToShow").innerHTML = `<img src='${srcList[numberImg]}'>`
}
// Cierra el lightbox
const closeLightBox = (e) => {
    const modal = document.getElementById("modalLightBox");
    if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflowY = "auto";
    }
};
// Escucha de eventos
window.addEventListener("click", closeLightBox);
window.addEventListener("touchstart", closeLightBox);

const readyLightBox = () =>{
    let listImg = document.querySelectorAll(".contentPicture");

    listImg.forEach(img => {
        srcList.push(img.src)
    });

    const openLigthBox = (e) =>{
        let rutaImg = e.currentTarget.src
        numberImg = srcList.indexOf(rutaImg)
        modelLightBox()
    }

    listImg.forEach(img =>{
        img.addEventListener('click', openLigthBox)
    })
}

const nextImg = () =>{
    numberImg++;
    if(numberImg > srcList.length - 1){
        numberImg = 0;
    }
    document.getElementById("imageToShow").innerHTML = `<img class='menu_img' src='${srcList[numberImg]}'>`;
}

const prevImg = () =>{
    numberImg--;
    if(numberImg < 0){
        numberImg = srcList.length - 1;
    }
    document.getElementById("imageToShow").innerHTML = `<img class='menu_img' src='${srcList[numberImg]}'>`;
}

readyLightBox()
