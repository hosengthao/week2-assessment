//this function checks to see if the email has a '@' character
function myEmail(){
    let personEmail = document.getElementById("email").value;
    let charSymbol = false;

    for (i = 0; i < personEmail.length; i++) {
        let emailChar = personEmail[i];
        if (emailChar == "@") {
            charSymbol = true
        }
    }
    console.log(personEmail);
    console.log(charSymbol);

    if (charSymbol == true) {
        alert("Your Email has been added to our list")
    } else {
        alert("Invalid Email Address")
    };
}

//this function will slide toggle the contact us info
$(document).ready(function(){
    $("#contactUs").click(function(){
        $("#slide").slideToggle("slow");
    });
})

//this function is used to call the functions to show the cards. this function will pull the JSON data
function myDisplay() {
    var ourRequest1 = new XMLHttpRequest();
    ourRequest1.open('GET', 'http://3.21.225.172:8080/api/realestate/all')
    ourRequest1.onload = function () {
        const ourData1 = JSON.parse(ourRequest1.responseText);
        renderHTML5(ourData1);
    };
    ourRequest1.send();
}

//this will make the cards and display them onto the page on load
function renderHTML5(data) {
    var ii = 0;
    let url = "http://3.21.225.172:8080/api/"
    $("#listingsHome").html("")
    for (let i = 0; i < data.length; i++) {
        let housePrice = data[i].price;
        var card =
            '<div class="col-md-4 text-center" id="card1" style=""><div class="card backgroundWhite" style="width:300px">'
            + '<img class="card-img-top" src="http://3.21.225.172:8080/api/' + data[i].imageurl + '" style="width:100%">'
            + '<div class="card-body">'
            + '<h5 class="darkgray"> ' + data[i].street + ", " + data[i].city + ", " + data[i].state + " " + data[i].zip + '</h5>'
            + '<p><b>$' + housePrice.toLocaleString() + "</b></p><p class='darkgray'><b>Listing Agent: </b>" + data[i].listing + " " + data[i].phone + "</p>"
            + '<a href="homes.html?' + i + '" class="btn btn-primary" >See Listing</a></div></div></div>';
        if (ii < 6) {
        //this will only display 6 images on the screen when the page loads
            $("#listingsHome").append(card);
            ii++;
        }
console.log(card);
    }
}

//this will load myList on page load.
window.onload = myDisplay;

//this function will load when the search button is pressed. it loads the JSON data first
function mySearch() {
    var ourRequest1 = new XMLHttpRequest();
    ourRequest1.open('GET', 'http://3.21.225.172:8080/api/realestate/all')
    ourRequest1.onload = function () {
        const ourData1 = JSON.parse(ourRequest1.responseText);
        renderHTML6(ourData1);
    };
    ourRequest1.send();
}

//this function will build all of the cards and then only display them if they match the search query
function renderHTML6(data) {
    const minCount = parseInt(document.getElementById("min").value);//puts the input to integer
    const maxCount = parseInt(document.getElementById("max").value);
    let url = "http://3.21.225.172:8080/api/"
    //check if max is less than min value
    if (maxCount < minCount) {
        alert("your min price is larger than your max price");
    };
    //check if there is no max value then set max to 30mil otherwise set to the max value
    if (isNaN(maxCount)) {
        var maxUnlimited = 30000000;
    } else {
        var maxUnlimited = maxCount;
    };
    //check if there is no min value then set to 0, otherwise set to min input value
    if (isNaN(minCount)) {
        var minUnlimited = 0;
    } else {
        var minUnlimited = minCount;
    };

    $("#listingsHome").html("")
    for (let i = 0; i < data.length; i++) {
        //create all 50 cards
        let housePrice = data[i].price;
        var card =
            '<div class="col-md-4 text-center" id="card1" style=""><div class="card" style="width:300px">'
            + '<img class="card-img-top" src="http://3.21.225.172:8080/api/' + data[i].imageurl + '" style="width:100%">'
            + '<div class="card-body">'
            + '<h5 class="darkgray"> ' + data[i].street + ", " + data[i].city + ", " + data[i].state + " " + data[i].zip + '</h5>'
            + '<p><b>$' + housePrice.toLocaleString() + "</b></p><p class='darkgray'><b>Listing Agent: </b>" + data[i].listing + " " + data[i].phone + "</p>"
            + '<a href="homes.html?' + i + '" class="btn btn-primary" >See Listing</a></div></div></div>';
        if ( data[i].price >= minUnlimited && data[i].price <= maxUnlimited) {
            //only appends the cards that match the if statement
            $("#listingsHome").append(card);
        }



        console.log(card);
    }
}








