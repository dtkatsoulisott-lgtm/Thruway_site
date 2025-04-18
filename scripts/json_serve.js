async function fetchMenu() {
    const requestURL = "../menu_items.json";
    const request = new Request(requestURL);

    const response = await fetch(request);
    return response.json();
}
async function serveCategory(divName, objCategory) { 
    const obj = await fetchMenu();
    const detailsSection = document.getElementById(divName);
    
    detailsSection.textContent = '';

    let name = document.createElement("div");
    let description = document.createElement("div");
    let price = document.createElement("div");

    for (let i = 0; i < obj[objCategory].length; i++) {

        const entry = document.createElement("li");
        entry.classList.add("menu-entry");

        name.textContent = obj[objCategory][i].name
        description.textContent = obj[objCategory][i].description
        price.textContent = obj[objCategory][i].price;
        entry.appendChild(name);
        entry.appendChild(description);
        entry.appendChild(price);

        detailsSection.appendChild(entry);
    }
}