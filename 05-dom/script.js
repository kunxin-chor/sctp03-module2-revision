// three main skills
// 1. get element by class name, id, tag name
// 2. add event listener (know about the possible events: https://www.khanacademy.org/computing/computer-programming/html-css-js/html-js-dom-events/a/dom-event-types)
// 3. modify the element
//   - change innerHTML
//   - modify the CSS

// return an array (i.e a list) of all element with class sweet
let sweetStuff = document.querySelectorAll(".sweet");
let area1 = document.querySelector("#area1");
let firstDiv = document.querySelector("div");

let btn = document.querySelector("#cancel");
btn.addEventListener("click", function(){
    for (let s of sweetStuff) {
        s.innerHTML = s.innerHTML + " (cancelled)";
    }
});


