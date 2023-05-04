/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
// to calcluate stating time for checking performance
const startingTime = performance.now();

//nav bar const
const nvigationBar = document.getElementById('navbar__list');

//all section const
const allSections = document.querySelectorAll('section');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the dynamic navbar 
// arrowFunction
const buldNavbar = () => {   
    let navitems = '';
    allSections.forEach(section => {
        const idSection = section.id;
        const dataNavSection = section.dataset.nav;
        

        navitems = navitems + `<li><a class = "menu__link" href="#${idSection}">${dataNavSection}</a></li>`;
    })
    nvigationBar.innerHTML = navitems ; 


};
buldNavbar();


// Add class 'active' to section when near top of viewport
window.onscroll = () =>{
    document.querySelectorAll("section").forEach(function (active){
        if(active.getBoundingClientRect().top >= -400 && active.getBoundingClientRect().top <= 150 ){
            active.classList.add("your-active-class");
            //highlight the active section
            active.style.cssText = "background-color: #F34545;"
            
        
        }else{
            active.classList.remove("your-active-class");
            //remove the highlit from un active section.
            active.style.cssText = "linear-gradient(0deg, rgba(136,203,171,1) 0%, rgba(0,13,60,1) 100%);"
            
            
            
        }
    });
};



// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/
const endingTime = performance.now();
console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');

// Build menu 

// Scroll to section on link click

// Set sections as active


