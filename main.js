import './style.css'

console.log("berhasil connected...")
const textareaEl = document.getElementById("textarea");
const totalEl = document.getElementById("total-counter");
const remainingEL = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup", ()=>{
  updateCounter()
})
updateCounter();
function updateCounter (){
  totalEl.innerText= textareaEl.value.length;
  remainingEL.innerText =
  textareaEl.getAttribute("maxLength")-textareaEl.value.length
}

/**
 * const textareaEl = document.getELemntId("textarea");
 * const totalEl = document.getELemntId("total-counter");
 * const remainingEl = document.getELemntId("remaining-counter");
 * 
 * 
 * textareaEl.addEvenlistener("keyup", ()=>{
 *    updateCounter()
 * })
 * 
 * updateCounter();
 * function updateCounter(){
 *    totalEl.innerText = textareaEl.value.length;
 *    remainingEl.innerText = 
 *      textarea.getAttribute(maxLength) - textareaEl.value.length
 *    
 * }
 */