let allLi = document.querySelectorAll('li');

// allLi[0].addEventListener('click', function(){
//     allLi[0].style.background = 'pink'
// })

// allLi.forEach(li =>{
//     li.addEventListener('click', colorMe);
// })


// funkcija da samo jedan element bude izabran
// function colorMe(){
//     allLi.forEach(li => li.style.background = 'none')
//     this.style.background = "pink" 
// }

// sa ponovnim klikom da ukloni
// function colorMe(){
//     if(this.style.background === 'pink'){
//         this.style.background = 'none'
//     } else {
//         this.style.background = 'pink'
//     }
// }

// menjanje pozicija
let clicked = [];
let html = [];

allLi.forEach(li => {
    li.addEventListener('click', copyMe);
});

function copyMe(){
    clicked.push(this);
    html.push(this.innerHTML);

    if(clicked.length === 2){
        clicked[0].innerHTML = html[1];
        clicked[1].innerHTML = html[0];
        clicked = [];
        html = [];
    }
}