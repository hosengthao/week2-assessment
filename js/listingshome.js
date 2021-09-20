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

//this function is used to call the functions to show the images. this function will pull the JSON data
function myList() {
    var ourRequest1 = new XMLHttpRequest();
    ourRequest1.open('GET', 'http://3.21.225.172:8080/api/realestate/getByRowAmount?rows=12')
    ourRequest1.onload = function () {
        const ourData1 = JSON.parse(ourRequest1.responseText);
        renderHTML5(ourData1);
    };
    ourRequest1.send();
}
//this will make display the images and build a div with the id="records" to load images on after.
function renderHTML5(data){

    var listing = "";
    var listing2 = "";
    var divStart = '<div id="records">';
    var tableStart = "<table>";
    var listingStart= "<tr>";
    var listingEnd = '</tr>';
    var tableEnd = "</table>";
    var divEnd = '</div>';
    var url = "http://3.21.225.172:8080/api/";
    for (var i = 0; i < 3; i++) {
        listing += '<td><a href=' + data[i].id + '.html><img style="display:block;" width="100%" height="100%" src="' + url + data[i].imageurl + '"></a></td>';
        }
    for (var i = 3; i < 6; i++) {
        listing2 += '<td><a href=' + data[i].id + '.html><img style="display:block;" width="100%" height="100%" src="http://3.21.225.172:8080/api/' + data[i].imageurl + '"></a></td>';
    }
        document.getElementById("listingsHome").innerHTML= divStart + tableStart + listingStart + listing + listingEnd + listingStart + listing2 + listingEnd + tableEnd + divEnd;
}
//this will load myList on page load.
window.onload = myList;

//this function takes the min and max values and will display the first 6 houses that match range.
function update_data() {

    var divStart = '<div id="records">';
    var tableStart = "<table>";
    var listingStart= "<tr>";
    var listingEnd = '</tr>';
    var tableEnd = "</table>";
    var divEnd = '</div>';
    const minCount = parseInt(document.getElementById("min").value);//puts the input to integer
    const maxCount = parseInt(document.getElementById("max").value);
    const url = "http://3.21.225.172:8080/api/";

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

    console.log(minCount);
    console.log(minUnlimited);
    console.log(maxCount);
    console.log(maxUnlimited);

    var html = "";
    var html2 = "";
    var html3 = "";
    var html4 = "";
    const htmlImages = [];
    let pageFirst;
    let pageSecond;
//get the JSON data and if the price matches then .push into htmlImages array
    $.getJSON( url + "realestate/getByRowAmount?rows=12")
        .done(function( data ) {
            for (var i = 0; i < data.length; i++) {
                if ( data[i].price >= minUnlimited && data[i].price <= maxUnlimited) {
                       htmlImages.push(data[i]);
                }
            }
            console.log(htmlImages[0].id);
            //sets the first 3 images from htmlImages array into the individual table cells. if array object is undefined then will display nothing
            for (var i = 0; i < 3; i++) {
                if (htmlImages[i] !== undefined) {
                    html +=  '<td><a href=' + htmlImages[i].id + '.html><img style="display:block;" width="100%" height="100%" src="' + url + htmlImages[i].imageurl + '"></a></td>';
                } else {
                    html +=  '<td></td>';
                }
            }
            //the next 3 images
            for (var i = 3; i < 6; i++) {
                if (htmlImages[i] !== undefined) {
                    html2 +=  '<td><a href=' + htmlImages[i].id + '.html><img style="display:block;" width="100%" height="100%" src="' + url + htmlImages[i].imageurl + '"></a></td>';
                } else {
                    html2 += '<td></td>';
                }
            }

            for (var i = 6; i < 9; i++) {
                if (htmlImages[i] !== undefined) {
                    html3 +=  '<td><a href=' + htmlImages[i].id + '.html><img style="display:block;" width="100%" height="100%" src="' + url + htmlImages[i].imageurl + '"></a></td>';
                } else {
                    html3 += '<td></td>';
                }
            }
            for (var i = 9; i < 12; i++) {
                if (htmlImages[i] !== undefined) {
                    html4 +=  '<td><a href=' + htmlImages[i].id + '.html><img style="display:block;" width="100%" height="100%" src="' + url + htmlImages[i].imageurl + '"></a></td>';
                } else {
                    html3 += '<td></td>';
                }
            }
            pageFirst = divStart + tableStart + listingStart + html + listingEnd + listingStart + html2 + listingEnd + tableEnd + divEnd + '<div class="text-center"><input type="button" onclick="previous()" value="<<"><input type="button" onclick="next()" value=">>"></div>';
            document.getElementById("records").innerHTML= pageFirst;
            pageSecond = divStart + tableStart + listingStart + html3 + listingEnd + listingStart + html4 + listingEnd + tableEnd + divEnd + '<div class="text-center"><input type="button" onclick="previous()" value="<<"><input type="button" onclick="next()" value=">>"></div>';
        });
}

//this function will load the next 6 images into "records" when the next button is pressed
function next() {
    var divStart = '<div id="records">';
    var tableStart = "<table>";
    var listingStart= "<tr>";
    var listingEnd = '</tr>';
    var tableEnd = "</table>";
    var divEnd = '</div>';
    const minCount = parseInt(document.getElementById("min").value);
    const maxCount = parseInt(document.getElementById("max").value);
    const url = "http://3.21.225.172:8080/api/";

    //check if max is less than min value
    if (maxCount < minCount) {
        alert("your min price is larger than your max price");
    };
    //check if there is no max value
    if (isNaN(maxCount)) {
        var maxUnlimited = 30000000;
    } else {
        var maxUnlimited = maxCount;
    };
    //check if there is no min value
    if (isNaN(minCount)) {
        var minUnlimited = 0;
    } else {
        var minUnlimited = minCount;
    };

    console.log(minCount);
    console.log(minUnlimited);
    console.log(maxCount);
    console.log(maxUnlimited);

    var html = "";
    var html2 = "";
    var html3 = "";
    var html4 = "";
    const htmlImages = [];
    let pageFirst;
    let pageSecond;

    $.getJSON( url + "realestate/getByRowAmount?rows=12")
        .done(function( data ) {
            for (var i = 0; i < data.length; i++) {
                if ( data[i].price >= minUnlimited && data[i].price <= maxUnlimited) {
                    htmlImages.push(data[i]);
                }
            }
            console.log(htmlImages[0].id);
            for (var i = 0; i < 3; i++) {
                if (htmlImages[i] !== undefined) {
                    html +=  '<td><a href=' + htmlImages[i].id + '.html><img style="display:block;" width="100%" height="100%" src="' + url + htmlImages[i].imageurl + '"></a></td>';
                } else {
                    html +=  '<td></td>';
                }
            }
            for (var i = 3; i < 6; i++) {
                if (htmlImages[i] !== undefined) {
                    html2 +=  '<td><a href=' + htmlImages[i].id + '.html><img style="display:block;" width="100%" height="100%" src="' + url + htmlImages[i].imageurl + '"></a></td>';
                } else {
                    html2 += '<td></td>';
                }
            }

            for (var i = 6; i < 9; i++) {
                if (htmlImages[i] !== undefined) {
                    html3 +=  '<td><a href=' + htmlImages[i].id + '.html><img style="display:block;" width="100%" height="100%" src="' + url + htmlImages[i].imageurl + '"></a></td>';
                } else {
                    html3 += '<td></td>';
                }
            }
            for (var i = 9; i < 12; i++) {
                if (htmlImages[i] !== undefined) {
                    html4 +=  '<td><a href=' + htmlImages[i].id + '.html><img style="display:block;" width="100%" height="100%" src="' + url + htmlImages[i].imageurl + '"></a></td>';
                } else {
                    html3 += '<td></td>';
                }
            }
            pageFirst = divStart + tableStart + listingStart + html + listingEnd + listingStart + html2 + listingEnd + tableEnd + divEnd + '<div class="text-center"><input type="button" onclick="previous()" value="<<"><input type="button" onclick="next()" value=">>"></div>';
            pageSecond = divStart + tableStart + listingStart + html3 + listingEnd + listingStart + html4 + listingEnd + tableEnd + divEnd + '<div class="text-center"><input type="button" onclick="previous()" value="<<"><input type="button" onclick="next()" value=">>"></div>';
            document.getElementById("records").innerHTML= pageSecond;
        });
}

//this function will load the previous 6 images into "records" when the next button is pressed
function previous() {
    var divStart = '<div id="records">';
    var tableStart = "<table>";
    var listingStart= "<tr>";
    var listingEnd = '</tr>';
    var tableEnd = "</table>";
    var divEnd = '</div>';
    const minCount = parseInt(document.getElementById("min").value);
    const maxCount = parseInt(document.getElementById("max").value);
    const url = "http://3.21.225.172:8080/api/";

    //check if max is less than min value
    if (maxCount < minCount) {
        alert("your min price is larger than your max price");
    };
    //check if there is no max value
    if (isNaN(maxCount)) {
        var maxUnlimited = 30000000;
    } else {
        var maxUnlimited = maxCount;
    };
    //check if there is no min value
    if (isNaN(minCount)) {
        var minUnlimited = 0;
    } else {
        var minUnlimited = minCount;
    };

    console.log(minCount);
    console.log(minUnlimited);
    console.log(maxCount);
    console.log(maxUnlimited);

    var html = "";
    var html2 = "";
    var html3 = "";
    var html4 = "";
    const htmlImages = [];
    let pageFirst;
    let pageSecond;

    $.getJSON( url + "realestate/getByRowAmount?rows=12")
        .done(function( data ) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].price >= minUnlimited && data[i].price <= maxUnlimited) {
                    htmlImages.push(data[i]);
                }
            }
            console.log(htmlImages[0].id);
            for (var i = 0; i < 3; i++) {
                if (htmlImages[i] !== undefined) {
                    html += '<td><a href=' + htmlImages[i].id + '.html><img style="display:block;" width="100%" height="100%" src="' + url + htmlImages[i].imageurl + '"></a></td>';
                } else {
                    html += '<td></td>';
                }
            }
            for (var i = 3; i < 6; i++) {
                if (htmlImages[i] !== undefined) {
                    html2 += '<td><a href=' + htmlImages[i].id + '.html><img style="display:block;" width="100%" height="100%" src="' + url + htmlImages[i].imageurl + '"></a></td>';
                } else {
                    html2 += '<td></td>';
                }
            }

            for (var i = 6; i < 9; i++) {
                if (htmlImages[i] !== undefined) {
                    html3 += '<td><a href=' + htmlImages[i].id + '.html><img style="display:block;" width="100%" height="100%" src="' + url + htmlImages[i].imageurl + '"></a></td>';
                } else {
                    html3 += '<td></td>';
                }
            }
            for (var i = 9; i < 12; i++) {
                if (htmlImages[i] !== undefined) {
                    html4 += '<td><a href=' + htmlImages[i].id + '.html><img style="display:block;" width="100%" height="100%" src="' + url + htmlImages[i].imageurl + '"></a></td>';
                } else {
                    html3 += '<td></td>';
                }
            }
            pageFirst = divStart + tableStart + listingStart + html + listingEnd + listingStart + html2 + listingEnd + tableEnd + divEnd + '<div class="text-center"><input type="button" onclick="previous()" value="<<"><input type="button" onclick="next()" value=">>"></div>';
            pageSecond = divStart + tableStart + listingStart + html3 + listingEnd + listingStart + html4 + listingEnd + tableEnd + divEnd + '<div class="text-center"><input type="button" onclick="previous()" value="<<"><input type="button" onclick="next()" value=">>"></div>';
            document.getElementById("records").innerHTML = pageFirst;
        });
}


