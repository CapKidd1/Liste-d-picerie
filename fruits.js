gsap.registerPlugin(ScrollTrigger);

const fruit = gsap
  .timeline({
    repeat: -1,
    yoyo: true,
    repeatDelay: 0.5,
    ease: "sin"
  })
  .to(".pomme", { duration: 0.25, scale: 1.2 })
  .to(".pizza", { duration: 0.25, scale: 1.2 })
  .to(".chou", { duration: 0.25, scale: 1.2 })
  .to(".fraise", { duration: 0.25, scale: 1.2 })
  .to(".burger", { duration: 0.25, scale: 1.2 })
  .to(".melon", { duration: 0.25, scale: 1.2 })
  .to(".poulet", { duration: 0.25, scale: 1.2 })
  .to(".raisin", { duration: 0.25, scale: 1.2 })
  .to(".pommeVert", { duration: 0.25, scale: 1.2 });

//color change
gsap.to(".panier", {
  scrollTrigger: {
    scrub: true,
    trigger: ".panier",
    markers: false,
    start: "20% 80%",
    end: "center 20%"
  },
  backgroundColor: "#fdf1ec"
});

//deplacement crayon axe X
gsap.to(".crayon", {
  scrollTrigger: {
    scrub: true,
    trigger: ".crayon",
    markers: false,
    start: "center 60%",
    end: "center 20%"
  },
  x: "100%"
});

//deplacement crayon axe Y et rotation
gsap.to(".crayon", {
  scrollTrigger: {
    scrub: true,
    trigger: ".champ",
    markers: true,
    start: "90% center",
    end: "95% center"
  },
  y: "20px"
});

class PanierMagasin {
  constructor(){
    this.panier = 0;
    this.ajoutPanier = document.querySelector('.commande')
  }
  
  mettreAJourPanier(){
  this.ajoutPanier.value = this.panier;
  }
}

const btn = document.querySelector('.bouton');
btn.addEventListener('click', ()=>{

})
