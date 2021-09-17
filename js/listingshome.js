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
    $("#contactUs").click(function(){
        $("#slide").slideToggle("slow");
    });
})

/*function myList() {
    var ourRequest1 = new XMLHttpRequest();
    ourRequest1.open('GET', 'http://3.21.225.172:8080/api/realestate/getByRowAmount?rows=12')
    ourRequest1.onload = function () {
        const ourData1 = JSON.parse(ourRequest1.responseText);
        renderHTML5(ourData1);
    };
    ourRequest1.send();
}

function renderHTML5(data){

    var listing = "";
    var listing2 = "";
    var tableStart = "<table>";
    var listingStart= "<tr>";
    var listingEnd = '</tr>';
    var tableEnd = "</table>";
    for (var i = 0; i < 3; i++) {
        listing += '<td><a href=' + data[i].id + '.html><img style="display:block;" width="100%" height="100%" src="http://3.21.225.172:8080/api/' + data[i].imageurl + '"></a></td>';
        }
    for (var i = 3; i < 6; i++) {
        listing2 += '<td><a href=' + data[i].id + '.html><img style="display:block;" width="100%" height="100%" src="http://3.21.225.172:8080/api/' + data[i].imageurl + '"></a></td>';
    }
        document.getElementById("listingsHome").innerHTML= tableStart + listingStart + listing + listingEnd + listingStart + listing2 + listingEnd + tableEnd;
}

window.onload = myList;*/


function update_data() {
    const minCount = parseInt(document.getElementById("min").value);
    const maxCount = parseInt(document.getElementById("max").value);
    const url = "http://3.21.225.172:8080/api/";

    if (maxCount < minCount) {
        alert("your min price is larger than your max price");
    };

    if (isNaN(maxCount)) {
        var maxUnlimited = 30000000;
    } else {
        var maxUnlimited = maxCount;
    };

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
    $.getJSON( url + "realestate/getByRowAmount?rows=12")
        .done(function( data ) {

            for (var i = 0; i < data.length; i++) {
                if ( data[i].price >= minUnlimited && data[i].price <= maxUnlimited) {
                    html +=
                        "<div class='grid-item'><img width=100 height=100 src='" + url + data[i].imageurl + "'/></div>";

                    document.getElementById("records").innerHTML =  html;
                    //$("<tr/>").html(html).appendTo("#records");
                } else {
                    html=html;
                }
            };
        });
}