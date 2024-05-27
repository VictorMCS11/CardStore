const envelopes = {
    "pokemon": [
        {
            id: 0,
            name: "Truco o trato",
            price: 6.10,
            urlImg: "./assets/img/pokemon_evelope1.png"
        },
        {
            id: 1,
            name: "Pokemon Go",
            price: 3.50,
            urlImg: "./assets/img/pokemon_evelope2.png"
        },
        {
            id: 2,
            name: "Fuerzas temporales (pack especial)",
            price: 15.70,
            urlImg: "./assets/img/pokemon_evelope3.png"
        },
        {
            id: 3,
            name: "Corona zenith",
            price: 2.00,
            urlImg: "./assets/img/pokemon_evelope4.png"
        },
        {
            id: 4,
            name: "Destinos paldeanos",
            price: 3.50,
            urlImg: "./assets/img/pokemon_evelope5.png"
        },
        {
            id: 5,
            name: "Astros brillantes",
            price: 5.10,
            urlImg: "./assets/img/pokemon_evelope6.png"
        }
    ],

    "yugioh": [
        {
            id: 6,
            name: "Pesadilla fantasma",
            price: 1.20,
            urlImg: "./assets/img/yugioh_evelope1.png"
        },
        {
            id: 7,
            name: "Laberinto del milenio",
            price: 1.50,
            urlImg: "./assets/img/yugioh_evelope2.png"
        },
        {
            id: 8,
            name: "¡Invasión del caos!",
            price: 1.70,
            urlImg: "./assets/img/yugioh_evelope2.png"
        },
        {
            id: 9,
            name: "Duelistas Legendarios: Volcán Quema-almas!",
            price: 1.50,
            urlImg: "./assets/img/yugioh_evelope3.png"
        },
        {
            id: 10,
            name: "La colección de rareza 25ºAniversario",
            price: 1.50,
            urlImg: "./assets/img/yugioh_evelope4.png"
        },
        {
            id: 11,
            name: "Era del Señor Supremo",
            price: 1.70,
            urlImg: "./assets/img/yugioh_evelope5.png"
        }
    ],
    "magic": [
        {
            id: 12,
            name: "La guerra de los hermanos",
            price: 2.20,
            urlImg: "./assets/img/magic_evelope1.png"
        },
        {
            id: 13,
            name: "Voto carmesí de Innistrad",
            price: 1.50,
            urlImg: "./assets/img/magic_evelope2.png"
        },
        {
            id: 14,
            name: "Dominaria unida",
            price: 4.00,
            urlImg: "./assets/img/magic_evelope3.png"
        },
        {
            id: 15,
            name: "Calles de Nueva Capenna",
            price: 3.50,
            urlImg: "./assets/img/magic_evelope4.png"
        },
        {
            id: 16,
            name: "Cacería de media noche",
            price: 3.99,
            urlImg: "./assets/img/magic_evelope5.png"
        },
        {
            id: 17,
            name: "MGT: Strixheaven: Academia de Magos",
            price: 2.80,
            urlImg: "./assets/img/magic_evelope6.png"
        }
    ],
}
// ENVELOPES CARDS ADD
const fragment = document.createDocumentFragment()
const templateCards = document.getElementById("template_cards");
const cards = document.querySelector(".envelopes_cards");

const sublistEnvelopes = document.querySelectorAll(".sublist_envelopes");
const evelopeButtons = document.querySelectorAll(".button_envelopes");

let envelopeSelected = "pokemon";

evelopeButtons.forEach(button =>{
    button.addEventListener('click', e =>{
        if(envelopeSelected === e.target.dataset.type){
            return
        }
        cards.textContent = ""
        envelopeSelected = e.target.dataset.type

        changeEnvelopes(envelopeSelected);
    })
})

sublistEnvelopes.forEach(button =>{
    button.addEventListener('click', e =>{
        if(envelopeSelected === e.target.dataset.type){
            return
        }
        cards.textContent = ""
        envelopeSelected = e.target.dataset.type

        changeEnvelopes(envelopeSelected);
    })
})

let addedProducts = [];

const changeEnvelopes = (envelopeSelected) =>{
    envelopes[envelopeSelected].forEach(envelope =>{
        let clone = templateCards.content.cloneNode(true)
        clone.querySelector(".card_img img").src = envelope.urlImg
        clone.querySelector("h4").textContent = envelope.name
        clone.querySelector("span").textContent = '$ ' + (envelope.price)
        clone.querySelector(".productButton").dataset.type = envelopeSelected
        clone.querySelector(".productButton").dataset.id = envelope.id
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)

    evelopeButtons.forEach(button =>{
        if(button.dataset.type === envelopeSelected){
            button.classList.remove("no-selected")
        }else{
            button.classList.add("no-selected")
        }
    })

    let productButtons = cards.querySelectorAll("button.productButton")

    productButtons.forEach(button =>{
        button.addEventListener('click', addProductToShoopingCart)
    })
}

const addProductToShoopingCart = (e) =>{
    let type = e.currentTarget.dataset.type
    let id = e.currentTarget.dataset.id
    let currentProduct = envelopes[type].find((item) => item.id == id)

    let indexCurrentProduct = addedProducts.findIndex((item) => item.id === currentProduct.id)

    if(indexCurrentProduct === -1){
        currentProduct.amount = 1
        addedProducts.push(currentProduct)
    }else{ 
        addedProducts[indexCurrentProduct].amount++ 
    } 

    printShoppingCart()
}

changeEnvelopes(envelopeSelected);

//ENVELOPES CARDS PRINT
const fragmentShoppingCart = document.createDocumentFragment();
const templateShoppingCart = document.getElementById("shoppingCartTemplate");
const shoppingCart = document.querySelector(".shoppingCart_container");

const printShoppingCart = () =>{
    shoppingCart.textContent = ""
    if(addedProducts.length === 0){
        shoppingCart.innerHTML = '<h3 class="no-products">No tienes productos en el carrito de compra 🛒🥲</h3>'
    } 
    let productsCount = 0
    let dolarsTotal = 0.00
    addedProducts.forEach(product =>{
        productsCount++
        (dolarsTotal += (product.price * product.amount));
        let clone = templateShoppingCart.content.cloneNode(true);
        clone.querySelector("img").src = product.urlImg;
        clone.querySelector("h5").textContent = product.name;
        clone.querySelector(".productAmount").textContent = product.amount;
        clone.querySelector(".productDolars").textContent = "$ " + (product.price * product.amount).toFixed(2);
        clone.querySelector(".productPlus").dataset.id = product.id
        clone.querySelector(".productLess").dataset.id = product.id
        if(productsCount === addedProducts.length){
            clone.querySelector(".totalAll").style.display = "flex"
            clone.querySelector(".textTotalValue").textContent = "$ " + dolarsTotal.toFixed(2)
        }
        fragmentShoppingCart.appendChild(clone);
    })
    shoppingCart.appendChild(fragmentShoppingCart)

    //Actualizar contador de productos totales
    let totalCountProducts = 0
    addedProducts.forEach(product =>{
        totalCountProducts = totalCountProducts + product.amount;
    })
    document.querySelector('.productsCount').textContent = totalCountProducts

    //Botones + y -
    let buttonPlus = shoppingCart.querySelectorAll(".productPlus")
    let buttonLess = shoppingCart.querySelectorAll(".productLess")

    buttonPlus.forEach(button =>{
        button.addEventListener('click', plusProduct)
    })
    buttonLess.forEach(button =>{
        button.addEventListener('click', lessProduct)
    })
}

const plusProduct = (e) =>{
    let id = e.target.dataset.id
    let indexProduct = addedProducts.findIndex(index => index.id == id)
    addedProducts[indexProduct].amount++
    printShoppingCart()
}

const lessProduct = (e) =>{
    let id = e.target.dataset.id
    let indexProduct = addedProducts.findIndex(index => index.id == id)

    if(addedProducts[indexProduct].amount > 1){
        addedProducts[indexProduct].amount--
    }else{
        addedProducts = addedProducts.filter(product => product.id != id)
    }
    printShoppingCart()
}

