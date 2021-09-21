
function myHouse() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://3.21.225.172:8080/api/realestate/all');
    ourRequest.send();
    ourRequest.onload = function () {
        const ourData = JSON.parse(ourRequest.responseText);
        houseDetail(ourData);
    };

}
function houseDetail(data){
    let lv1 =  window.location.search
    console.log(lv1)
    let i = lv1.slice(1);
    let details = data[i].fname + " " + data[i].lname;
    let address = data[i].street + ", " + data[i].city + ", " + data[i].state + " " + data[i].zip ;
    let img = "<img style='max-width:100%; height:auto' src='http://3.21.225.172:8080/api/" + data[i].imageurl + "'></img>" ;
    let lister = data[i].listing + " " + data[i].phone;

    console.log(i);

    $("#htmlImg").html(img);
    $("#htmlTitle").append(data[i].price);
    $("#htmlDetails").append(details);
    $("#htmlLister").append(lister);
    $("#htmlAddress").append(address);
}

window.onload = myHouse;