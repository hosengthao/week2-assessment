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

//this function will pull the JSON data abd call the myHome function
function myHouse() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://3.21.225.172:8080/api/realestate/all');
    ourRequest.send();
    ourRequest.onload = function () {
        const ourData = JSON.parse(ourRequest.responseText);
        myHome(ourData);
    };

}

//this function will load the data based on the number from the end of the URL following the '?'
function myHome(data){
    let theHouseNumber =  window.location.search //searches the URL
    let i = theHouseNumber.slice(1); //slices our the '?'
    let housePrice = data[i].price;
    let details = data[i].fname + " " + data[i].lname;
    let address = data[i].street + ", " + data[i].city + ", " + data[i].state + " " + data[i].zip ;
    let img = "<img style='max-width:100%; height:auto' src='http://3.21.225.172:8080/api/" + data[i].imageurl + "'></img>" ;
    let lister = data[i].listing + " " + data[i].phone;
    //the following appends to the html that is already loaded onto the page
    $("#htmlImg").html(img);
    $("#htmlTitle").append(housePrice.toLocaleString());
    $("#htmlDetails").append(details);
    $("#htmlLister").append(lister);
    $("#htmlAddress").append(address);
}

//loads the myHouse function on page load
window.onload = myHouse;