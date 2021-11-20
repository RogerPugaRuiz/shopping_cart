/**
 * @description main file
 * @version 1.0
 * @author Albert Casany, Roger Puga
 */


var shopping_list = [];


/**
 * @description Event put new item in shopping list
 * @version 1.0
 * @author Albert Casany
 */
document.addEventListener('DOMContentLoaded', function() {
    // array of buttons
    let buttons = document.querySelectorAll(".btn");

    for (let i = 0; i < buttons.length; i++) {
        // on click buttons
        buttons[i].addEventListener("click", function() {
            // add new item
            console.log("add new item in shopping list");
        });
    }
});

/**
 * @description Event delete item in shopping list
 * @version 1.0
 * @author Roger Puga
 */


/**
 * @description Event show shopping list
 * @version 1.0
 * @author Roger Puga
 */
document.getElementsByClassName("shopping-cart")[0].addEventListener("mouseover", function(e) {
    console.log("enter");
    let list = document.querySelectorAll(".shopping-cart-list")[0];
    list.classList.remove("display-none");

}, false);
document.getElementsByClassName("shopping-cart")[0].addEventListener("mouseleave", function(e) {
    console.log("leave");
    setTimeout(function() {
        let list = document.querySelectorAll(".shopping-cart-list")[0];
        list.classList.add("display-none");
    }, 1000);

}, false);






/**
 * @description Function manage shopping list in cookie
 * @version 1.0
 * @author Albert Casany
 */

/**
 * @description Function to accept shopping list
 * @version 1.0
 * @author Roger Puga
 */