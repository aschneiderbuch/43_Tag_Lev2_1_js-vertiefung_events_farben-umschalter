console.log("test");

// Hintergrundfrabe ändert

/* 
onclick
html
css
 */

const btn = document.querySelector(`#umschalter`);
console.log(btn);

btn.addEventListener("click", (e) => {
    app(e)

});

function app(e) {
    console.log(btn);
    console.log(e.target); // Object mit blauTaste, gelbeTaste, ...
    console.log(e.target.value)
    console.log(e.target.id) // text von Id blauTase , ....
    console.log("in event listener");

    if (e.target.id === "blauTaste") {
        console.log("in if blauTaste");
        document.querySelector(`body`).style.backgroundColor = "blue";
    }
    else if (e.target.id === "gelbTaste") {
        console.log("in if gelbeTaste");
        document.querySelector(`body`).classList.toggle("js_gelb");       // toggle geht nur alleine für sich, 
                                                                        // kann keine anderen Backgrounds überschreiben ändern
    }
    else if(e.target.id === "grauTaste"){
        console.log("in if grauTaste");
        document.querySelector(`body`).style.backgroundColor = "grey";
    }
    else if(e.target.id === "weissTaste"){
        console.log("in if weissTaste");
        document.querySelector(`body`).style.backgroundColor = "white";
    }
}