let containerEl = document.querySelector(".container");  //fetch
window.addEventListener("mousemove", function (event){      //Runs the callback every time the mouse moves anywhere in the window.
    containerEl.innerHTML = `<div class="mouse-event">${event.clientX}<h4>Mouse X Prosition(px)</h4></div><div class="mouse-event">${event.clientY}<h4>Mouse Y Prosition(px)</h4></div>`;
});
//event.X and event.Y gives position wrto x and y coordinate.
//we put the whole value as string inside containerEL.
