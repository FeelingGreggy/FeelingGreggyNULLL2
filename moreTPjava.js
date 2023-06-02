// This is a comment

function createRainbowEffect(elementId) {
    var rainbowColors = [
        'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'lime'
    ];

    const TARGET = document.getElementById("mainHeader");
    const Target2 = document.getElementById("babyHeader");
    const Target3 = document.getElementById("configBabysitter");
    const Target4 = document.getElementById("internalTP");
    const Target5 = document.getElementById("confirmBooking");




    var text = TARGET.innerText;
    var text2 = Target2.innerText;
    var text3 = Target3.innerText;
    var text4 = Target4.innerText;
    var text5 = Target5.innerText;


    let rainbowText = '';
    let rainbowText2 = '';
    let rainbowText3 ='';
    let rainbowText4 ='';
    let rainbowText5 ='';


    for (var i = 0; i < text.length; i++) {
        var color = rainbowColors[i % rainbowColors.length];
        rainbowText += '<span style="color:' + color + '">' + text[i] + '</span>';
    }

    for (var i = 0; i < text2.length; i++) {
        var color = rainbowColors[i % rainbowColors.length];
        rainbowText2 += '<span style="color:' + color + '">' + text2[i] + '</span>';
    }

    for (var i = 0; i < text3.length; i++) {
        var color = rainbowColors[i % rainbowColors.length];
        rainbowText3 += '<span style="color:' + color + '">' + text3[i] + '</span>';
    }

    for (var i = 0; i < text4.length; i++) {
        var color = rainbowColors[i % rainbowColors.length];
        rainbowText4 += '<span style="color:' + color + '">' + text4[i] + '</span>';
    }

    for (var i = 0; i < text5.length; i++) {
        var color = rainbowColors[i % rainbowColors.length];
        rainbowText5 += '<span style="color:' + color + '">' + text5[i] + '</span>';
    }



    TARGET.innerHTML = rainbowText;
    Target2.innerHTML = rainbowText2;
    Target3.innerHTML = rainbowText3
    Target4.innerHTML = rainbowText4
    Target5.innerHTML = rainbowText5;


}

// EVOKE THE RAINBOW, KIDDO!!!!

createRainbowEffect('rainbowText');

//Warps you to the booking confirmation page, kiddo!
function bookingMade(){
    document.location = "booked.html";
}
