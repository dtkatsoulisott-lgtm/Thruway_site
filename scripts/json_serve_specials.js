async function fetchSpecials() {
    const requestURL = "https://landwhich.github.io/Thruway_site/json/specials.json";
    const request = new Request(requestURL);

    const response = await fetch(request);
    return response.json();
}

async function serveSpecials() { 
    const obj = await fetchSpecials();
    const detailsSection = document.getElementById("specials");

    for (let i = 0; i < obj["specials"].length; i++) {

        const entry = document.createElement("li");
        entry.classList.add("menu-entry");

        let name = document.createElement("div");
        let description = document.createElement("div");
        let price = document.createElement("div");

        name.textContent = obj["specials"][i].name;
        if (Array.isArray(obj["specials"][i].name)) {
            name.textContent = ''
            for (let j = 0; j < obj["specials"][i].name.length; j++){
                name.textContent += obj["specials"][i].name[j] + '\n'
            }
            name.style.whiteSpace = 'pre-line';
        }
        description.textContent = obj["specials"][i].description
        if (Array.isArray(obj["specials"][i].description)) {
            description.textContent = ''
            for (let j = 0; j < obj["specials"][i].description.length; j++){
                description.textContent += obj["specials"][i].description[j] + '\n'
            }
            description.style.whiteSpace = 'pre-line';
        }
        price.textContent = obj["specials"][i].price;
        if (Array.isArray(obj["specials"][i].price)) {
            price.textContent = ''
            for (let j = 0; j < obj["specials"][i].price.length; j++){
                price.textContent += obj["specials"][i].price[j] + '\n'
            }
            price.style.whiteSpace = 'pre-line';
        }

        name.classList.add("light");
        description.classList.add("dark");
        price.classList.add("light");

        entry.appendChild(name);
        entry.appendChild(description);
        entry.appendChild(price);

        detailsSection.appendChild(entry);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    serveSpecials();
});