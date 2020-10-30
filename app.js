// Movimentação

const card = document.querySelector('.card');
const container = document.querySelector('.container');

// Itens

const title = document.querySelector('.title');
const description = document.querySelector('.description');
const sizes = document.querySelector('.sizes');
const sneaker = document.querySelector('.sneaker');
const purchase = document.querySelector('.purchase');
const imgDoc = document.querySelector('.circle img');

// Animação

container.addEventListener('mousemove', e => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    // console.log(xAxis);

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});

//Animação de entrada
container.addEventListener("mouseenter", e => {
    card.style.transition = 'none';

    //Saltar na tela
    imgDoc.style.transform = "translateZ(100px) rotateZ(-45deg)";
    title.style.transform = "translateZ(150px)";
    description.style.transform = "translateZ(130px)";
    sizes.style.transform = "translateZ(70px)";
    purchase.style.transform = "translateZ(50px)";


});


//Animação de saída
container.addEventListener("mouseleave", e => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    //Voltando na tela
    imgDoc.style.transform = "translateZ(0px)";
    title.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
});
