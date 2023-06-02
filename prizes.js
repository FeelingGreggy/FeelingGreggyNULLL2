        window.addEventListener("load", () => {
            const pic = document.getElementById("pic");
            pic.addEventListener("mouseenter", () => document.body.className = 'gregged');
            pic.addEventListener("mouseleave", () => document.body.className = '');
            
        });


function wonPrize(){
    alert("PRIZE REDEEMED!")
}
