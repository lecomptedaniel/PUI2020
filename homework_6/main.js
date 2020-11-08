//
var productArr = [];
//console.log(productArr);
var num = 0;
var Cart = [];

//Product to be thrown into the cart - only called when "AddtoCart" button is hit
class Product {
    constructor(name, size, color, quantity, image) {
        this.name = name
        this.size = size
        this.color = color
        this.quantity = quantity
        this.image = image
    }
}

//Class to show what is on the Product Display page, update elements from here, update these parts when buttons are pressed
class ShownProduct {
    constructor(name, size, color, quantity) {
        this.name = name
        this.size = size
        this.color = color
        this.quantity = quantity
    }
}

//Start the Shown product by grabbing elements (e.g., Title) or setting to blank
var name = 'Astro Pack';
var size = '';
var color = '';
var quantity = '';
var image = '';
var CurrentProduct = new ShownProduct(name, size, color, quantity);


function setColor(ImagePath, name, color) {
    //alert('Color button pressed: ' + color);


    //Update CurrentProduct class
    CurrentProduct.color = color;
    var CurrentImage = document.getElementById('CurrentImage');
    //Set inner html to title, and change picture here
    CurrentImage.src = ImagePath;
    image = ImagePath;
    CurrentImage.alt = name + " - " + CurrentProduct.color + " - " + CurrentProduct.size;
    CurrentImage.title = name + " - " + CurrentProduct.color + " - " + CurrentProduct.size;

    //Change Description based on new Title / Color
    document.getElementById("ProductTitle").innerHTML = CurrentImage.title;
}

function setSize(name, size) {
    CurrentProduct.size = size;
    
    
    //console.log(CurrentProduct);
    //console.log(CurrentProduct.size);
    
    
    var CurrentImage = document.getElementById('CurrentImage');
    //Set inner html to title, and change picture here
    CurrentImage.alt = name + " - " + CurrentProduct.color + " - " + CurrentProduct.size;
    CurrentImage.title = name + " - " + CurrentProduct.color + " - " + CurrentProduct.size;

    //Change Description based on new Title / Size
    document.getElementById("ProductTitle").innerHTML = CurrentImage.title;
}


function addToCart() {
    //Start with Size -- Start blank, add in yes/no from radio buttons, alert if none picked
    var sizes = 'blank';
    //Start with blank size
    var sizes = document.getElementsByName('size');
    //Pulls sizes into an array of the elements that have the productSize name
    //Array is really an object in this sense -- can call functions and attributes on it
    
    //Loop over array to see which element is checked
    //If true, set selectedSize to the Size
    for(var i = 0; i < sizes.length; i++) {
        if(sizes[i].checked){
            size = sizes[i].value;
        }
    }
    //If no selected size, please pick one!
    if (sizes == 'blank') {
        alert('Please pick a size!');
    }



    //Then to color -- Start blank, add in yes/no from radio buttons, alert if none picked
    var colors = 'blank';
    //console.log('color:' + color);
    //Start with blank size
    var colors = document.getElementsByName('color');
    //Pulls sizes into an array of the elements that have the productSize name
    //Array is really an object in this sense -- can call functions and attributes on it
    
    //Loop over array to see which element is checked
    //If true, set selectedSize to the Size
    for(var i = 0; i < colors.length; i++) {
        if(colors[i].checked){
            color = colors[i].value;
        }
    }
    //If no selected color, please pick one!
    if (colors == 'blank') {
        alert('Please pick a color!');
    }




    //Quantities -- check with current setting (should be blank)
    //console.log(quantity);

    //Pull value from input
    var quantities = document.getElementById('Quantity').value;

    //Set to integer
    quantity = parseInt(quantities);

    //Check if that worked
    //console.log('Actual quantity: ' + quantity);


    //If no selected size, please pick one!
    if (quantity == 'blank') {
        alert('Please pick a quantity!');
    }

    //console.log('Current cart: ' + productArr);
    var product = new Product(name, size, color, quantity, image);
    productArr.push(product);
    //console.log('Current cart: ' + productArr);

    //Alert (or other JS) to show what was selected. Maybe turn this into a little pop up?
    //alert('Selected product size & color: ' + product.size + ' & ' + product.color + ' & ' + product.quantity)


    //console.log(productArr);

    //Update cart number display (on Cart Button) to number of items in cart (which is productArr Array)
    updateCartNumber();
}

function updateCartNumber() {
    var cartCount = document.getElementById('cartCount');
    num = 0;
    for(var i = 0; i < productArr.length; i++) {
        num += productArr[i].quantity;
    }
    cartCount.innerHTML = num;
}

//On the Cart page, this cues on the body:
function checkoutPageLoad() {
    //alert('loaded checkoutPageLoad');
    //console.log('Cart Items:');
    //console.log(Cart);

    //Grab our element by Id here.
    var CartDiv = document.getElementById('ShoppingCart');
    //console.log(CartDiv);

    //Action here to clear the inner HTML
    CartDiv.innerHTML = '';

    //Then use the JS -> to display each item? Maybe with nodes parent/child?
    if (Cart.length == 0) {
        var CartDiv = document.getElementById('ShoppingCart');
        CartDiv.innerHTML = `<p class="MainFont EmptyCart Container">Your Cart is Currently Empty</p>`
    } else {
        for(var i = 0; i < Cart.length; i++) {
            //console.log('i: ' + i);
            //console.log(Cart[i]);
            var product = Cart[i];
            var productName = product.name;
            var productColor = product.color;
            var productSize = product.size;
            var productQuantity = product.quantity;
            var productImage = product.image;

            CartDiv.innerHTML += `
            <div class="CartItem">
            <div class="fill">
                <img src="` + productImage + `" alt="Special Bandana" width="200" height="200">
            </div>
                <div class="CartItemDescription">
                    <p class="MainHeaderFont">` + productName + `</p>
                    <div class="container CartItemVariables">
                        <p class="MainFont">` + productSize + `</p>
                        <p class="MainFont">` + productColor + `</p>
                        <input type="button" class="CardButton MainFont" value="Change">
                    </div>
                    <div class="container">
                        <p class="MainFont">Quantity:</p>
                        <p class="MainFont">` + productQuantity + `</p>                
                    </div>
                    
                    <p class="MainFont">$` + 29*productQuantity + `</p>
                    <div class="container CartItemChange">
                        <p class="MainFont" onclick="Delete(` + i + `);">Delete</p>
                        <p class="MainFont">Save for later</p>
                    </div>
                </div>
            </div>`
        }
    }
}


function Delete(i) {
    // console.log('i: ' + i);
    
    //Before we delete:
    // console.log('before we delete:');
    // console.log(Cart);
    // console.log(Cart.length);

    Cart.splice(i, 1);

    //After we delete
    // console.log('after we delete:');
    // console.log(Cart);
    // console.log(Cart.length);

    if (Cart.length == 0) {
        var CartDiv = document.getElementById('ShoppingCart');
        CartDiv.innerHTML = `<p class="MainFont EmptyCart Container">Your Cart is Currently Empty</p>`
    } else {
        checkoutPageLoad();
    }
    updateCartNumber();
}

function SaveCart() {
    //On page unload, send cart to local storage
    localStorage.setItem('Cart', JSON.stringify(productArr));
    //console.log(productArr);
}


function PageLoad() {
    //On page load, bring Cart in from local storage, update cart quantity
    Cart = JSON.parse(localStorage.getItem('Cart'));
    //console.log(Cart);
    productArr = Cart;
    updateCartNumber();
}

/* <label for="quantity" class="MainFont">Quantity</label>
                    <select class="quant">
                        <option value = "1">1</option>
                        <option value = "2">2</option>
                        <option value = "3">3</option>
                        <option value = "4">4</option>
                        <option value = "5">5</option>
                        <option value = "6">6</option>
                        <option value = "7">7</option>
                        <option value = "8">8</option>
                        <option value = "9">9</option>
                        <option value = "10">10</option>
                    </select> */




//function setSize() {
    //let oldSize = 



    ///console.log('set size worked');
    //let radio = document.getElementById('Tiny');
    //radio.checked = 'true';
    //let label = document.getElementById('TinyLabel');
    //label.style.boxShadow = '0 8px 16px rgba(0,0,0,0.6)';
    //label.style.color = 'white';
    //label.style.backgroundColor = '#3E85A3';
    //console.log(radio.value)}




/*function setSize() {
    var sizes = 'blank';
    //Start with blank size
    var sizes = document.getElementsByName('size');
    let sizeslabel = document.getElementById('TinyLabel');
    console.log(sizes);
    console.log(sizeslabel);
    //Pulls sizes into an array of the elements that have the productSize name
    //Array is really an object in this sense -- can call functions and attributes on it
    
    //Loop over array to see which element is checked
    //If true, change styling of the label
    for(var i = 0; i < sizes.length; i++) {
        console.log(sizes[i]);
        if(sizes[i].checked){
            sizeslabel[i].style.boxShadow = '0 8px 16px rgba(0,0,0,0.6)';
            sizeslabel[i].style.color = 'white';
            sizeslabel[i].style.backgroundColor = '#3E85A3';
        } 
    }
}*/


/*document.getElementById('Tiny').onclick = function() {
    var radio = document.querySelector('input[name=size]:checked');
    radio.checked = false;
}*/



/*var radios = document.getElementsByName('size');
console.log(radios);
for(i=0; i<radios.length; i++ ) {
    console.log(radios[i]);
    radios[i].onclick = function() {
        if(radios[i].checked == true) {
            this.checked = false;
        }
    }
}*/




/*document.getElementById('Tiny').addEventListener('click', CheckChecked(document.getElementById('Tiny')));
console.log(CheckedItem);


function CheckChecked() {
    if(CheckedItem.checked == true){
        CheckedItem.checked = false;
    }
}*/
