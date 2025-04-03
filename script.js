// Lista de artigos para pesquisa
const articles = [
    { title: "Kira Holloway", url: "#kira-holloway" },
    { title: "Reino de Dynasmir", url: "#dynasmir" },
    { title: "Stands Requiem", url: "#stands-requiem" },
    { title: "Kira Yasho", url: "#Kira-Yasho" },
    { title: "Felipe Halley", url: "#felipe-halley" }
];

function search() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let resultsBox = document.getElementById("searchResults");
    resultsBox.innerHTML = "";

    if (input === "") {
        resultsBox.style.display = "none";
        return;
    }

    let results = articles.filter(article => article.title.toLowerCase().includes(input));

    if (results.length === 0) {
        let noResult = document.createElement("p");
        noResult.textContent = "Nenhum resultado encontrado.";
        noResult.style.padding = "10px";
        noResult.style.color = "black";
        resultsBox.appendChild(noResult);
    } else {
        results.forEach(article => {
            let link = document.createElement("a");
            link.href = article.url;
            link.innerText = article.title;
            link.addEventListener("click", function() {
                resultsBox.style.display = "none";
            });
            resultsBox.appendChild(link);
        });
    }

    resultsBox.style.display = "block";
}

// Fechar resultados ao clicar fora
document.addEventListener("click", function(event) {
    let resultsBox = document.getElementById("searchResults");
    let searchBar = document.querySelector(".search-container");
    
    if (!searchBar.contains(event.target)) {
        resultsBox.style.display = "none";
    }
});