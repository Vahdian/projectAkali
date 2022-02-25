import { clickSound } from "../media/sounds.js"
import { wiper } from "../utilities/wiper.js"

function myButton(){
const mybutton = document.querySelector(".anyButton")
mybutton.addEventListener("click", ()=>clickedButton())
}

function clickedButton(){
    clickSound()
    wiper()
}

export {myButton}