/*
 RESOURCES:

Font Awesome for Icons:
https://fontawesome.com/icons

Tutorial:
https://www.youtube.com/watch?v=xV7S8BhIeBo&t=339s
@1:27:00
 */

const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls'); //current
const sectBtn = document.querySelectorAll('.control'); //actual button
const allSections = document.querySelector('.main-content');

//This was really tricky to figure out. Thank you StackOverflow and YT
//Essentially we are removing the active button from previously selected button
//Then adding the active button class name to the current clicked on button
function PageTransitions() {
    //Button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //sections active
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            //remove selected from the other buttons
            sectBtns.forEach((btn) => {
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}

PageTransitions();


