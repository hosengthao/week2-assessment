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

//this function will fade toggle the cards
$(document).ready(function(){
    $("#droplist").click(function(){
        $("#card1").fadeToggle("slow");
        $("#card2").fadeToggle("slow");
        $("#card3").fadeToggle("slow");
    });
});


//this function will slide toggle the contact us info
$(document).ready(function(){
    $("#contactUs").click(function(){
        $("#slide").slideToggle("slow");
    });
});

//this function is used to call all of the functions that will display images on page load. This includes the main feature house(renderHTML) which is the most expensive and is clickable.
//this function will also call on the other functions to display the images and links in the cards; 1(renderHTML2), 2(renderHTML3), 3(renderHTML4)
function myHouse() {
    let ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://localhost:8080/realestate/all')
    ourRequest.onload = function () {
        const ourData = JSON.parse(ourRequest.responseText);
        console.log(`ourData = ${ourData}`);
        console.log(`ourRequest = ${ourRequest}`);
        renderHTML(ourData);
        renderHTML2(ourData);
        renderHTML3(ourData);
        renderHTML4(ourData);
    };
    ourRequest.send();
}

//this is the function for the featured house. it will check for the most expensive house. I built the html, div, img, link, and paragraphs into the innerHTML
function renderHTML(data){
    let ourHome = "0";
    let number = "";
    let ourInfo = "";

    for (let i = 0; i < data.length; i++) {
        number = data[i].price;
        if (number >= ourHome) {
            //if current house price is greater than or equal to number stored in ourHome then it will set ourHome = number(current house price)
            //then it will also set the current house details into ourInfo
            ourHome = number;
            ourInfo = data[i];
            var ii = i;
        } else {
            ourHome = ourHome;
        }
        console.log(`ourInfo = ${ourInfo}`);
        console.log(`ourInfo.imageurl = ${ourInfo.imageurl}`);
        document.getElementById("featured2").innerHTML= '<a href=homes.html?' + ii + '><img  style="max-width:100%; height:auto" src="http://localhost:8080/' + ourInfo.imageurl + '"></a><br><h4 class=""><b>$' + ourHome.toLocaleString() + "</b></h4><p class='darkBlueText'>" + ourInfo.street + ", " + ourInfo.city + ", " + ourInfo.state + " " + ourInfo.zip + " </p><p class='darkBlueText'><b>Year built: </b>" + ourInfo.yrblt.slice(0,4) + " <b>Bathrooms: </b>" + ourInfo.baths + " <b>Bedrooms: </b>" + ourInfo.beds + "</p><p class='darkBlueText'<b> Contact the Listing Agent: </b>" + ourInfo.listing + " " + ourInfo.phone + "</p>";

    }
}

//this is the first card and house with the most sqft. again all of the html is built into the .innerHTML
function renderHTML2(data){
    var ourHome1 = "0";
    var number1 = "";
    var ourInfo1 = "";

    for (var i = 0; i < data.length; i++) {
        number1 = data[i].sqft;
        if (number1 >= ourHome1) {
            ourHome1 = number1;
            ourInfo1 = data[i];
            var ii = i;
        } else {
            ourHome1 = ourHome1;
        }
    var imghome1 = '<img class="card-img-top" src="http://localhost:8080/' + ourInfo1.imageurl + '" style="width:100%">';
    var home1txt = '<p class=""><b>' + ourHome1 + " square feet!</b></p><p class='darkgray'><b>Listing Agent: </b>" + ourInfo1.listing + " " + ourInfo1.phone + "</p>";

    console.log(ourInfo1.id);
    document.getElementById("imgHouse1").innerHTML= imghome1;
    document.getElementById("title1").innerHTML = '<h5 class="darkgray"> ' + ourInfo1.street + ", " + ourInfo1.city + ", " + ourInfo1.state + " " + ourInfo1.zip + '</h5>';
    document.getElementById("house1").innerHTML= home1txt;
    document.getElementById("button1").innerHTML= '<a href="homes.html?' + ii + '" class="btn btn-primary" >See Listing</a>';
    }
}

//this is the second card. house with the most beds
function renderHTML3(data){
    var ourHome2 = "0";
    var number2 = "";
    var ourInfo2 = "";

    for (var i = 0; i < data.length; i++) {
        number2 = data[i].beds;
        if (number2 >= ourHome2) {
            ourHome2 = number2;
            ourInfo2 = data[i];
            var ii = i;
        } else {
            ourHome2 = ourHome2;
        }
        var imghome2 = '<img class="card-img-top" src="http://localhost:8080/' + ourInfo2.imageurl + '" style="width:100%">';
        var home2txt = '<p class=""><b>' + ourHome2 + " bedrooms!</b></p><p class='darkgray'><b>Listing Agent: </b>" + ourInfo2.listing + " " + ourInfo2.phone + "</p>";

        document.getElementById("imgHouse2").innerHTML= imghome2;
        document.getElementById("title2").innerHTML = '<h5 class="darkgray"> ' + ourInfo2.street + ", " + ourInfo2.city + ", " + ourInfo2.state + " " + ourInfo2.zip + '</h5>';
        document.getElementById("house2").innerHTML= home2txt;
        document.getElementById("button2").innerHTML= '<a href="homes.html?' + ii + '" class="btn btn-primary" >See Listing</a>';
    }
}

//this is the third card. house with the most baths
function renderHTML4(data){
    var ourHome3 = "0";
    var number3 = "";
    var ourInfo3 = "";

    for (var i = 0; i < data.length; i++) {
        number3 = data[i].baths;
        if (number3 >= ourHome3) {
            ourHome3 = number3;
            ourInfo3 = data[i];
            var ii = i;
        } else {
            ourHome3 = ourHome3;
        }
        var imghome3 = '<img class="card-img-top" src="http://localhost:8080/' + ourInfo3.imageurl + '" style="width:100%">';
        var home3txt = '<p class=""><b>' + ourHome3 + " bathrooms!</b></p><p class='darkgray'><b>Listing Agent: </b>" + ourInfo3.listing + " " + ourInfo3.phone + "</p>";

        console.log(imghome3);
        document.getElementById("imgHouse3").innerHTML= imghome3;
        document.getElementById("title3").innerHTML = '<h5 class="darkgray"> ' + ourInfo3.street + ", " + ourInfo3.city + ", " + ourInfo3.state + " " + ourInfo3.zip + '</h5>';
        document.getElementById("house3").innerHTML= home3txt;
        document.getElementById("button3").innerHTML= '<a href="homes.html?' + ii + '" class="btn btn-primary" >See Listing</a>';
    }
}

//this will load myHouse function when the page loads
window.onload = myHouse;

//the next few functions are for the fading/transition images that will load when the document is ready(page load)
//this function starts off with first image
$(document).ready(function () {
    setImageOne();
});

//display image and then fade to second
function setImageOne() {
    $('#imageSwap').fadeIn(500).html('<img class="img-fluid" src="https://t3.ftcdn.net/jpg/02/96/92/12/360_F_296921238_Qt3eB6C1QtqvKNt8FTLwe4F5H4lZLqpb.jpg"/>').delay(2000).fadeOut(500, function () { setImageTwo(); });
}

//display second image and then fades back to image one
function setImageTwo() {
    $('#imageSwap').fadeIn(500).html('<img class="" src="https://archello.s3.eu-central-1.amazonaws.com/images/2020/02/13/Classic-House-Interior-Design-4.1581603609.7419.jpg" style="width:auto; height:360px"/>').delay(2000).fadeOut(500, function () { setImageOne(); });
}

