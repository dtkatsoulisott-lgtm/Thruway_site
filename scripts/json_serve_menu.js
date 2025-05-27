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

        name.textContent = obj[objCategory][i].name;
        if (Array.isArray(obj[objCategory][i].name)) {
            name.textContent = ''
            for (let j = 0; j < obj[objCategory][i].name.length; j++){
                name.textContent += obj[objCategory][i].name[j] + '\n'
            }
            name.style.whiteSpace = 'pre-line';
        }
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

        name.classList.add("light");
        description.classList.add("dark");
        price.classList.add("light");

        entry.appendChild(name);
        entry.appendChild(description);
        entry.appendChild(price);

        detailsSection.appendChild(entry);
    }
}

function clearContext(){
    menu1 = document.getElementById("menu-1");
    menu2 = document.getElementById("menu-2");
    menu3 = document.getElementById("menu-3");
    menu4 = document.getElementById("menu-4");
    menu5 = document.getElementById("menu-5");
    menu6 = document.getElementById("menu-6");
    menu7 = document.getElementById("menu-7");

    menu1.textContent = '';
    menu2.textContent = '';
    menu3.textContent = '';
    menu4.textContent = '';
    menu5.textContent = '';
    menu6.textContent = '';
    menu7.textContent = '';
}

async function serveCategoryWithTitle(menuTag, titleField, objCategory){
    
    const menu = document.getElementById(menuTag);
    const title = document.createElement("h1");
    title.classList.add("menu-title", "light")
    menu.appendChild(title);
    title.innerText = titleField.toUpperCase()
    
    await serveCategory(menuTag, objCategory);
}