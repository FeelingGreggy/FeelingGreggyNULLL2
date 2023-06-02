// THIS IS A COMMENT...

function createRainbowEffect(elementId) {
    var rainbowColors = [
        'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'lime'
    ];

    const TARGET = document.getElementById("mainHeader");
    const TARGET2 = document.getElementById("list1");
    const TARGET3= document.getElementById("list2");
    const TARGET4= document.getElementById("forParents");
    const TARGET5= document.getElementById("makeTp");



    var text = TARGET.innerText;
    var text2 = TARGET2.innerText;
    var text3 = TARGET3.innerText;
    var text4 = TARGET4.innerText;
    var text5 = TARGET5.innerText;



    var rainbowText = '';
    var rainbowText2 = '';
    var rainbowText3 = '';
    var rainbowText4 = '';
    var rainbowText5 = '';




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
    TARGET2.innerHTML = rainbowText2;
    TARGET3.innerHTML = rainbowText3;
    TARGET4.innerHTML = rainbowText4;
    TARGET5.innerHTML = rainbowText5;


}

// EVOKE THE RAINBOW, KIDDO!!!!

createRainbowEffect('rainbowText');

const barbie = new Audio("./barbie.mp3");

function kiddos (){
    var count = 0;
    rainbow();
    spinnerTODD.classList.add('spin-animation');
    let interval = setInterval(() => {
        barbie.play();
      if (count == 7) {
        clearInterval(interval);
        rainbow();
      }
    }, 1000);
  }



//CAUSE THE RAINDOW SCREEN EFFECT

  let style;
  function rainbow() {
    if (style) {
      style.parentNode.removeChild(style);
      style = undefined;
      return;
    }
  
    style = document.createElement("style");
    style.textContent = `
  @keyframes rainbow {
    from { filter: hue-rotate(0deg) saturate(2); }
    to { filter: hue-rotate(360deg) saturate(2); }
  }
  
  * {
    animation: rainbow 1s infinite;
  }
  `;
    document.head.appendChild(style);
  
  }
  
  const spinnerTODD = document.getElementById('topPIC');

  function babyHire (){
    document.location = "hireBabysitter.html";
  }

  function driverHire (){
    document.location = "driver.html";
  }