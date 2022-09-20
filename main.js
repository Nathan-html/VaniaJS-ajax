// check if the script is linked
console.log("main.js is linked");

document.getElementById('run').addEventListener("click", () => {

    // get bool for describe if radio button is checked or not checked
    let getHtmlData = document.querySelector('input#get-html-data').checked;
    let getJsonData = document.querySelector('input#get-json-data').checked;
    let getHtmlMovies = document.querySelector('input#get-html-movies').checked;
    let getJsonMovies = document.querySelector('input#get-json-movies').checked;
    
    if (getHtmlData) {
        fetch("http://127.0.0.1:5500/ajax/data/1-get-html-article.html")
        .then(response => response.text())
        .then(datas => {
            document.querySelector('section#target').innerHTML = datas;
        })
        .catch(error => alert("error : " + error));
    }
    if (getJsonData) {
        console.log("getJsonData");
    }
    if (getHtmlMovies) {
        console.log("getHtmlMovies");
    }
    if (getJsonMovies) {
        console.log("getJsonMovies");
    }
})