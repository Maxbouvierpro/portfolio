  // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
  // Assurez-vous d'avoir GSAP et ScrollTrigger chargés
gsap.registerPlugin(ScrollTrigger);

// Sélectionner tous les éléments avec la classe .bloc-benefice
const blocsBenefice = document.querySelectorAll('.bloc-benefice');
const blocsH2 = document.querySelectorAll('h2:not(.no-anim)');
const blocsButtons = document.querySelectorAll(':not(.no-anim).button-container');
const blocsSurtitre = document.querySelectorAll('.surtitre');
const blocsFrames = document.querySelectorAll('.frame');
const blocBeneficeRow = document.querySelectorAll('.bloc-benefice-row');
const blocContainerRow = document.querySelectorAll('.container-animation-copywriting .text-parcours-client p')
const blocSteps = document.querySelectorAll('.steps .block.content')
const blocRealisations = document.querySelectorAll('.realisation')


const animEntrance = (blocAnim) => {
  blocAnim.forEach((bloc, index) => {
    gsap.from(bloc, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      delay: index * 0.2, // Décalage pour créer un effet de stagger progressif
      scrollTrigger: {
        trigger: bloc,          // Déclencheur individuel pour chaque bloc
        start: "top 80%",       // L'animation commence quand le bloc est à 80% dans le viewport
        toggleActions: "play none none none",
      }
    });
  });
}

animEntrance(blocsBenefice)
animEntrance(blocsH2)
animEntrance(blocsButtons)
animEntrance(blocsSurtitre)
animEntrance(blocsFrames)
animEntrance(blocBeneficeRow)
animEntrance(blocContainerRow)
animEntrance(blocSteps)
animEntrance(blocRealisations)

gsap.from("header", {
  y: -20,
  opacity: 0,
  duration: 0.6,
  ease: "power2.out",
  delay:  0.2, // Décalage pour créer un effet de stagger progressif

});

gsap.from(".hero-banner", {
  y: 20,
  opacity: 0,
  duration: 0.6,
  ease: "power2.out",
  delay:  0.2, // Décalage pour créer un effet de stagger progressif

});


let acc = document.getElementsByClassName("accordion");
let accwrapp = document.getElementsByClassName("accordion-wrapper");

const addActive = (elements) => {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function () {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
};

addActive(acc);
addActive(accwrapp)

});