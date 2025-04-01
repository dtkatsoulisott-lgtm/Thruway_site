async function fetchMenu() {
    const requestURL = "../menu_items.json";
    const request = new Request(requestURL);

    const response = await fetch(request);
    const appetizers = await response.json();
    serveAppetizers(appetizers)

}

function serveAppetizers(obj) { 
    const appetizerSection = document.getElementById("appetizer-div");
    appetizerSection.textContent = obj.appetizers.name;
}

fetchMenu();