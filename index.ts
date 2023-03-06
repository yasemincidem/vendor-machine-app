const items = [{
    name: "Coca cola",
    number: 1,
    count: 3,
    price: "1.20",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRse0PuqzmE6ba20JqXwH4zJ1lVri9G1R3a_tAg6Sk&s"
}, {
    name: "Pepsi",
    number: 2,
    count: 3,
    price: "2.40",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRse0PuqzmE6ba20JqXwH4zJ1lVri9G1R3a_tAg6Sk&s"
}, {
    name: "M & M",
    number: 3,
    count: 5,
    price: "3.23",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRse0PuqzmE6ba20JqXwH4zJ1lVri9G1R3a_tAg6Sk&s"
}, {
    name: "Chocolate",
    number: 3,
    count: 2,
    price: "4.33",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRse0PuqzmE6ba20JqXwH4zJ1lVri9G1R3a_tAg6Sk&s"
}, {
    name: "Crackers",
    number: 4,
    count: 5,
    price: "6.23",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRse0PuqzmE6ba20JqXwH4zJ1lVri9G1R3a_tAg6Sk&s"
}, {
    name: "Bonibon",
    number: 6,
    count: 2,
    price: "6.09",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRse0PuqzmE6ba20JqXwH4zJ1lVri9G1R3a_tAg6Sk&s"
}];
const $itemContainer = document.getElementById("item-container");
let result = [];
let groupedItems = [];
for (let i = 0; i < items.length; i++) {
    groupedItems.push(items[i]);
    if (groupedItems.length === 3) {
        result.push(groupedItems);
        groupedItems = [];
    }
}
if (groupedItems.length > 0) {
    result.push(groupedItems);
}
for (let i = 0; i < result.length; i++) {
    const itemRowContainer = document.createElement("div");
    itemRowContainer.classList.add("item-container-row");
    for (let j = 0; j < result[i].length; j++) {
        const value = result[i][j];
        const itemElement = document.createElement("div");
        const itemInfoElement = document.createElement("div");
        const nameElement = document.createElement("div");
        const imageElement = document.createElement("img");
        const priceElement = document.createElement("div");
        itemElement.classList.add("item");
        itemInfoElement.classList.add("stock-count");
        itemInfoElement.classList.add("item-info");
        itemInfoElement.textContent = `Available Items: ${value.count}`
        imageElement.classList.add("image");
        imageElement.src = value.src;
        nameElement.classList.add("name");
        nameElement.classList.add("item-info");
        nameElement.textContent = value.name;
        priceElement.classList.add("price");
        priceElement.classList.add("item-info");
        priceElement.textContent = value.price;
        itemElement.appendChild(itemInfoElement)
        itemElement.appendChild(imageElement)
        itemElement.appendChild(nameElement)
        itemElement.appendChild(priceElement)
        itemRowContainer.appendChild(itemElement);
    }
    $itemContainer.appendChild(itemRowContainer);
}
