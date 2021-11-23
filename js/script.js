/**
 * @description main file
 * @version 1.0
 * @author Albert Casany, Roger Puga
 */


var shopping_cart = [];


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
            let title = document.getElementsByClassName("shop-item-title")[i].innerText;
            let author = document.getElementsByClassName("shop-autor")[i].innerText;
            let price = document.getElementsByClassName("shop-item-price-content")[i].innerText;
            let quantity = 1;
            let element = {
                title: title,
                author: author,
                price: price,
                quantity: quantity
            }
            let alreadyExists = false;
            for (let i = 0; i < shopping_cart.length; i++) {

                if (element.title == shopping_cart[i].title) {
                    shopping_cart[i].quantity += 1;
                    alreadyExists = true;
                }
            }
            if (!alreadyExists) {
                shopping_cart.push(element);
            }

            createCart();
            clearCart(element);
            console.log(shopping_cart);
        });
    }


});

/**
 * @description Event delete item in shopping list
 * @version 1.0
 * @author Roger Puga
 */

function deleteItem() {

    let buttons = document.getElementsByClassName("btn-delete-element");
    let new_shopping_cart = [];
    for (let index = 0; index < buttons.length; index++) {
        const button = buttons[index];
        button.addEventListener("click", function() {
            button.parentNode.remove();
            let list = document.getElementsByClassName("shopping-cart-element");
            for (let i = 0; i < shopping_cart.length; i++) {
                for (let j = 0; j < list.length; j++) {
                    let title = list[j].querySelectorAll(".shopping-cart-element-title")[0].innerHTML;
                    if (shopping_cart[i].title == title) {
                        new_shopping_cart.push(shopping_cart[i]);
                    }
                }
            }
            shopping_cart = new_shopping_cart;
            createCart();
        });
    }

}



/**
 * @description Event show shopping list
 * @version 1.0
 * @author Roger Puga
 */
document.getElementsByClassName("shopping-cart")[0].addEventListener("mouseover", function(e) {
    let list = document.querySelectorAll(".shopping-cart-list")[0];
    list.classList.remove("display-none"); // show shopping cart
    document.getElementsByClassName("smoke-screen")[0].classList.remove("display-none");
    deleteItem();
}, false);
document.getElementsByClassName("shopping-cart")[0].addEventListener("mouseleave", function(e) {
    console.log("leave");
    setTimeout(function() {
        let list = document.querySelectorAll(".shopping-cart-list")[0];
        list.classList.add("display-none"); // close shopping cart
        document.getElementsByClassName("smoke-screen")[0].classList.add("display-none");
    }, 500);


}, false);



function createCart() {
    let list_elements = document.getElementsByClassName("shopping-cart-list-elements")[0];
    list_elements.innerHTML = "";
    let total = 0;
    for (let index = 0; index < shopping_cart.length; index++) {
        const element = shopping_cart[index];
        let container = document.createElement("div");
        container.classList.add("shopping-cart-element");

        let title = document.createElement("h3");
        title.innerHTML = element["title"];
        title.classList.add("shopping-cart-element-title");

        let author = document.createElement("p");
        author.classList.add("shopping-cart-element-autor");
        author.innerHTML = element["author"];

        let price = document.createElement("p");
        price.classList.add("shopping-cart-element-price");
        price.innerHTML = "$" + element["price"];

        let quantity = document.createElement("p");
        quantity.classList.add("shopping-cart-element-quantity");
        quantity.innerHTML = element["quantity"];

        let button = document.createElement("div");
        button.innerHTML = ""
        button.classList.add("btn-delete-element")
        button.innerHTML = "\&#10006;";

        container.append(title);
        container.append(author);
        container.append(price);
        container.append(quantity);
        container.append(button);
        list_elements.append(container);

        total += parseInt(element["quantity"]) * parseFloat(element["price"]);
    }
    document.getElementsByClassName("counter-shopping-cart")[0].innerHTML = "$" + total;
    document.getElementsByClassName("shopping-cart-total-value")[0].innerHTML = "$" + total;
}

/**
 * @description Event remove all list
 * @version 1.0
 * @author Albert Casany
 */
function clearCart(list_elements){
    //document.getElementsByClassName("shopping-cart-reset");
    //console.log("Hola yo",list_elements);
    list_elements.remove()
    
}


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