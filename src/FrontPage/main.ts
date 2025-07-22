// Global Button Vars 

const radios = Array.from(document.querySelectorAll('#RadioButtons input[type="radio"]'));
const RADIOCOUNT = radios.length; // number of buttons 
var currentRadioIndex = 0;

function HandleEnter(){
  const selected = document.querySelector('#RadioButtons input[type="radio"]:checked');
    if (selected && selected.checkVisibility()) {
      // move along to other things TODO
      // handle when user presse enter (i.e. link to other tabs)
      console.log(selected.id);
    }
}

function wrapIndex(index: number, length: number) {
  return (index + length) % length; // keeps index from 0 - length 
}

// assigning action to each button
radios.forEach((radio) => {
  radio.addEventListener("click", () => {
    console.log("Clicked radio:", radio.id);
      // You can run any function here, like starting a game or showing a new screen
  });
})

window.addEventListener("keydown", (e) => {
  // console.log(radios[currentIndex].checked); // even though it doesnt it acutally does 
  switch (e.key) {
    case "ArrowUp":
    case "w":
    case "W":
      currentRadioIndex = wrapIndex(currentRadioIndex - 1, RADIOCOUNT); // wrap from 0-3
      break;
    case "ArrowDown":
    case "s":
    case "S":
      currentRadioIndex = wrapIndex(currentRadioIndex + 1, RADIOCOUNT); 
      break;

    case "Enter":
      HandleEnter();
      break;
    default:
      break;
  }
  radios[currentRadioIndex].checked = true;
});


window.addEventListener("DOMContentLoaded", () => {
  const bar = document.getElementById("progressBar") as HTMLProgressElement;
  const wrapper = document.getElementById("loadingBar")!;
  const loadTextspan = document.getElementById("loadText");


  let progress = 100; // change later on 
  let dotCount = 1;
  const interval = setInterval(() => {
    progress += 1;
    bar.value = progress;
    
    if (loadTextspan && progress % 10 == 0){
      dotCount = (dotCount % 3) + 1;
      const newText = "Loading" + ".".repeat(dotCount);

      loadTextspan.textContent = newText;
    }

    if (progress >= bar.max) {
      clearInterval(interval);
      wrapper.style.opacity = "0";
      wrapper.style.transition = "opacity 0.5s ease";
      setTimeout(() => {
        wrapper.style.display = "none";
      }, 500);

      
      // allow button to be visislbe 
      setTimeout(() => {
        const content = document.getElementById("mainContent");
        if (content) {content.style.display = "block";}
      }, 300);

    }
  }, 30);

});

window.addEventListener("mousemove", (e) =>{ // listen to mouse move 

 const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
  // gets the next closes element next to mouse 

  if (hoveredElement) { // we found an element
    const label = hoveredElement.closest("#RadioButtons label"); // confirm that it is a label 
    if (label) {
      const radio = label.querySelector("input[type='radio']"); // do stuff 
      radio.checked = true;
    }
  }

});


