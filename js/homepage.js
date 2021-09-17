
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

$(document).ready(function(){
    $("button").click(function(){
        $("#card1").fadeToggle("slow");
        $("#card2").fadeToggle("slow");
        $("#card3").fadeToggle("slow");
    });
});
$(document).ready(function(){
    $("#contactUs").click(function(){
        $("#slide").slideToggle("slow");
    });
});

function myHouse() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://3.21.225.172:8080/api/realestate/getByRowAmount?rows=12')
    ourRequest.onload = function () {
        const ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
        renderHTML2(ourData);
        renderHTML3(ourData);
        renderHTML4(ourData);
    };
    ourRequest.send();
}

function renderHTML(data){
    var ourHome = "0";
    var number = "";
    var ourInfo = "";

    for (var i = 0; i < data.length; i++) {
        number = data[i].price;
        if (number >= ourHome) {
            ourHome = number;
            ourInfo = data[i];
        } else {
            ourHome = ourHome;
        }
        document.getElementById("featured2").innerHTML= '<a href="' + ourInfo.id + '.html"><img src="http://3.21.225.172:8080/api/' + ourInfo.imageurl + '"></a><br><p><b>$' + ourHome + "</b></p><p >" + ourInfo.street + ", " + ourInfo.city + ", " + ourInfo.state + " " + ourInfo.zip + " </p><p><b>Year built: </b>" + ourInfo.yrblt.slice(0,4) + " <b>Bathrooms: </b>" + ourInfo.baths + " <b>Bedrooms: </b>" + ourInfo.beds + "</p><p><b>Listing Agent: </b>" + ourInfo.listing + " " + ourInfo.phone + "</p>";

    }
}

function renderHTML2(data){
    var ourHome1 = "0";
    var number1 = "";
    var ourInfo1 = "";

    for (var i = 0; i < data.length; i++) {
        number1 = data[i].sqft;
        if (number1 >= ourHome1) {
            ourHome1 = number1;
            ourInfo1 = data[i];
        } else {
            ourHome1 = ourHome1;
        }
    var imghome1 = '<img class="card-img-top" src="http://3.21.225.172:8080/api/' + ourInfo1.imageurl + '" style="width:100%">';
    var home1txt = '<p><b>' + ourHome1 + " square feet!</b></p><p><b>Listing Agent: </b>" + ourInfo1.listing + " " + ourInfo1.phone + "</p>";

    console.log(ourInfo1.id);
    document.getElementById("imgHouse1").innerHTML= imghome1;
    document.getElementById("title1").innerHTML = '<h5 > ' + ourInfo1.street + ", " + ourInfo1.city + ", " + ourInfo1.state + " " + ourInfo1.zip + '</h5>';
    document.getElementById("house1").innerHTML= home1txt;
    document.getElementById("button1").innerHTML= '<a href="' + ourInfo1.id + '.html" class="btn btn-primary" >See Listing</a>';
    }
}
function renderHTML3(data){
    var ourHome2 = "0";
    var number2 = "";
    var ourInfo2 = "";

    for (var i = 0; i < data.length; i++) {
        number2 = data[i].beds;
        if (number2 >= ourHome2) {
            ourHome2 = number2;
            ourInfo2 = data[i];
        } else {
            ourHome2 = ourHome2;
        }
        var imghome2 = '<img class="card-img-top" src="http://3.21.225.172:8080/api/' + ourInfo2.imageurl + '" style="width:100%">';
        var home2txt = '<p><b>' + ourHome2 + " bedrooms!</b></p><p><b>Listing Agent: </b>" + ourInfo2.listing + " " + ourInfo2.phone + "</p>";

        document.getElementById("imgHouse2").innerHTML= imghome2;
        document.getElementById("title2").innerHTML = '<h5 > ' + ourInfo2.street + ", " + ourInfo2.city + ", " + ourInfo2.state + " " + ourInfo2.zip + '</h5>';
        document.getElementById("house2").innerHTML= home2txt;
        document.getElementById("button2").innerHTML= '<a href="' + ourInfo2.id + '.html" class="btn btn-primary" >See Listing</a>';
    }
}
function renderHTML4(data){
    var ourHome3 = "0";
    var number3 = "";
    var ourInfo3 = "";

    for (var i = 0; i < data.length; i++) {
        number3 = data[i].baths;
        if (number3 >= ourHome3) {
            ourHome3 = number3;
            ourInfo3 = data[i];
        } else {
            ourHome3 = ourHome3;
        }
        var imghome3 = '<img class="card-img-top" src="http://3.21.225.172:8080/api/' + ourInfo3.imageurl + '" style="width:100%">';
        var home3txt = '<p><b>' + ourHome3 + " bathrooms!</b></p><p><b>Listing Agent: </b>" + ourInfo3.listing + " " + ourInfo3.phone + "</p>";

        console.log(imghome3);
        document.getElementById("imgHouse3").innerHTML= imghome3;
        document.getElementById("title3").innerHTML = '<h5 > ' + ourInfo3.street + ", " + ourInfo3.city + ", " + ourInfo3.state + " " + ourInfo3.zip + '</h5>';
        document.getElementById("house3").innerHTML= home3txt;
        document.getElementById("button3").innerHTML= '<a href="' + ourInfo3.id + '.html" class="btn btn-primary" >See Listing</a>';
    }
}
window.onload = myHouse;