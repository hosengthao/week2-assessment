function myCustomers() {
    let ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://localhost:8090/customer/all')
    ourRequest.onload = function () {
        const ourData = JSON.parse(ourRequest.responseText);
        customerTable(ourData);
    };
    ourRequest.send();
}

function customerTable(data){

    $("#customertable").html("")
    for (var i = 0; i < data.length; i++) {

        var customer =
            '<div class="col-md-4 text-center" id="card1" style=""><div class="card" style="width:300px">'
            + '<div class="card-header">' + data[i].first + " " + data[i].middle + " " + data[i].last + '</div>'
            + '<div class="card-body">'
            + '<h5 class="darkgray"> ' + data[i].street + ", " + data[i].city + ", " + data[i].state + " " + data[i].zip + '</h5>'
            + "<p class='darkgray'><b>Email: </b>" + data[i].email + "</p></div></div></div>";


        let tablerow = '<tr class="tablerow2"><td class="tablecell2">' + data[i].first + '</td><td class="tablecell2">' + data[i].middle + '</td><td class="tablecell2">' + data[i].last + '</td><td class="tablecell2">' + data[i].street + '</td><td class="tablecell2">' + data[i].city + '</td><td class="tablecell2">' + data[i].state + '</td><td class="tablecell2">' + data[i].zip + '</td><td class="tablecell2">' + data[i].email + '</td></tr>' ;
        $("#customertable").append(customer);
    }
}


window.onload = myCustomers;

//this function will slide toggle the contact us info
$(document).ready(function(){
    $("#contactUs").click(function(){
        $("#slide").slideToggle("slow");
    });
});

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