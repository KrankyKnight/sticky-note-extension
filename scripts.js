
/* |+| Create Sticky Note Generating Button */

//create a new html element button in the existing body
//set variable to body element
const body = document.querySelector('body'); 
//set variable to new button element
const button = document.createElement('button'); 
//append button element to body
body.appendChild(button);
 //assign button an ID of stickyNoteButton
button.setAttribute('id', 'stickyNoteButton');
// button.setAttribute('type', 'button');
button.innerText = 'Create Sticky Note';
//create listener function for the creation of sticky notes
button.addEventListener('click', function () {
    const sticky = document.createElement('div');
    body.appendChild(sticky);
    sticky.setAttribute('class', 'stickyNote');
})
    

/* |+| Create Draggable Functinality */
//Adapted from: https://www.w3schools.com/howto/howto_js_draggable.asp
//May 17th 2023

button.addEventListener('click', function () {
    //invoke function on any element with class sticky note
    const el = document.querySelector('.stickyNote');
    moveSticky(el)

    //create function move sticky passing with a single param
    function moveSticky(el) {
        //create four position variables set to 0
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        //set param onmousedown equal to function dragMouseDown
        el.onmousedown = clickFunction; 
        
        //declare function dargMouseDown with one parameter
        function clickFunction(e) {
            console.log('triggered');
            //set parameter to itself if defined or to Window.event
            e = e || window.event;
            //prevent event from ending without stop command with preventDefault
            e.preventDefault();
            //log coordinates for event start to second two pos variables
            pos3 = e.clientX;
            pos4 = e.clientY
            //onmouseup start ending function
            document.onmouseup = released;
            //onmousemove start drag function
            document.onmousemove = dragging;
        }

        //declare element drag function with one param
        function dragging(e) {
            //set parameter to itself if defined or to Window.event
            e = e || window.event
            //prevent event from ending without stop command with preventDefault
            e.preventDefault();
            //set first two pos variables to the change in mouse location
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            //reset second two variables to the new mouse location
            pos3 = e.clientX;
            pos4 = e.clientY;
            //move element equal to change in first two variables
            el.style.top = (el.offsetTop - pos2) + "px";
            el.style.left = (el.offsetLeft - pos1) + "px";
        }

        //declare ending function
        function released() {
            //set onmouseup to null
            document.onmouseup = null;
            //set onmousemove to null
            document.onmousemove = null;
        }
    }
});