$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:7
        }
    }
})

var el = document.getElementsByClassName('botao-amazon1')[0];

el.addEventListener("click", function(){
    window.open("https://www.amazon.com.br/gp/bestsellers/books/?ie=UTF8&ref_=sv_b_2")
});

var el1 = document.getElementsByClassName('botao-amazon2')[0];

el1.addEventListener("click", function(){
    window.open("https://www.amazon.com.br/gp/most-wished-for/books/")
});

