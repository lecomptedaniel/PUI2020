//
productArr = []

class Product {
    constructor(name, size, color) {
        this.name = name
        this.size = size
        this.color = color
    }
}


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

//Class to show what is on the Product Display page, update elements from here, update these parts when buttons are pressed
class ShownProduct {
    constructor(name, size, color) {
        this.name = name
        this.size = size
        this.color = color
    }
}

var name = document.getElementById('ProductTitle');
var size = '';
var color = '';
var CurrentProduct = new ShownProduct(name, size, color);
console.log(CurrentProduct.name);



document.getElementById('Tiny').onclick = function() {
    var radio = document.querySelector('input[name=size]:checked');
    radio.checked = false;
}



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


function setColor(ImagePath, name, color) {
    CurrentProduct.color = color
    var CurrentImage = document.getElementById('CurrentImage');
    //Change picture here:
    CurrentImage.src = ImagePath;
    CurrentImage.alt = name + " - " + CurrentProduct.color + " - " + CurrentProduct.size;
    CurrentImage.title = name + " - " + CurrentProduct.color + " - " + CurrentProduct.size;
    
    //Change Description based on new Title / Color
    document.getElementById("ProductTitle").innerHTML = CurrentImage.title;
}

function setSize(name, ColorText, size) {
    CurrentProduct.size = size;
    var CurrentImage = document.getElementById('CurrentImage');
    //Set inner html to title, and change picture here
    CurrentImage.alt = name + " - " + CurrentProduct.color + " - " + CurrentProduct.size;
    CurrentImage.title = name + " - " + CurrentProduct.color + " - " + CurrentProduct.size;

    //Change Description based on new Title / Size
    document.getElementById("ProductTitle").innerHTML = CurrentImage.title;
}


function addToCart() {
    // var size = document.getElementById('Size').value
    

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
    //If no selected size, please pick one!
    if (colors == 'blank') {
        alert('Please pick a color!');
    }




    var product = new Product(name, size, color)

    //Quantity addition! (maybe check if number is >1, then go here? Else go through above?)
    var quant = document.getElementById('quant').value;
    console.log(quant);
    var quantCount = parseInt(quant);
    for(var i = 0; i < quantCount; i++){
        var product = new Product(name, size, color)
        productArr.push(product)
    }

    //Alert (or other JS) to show what was selected. Maybe turn this into a little pop up?
    alert('Selected product size & color: ' + product.size + ' & ' + product.color)


    console.log('Here"s the productArr');
    console.log(productArr);

    //Update cart number display (on Cart Button) to number of items in cart (which is productArr Array)
    updateCartNumber(productArr.length);
}

function updateCartNumber(num) {
    var cartCount = document.getElementById('cartCount');
    cartCount.innerHTML = num;

}


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