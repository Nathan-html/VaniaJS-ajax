// check if the script is linked
console.log("main.js is linked");

document.getElementById('run').addEventListener("click", () => {

    // get bool for describe if radio button is checked or not checked
    let getHtmlData = document.querySelector('input#get-html-data').checked;
    let getJsonData = document.querySelector('input#get-json-data').checked;
    let getHtmlMovies = document.querySelector('input#get-html-movies').checked;
    let getJsonMovies = document.querySelector('input#get-json-movies').checked;
    let target = document.querySelector('section#target')
    
    if (getHtmlData) {
        fetch("http://127.0.0.1:5500/ajax/data/1-get-html-article.html")
        .then(response => response.text())
        .then(datas => {
            target.innerHTML = datas;
        })
        .catch(error => alert("error : " + error));
    }
    if (getJsonData) {
        fetch("http://127.0.0.1:5500/ajax/data/2-get-contacts-list.json")
        .then(response => response.json())
        .then(datas => {
            console.log(datas);
            target.innerHTML = ''
            let UL = document.createElement("ul");
            for (const data of datas) {
                const LI = document.createElement("li");
                const liText = document.createTextNode(`Prénom : ${data.firstName} - Téléphone : ${data.phone}`);
                LI.appendChild(liText);
                UL.appendChild(LI);
            }
            target.appendChild(UL); 
        })
        .catch(error => alert("error : " + error));
    }
    if (getHtmlMovies) {
        fetch("http://127.0.0.1:5500/ajax/data/3-get-html-movies.html")
        .then(response => response.text())
        .then(datas => {
            target.innerHTML = datas;
        })
        .catch(error => alert("error : " + error));
    }
    if (getJsonMovies) {
        console.log("getJsonMovies");
    }
})