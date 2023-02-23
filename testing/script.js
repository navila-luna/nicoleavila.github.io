// Creates a new hydra-synth instance
var hydra = new Hydra({
    canvas: document.getElementById("myCanvas"), 
    detectAudio: false, 
    enableStreamCapture: false, 
})
gradient(4,0.1,2).invert().luma().modulatePixelate(noise(25,0.5),100).invert()
.layer(osc(4,0.1,2).luma().mask(shape(2,0.5).scrollY(-0.25))).out(o0)

const element = document.getElementById("myBtn");
element.addEventListener("click", myFunction);
element.addEventListener("click", function() {
    console.log("clicked");
  });