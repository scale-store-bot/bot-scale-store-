const deals = [
    {
        name: "AirPods Pro",
        buy: 60,
        sell: 110,
        category: "tech",
        link: "https://vinted.fr"
    },
    {
        name: "Nike Dunk Low",
        buy: 40,
        sell: 90,
        category: "mode",
        link: "https://vinted.fr"
    },
    {
        name: "Aspirateur Dyson",
        buy: 80,
        sell: 150,
        category: "maison",
        link: "https://leboncoin.fr"
    }
];

function searchDeals() {
    const maxPrice = document.getElementById("maxPrice").value;
    const minMargin = document.getElementById("minMargin").value;
    const category = document.getElementById("category").value;

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    const filtered = deals.filter(d => {
        const margin = d.sell - d.buy;
        return (
            (maxPrice === "" || d.buy <= maxPrice) &&
            (minMargin === "" || margin >= minMargin) &&
            (category === "" || d.category === category)
        );
    });

    filtered.forEach(d => {
        const margin = d.sell - d.buy;

        resultsDiv.innerHTML += `
            <div class="card">
                <h3>${d.name}</h3>
                <p>Prix d’achat : ${d.buy}€</p>
                <p>Prix de revente : ${d.sell}€</p>
                <p>Marge : +${margin}€</p>
                <a href="${d.link}" target="_blank">Voir l’annonce</a>
            </div>
        `;
    });
}

