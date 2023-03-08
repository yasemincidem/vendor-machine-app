import {items} from "./data";

interface Item {
    name: string
    number: number
    count: number
    price: string
    src: string
}
const groupByLength = (data: Item[], size = 3): Item[][] => {
    let result = [];
    let groupedItems = [];
    for (let i = 0; i < data.length; i++) {
        groupedItems.push(data[i]);
        if (groupedItems.length === size) {
            result.push(groupedItems);
            groupedItems = [];
        }
    }
    if (groupedItems.length > 0) {
        result.push(groupedItems);
    }
    return result;
};
const render = () => {
    const $itemContainer = document.getElementById("item-container");
    const coins = Array.from(document.getElementsByClassName("coin"));
    const currentMoney = document.getElementById("current-money");
    const submitBtn = document.getElementById("submit-btn");
    let sum = 0;

    submitBtn.addEventListener("click", () => {
        sum = 0;
        submitBtn.setAttribute("data-isItemAvailable", "false");
        currentMoney.textContent = `Money available: ${formatMoney()}`;
        (submitBtn as HTMLButtonElement).disabled = true
    });

    const selectItem = (itemInfoElement, item) => {
        const isItemAvailable = submitBtn.getAttribute("data-isItemAvailable");
        if (isItemAvailable === "true") {
            alert("One item at a time!");
        } else  {
            const count = (itemInfoElement.getAttribute("count") || item.count) - 1;
            console.log("count", count);
            if (count > 0) {
                itemInfoElement.setAttribute("count", count);
                itemInfoElement.textContent = `Available Items: ${count}`;
                const currSum = (sum > 100 ? (sum / 100) : sum);
                const currPrice = parseFloat(item.price);
                if (currSum > currPrice) {
                    sum = currSum - currPrice;
                    currentMoney.textContent = `Money available: ${formatMoney()}`;
                    if (isItemAvailable === "false") {
                        submitBtn.setAttribute("data-isItemAvailable", "true");
                    }
                } else {
                    alert("It looks like you don't have enough money. Insert some coins.")
                }
            } else if (count === 0) {
                itemInfoElement.textContent = `Out of stock`;
                itemInfoElement.classList.remove("stock-count");
                itemInfoElement.classList.add("out-of-stock");
            }
        }
    };

    const formatMoney = () => {
        const result = (sum >= 100 ? sum / 100 : sum).toLocaleString("en-US", {style:"currency", currency:"USD"});
        return result;
    }

    for (const coin of coins) {
        coin.addEventListener("click", () => {
            const isItemAvailable = submitBtn.getAttribute("data-isItemAvailable");
            if (isItemAvailable === "true") {
                alert("one item at a time. Make a purchase please !");
            } else {
                const value = +coin.getAttribute("data-value");
                sum += value;
                (submitBtn as HTMLButtonElement).disabled = false
                currentMoney.textContent = `Money available: ${formatMoney()}`;
            }
        })
    }
    let groupedItems = groupByLength(items, 3);

    for (let i = 0; i < groupedItems.length; i++) {
        const itemRowContainer = document.createElement("div");
        itemRowContainer.classList.add("item-container-row");
        for (let j = 0; j < groupedItems[i].length; j++) {
            const value = groupedItems[i][j];

            const itemElement = document.createElement("div");
            const itemInfoElement = document.createElement("div");
            const nameElement = document.createElement("div");
            const imageElement = document.createElement("img");
            const priceElement = document.createElement("div");

            itemElement.classList.add("item");
            itemInfoElement.classList.add("stock-count");
            itemInfoElement.classList.add("item-info");
            itemInfoElement.id = "item-info";
            itemInfoElement.textContent = `Available Items: ${value.count}`
            itemElement.onclick = (event) => selectItem(itemInfoElement, value);
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

};
render();
