/* Add your JavaScript to this file */

"use strict"

document.addEventListener('DOMContentLoaded', function(){

    var button = document.querySelector("button.btn");
    var message = document.querySelector("div.message");
    
    button.addEventListener("click", function(e){
        e.preventDefault();
        getName();
    })

    function getName(){
        var textfield = document.querySelector("#email").value;
        if (textfield === ""){
            message.innerHTML = "Please enter a valid email address.";
        }
        else{
            message.innerHTML = "Thank You! Your email address " + textfield + " has been added to our mailing list!";
        }
        console.log(textfield);

    }    
});