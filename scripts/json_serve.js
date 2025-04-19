async function fetchMenu() {
    const requestURL = "../menu_items.json";
    const request = new Request(requestURL);

    const response = await fetch(request);
    return response.json();
}
async function serveCategory(menuTag, objCategory) { 
    const obj = await fetchMenu();
    const detailsSection = document.getElementById(menuTag);

    for (let i = 0; i < obj[objCategory].length; i++) {

        const entry = document.createElement("li");
        entry.classList.add("menu-entry");

        let name = document.createElement("div");
        let description = document.createElement("div");
        let price = document.createElement("div");

        name.textContent = obj[objCategory][i].name
        description.textContent = obj[objCategory][i].description
        if (Array.isArray(obj[objCategory][i].description)) {
            description.textContent = ''
            for (let j = 0; j < obj[objCategory][i].description.length; j++){
                description.textContent += obj[objCategory][i].description[j] + '\n'
            }
            description.style.whiteSpace = 'pre-line';
        }
        price.textContent = obj[objCategory][i].price;
        if (Array.isArray(obj[objCategory][i].price)) {
            price.textContent = ''
            for (let j = 0; j < obj[objCategory][i].price.length; j++){
                price.textContent += obj[objCategory][i].price[j] + '\n'
            }
            price.style.whiteSpace = 'pre-line';
        }

        entry.appendChild(name);
        entry.appendChild(description);
        entry.appendChild(price);

        detailsSection.appendChild(entry);
    }
}

async function serveCategoryWithTitle(menuTag, titleField, objCategory){
    const menu = document.getElementById(menuTag);
    const title = document.createElement("h1");
    title.innerText = titleField
    
    await serveCategory(menuTag, objCategory);
    menu.appendChild(title);
}