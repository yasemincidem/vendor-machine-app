interface Props {
    element: HTMLElement;
}
let sum = 0;
let selectedItemInfoElement= null;
let selectedItem= null;
let selectedCount= null;

export default class Component {
    element: HTMLElement;

    constructor(props: Props) {
        this.element = props.element;
    }

    formatMoney() {
        const result = (sum >= 100 ? sum / 100 : sum).toLocaleString("en-US", {style:"currency", currency:"USD"});
        return result;
    }

    addCoin(coin, isItemAvailable) {
        if (isItemAvailable === "true") {
            alert("one item at a time. Make a purchase please !");
        } else {
            const value = +coin.getAttribute("data-value");
            sum += value;
            return `Money available: ${this.formatMoney()}`;
        }
        return null;
    }

    selectItem(item, price, itemInfo, count, isItemAvailable) {
        if (isItemAvailable === "true") {
            alert("One item at a time!");
        } else  {
            selectedItemInfoElement = itemInfo;
            selectedItem = item;
            selectedCount = count;
            if (count !== "0") {
                const currSum = (sum > 100 ? (sum / 100) : sum);
                const currPrice = parseFloat(price);
                if (currSum > currPrice) {
                    sum = currSum - currPrice;
                    return `Money available: ${this.formatMoney()}`;
                } else {
                    alert("It looks like you don't have enough money. Insert some coins.")
                }
            } else {
                alert("It is out of stock. Would you like anything else ?")
            }
        }
    }

    purchase() {
        sum = 0;
        const count = (parseInt(selectedItem.getAttribute("data-count")) || selectedCount) - 1;
        if (count > 0) {
            selectedItem.setAttribute("data-count", count.toString());
            selectedItemInfoElement.textContent = `Available Items: ${count}`;
        } else if (count === 0) {
            selectedItem.setAttribute("data-count", "0");
            selectedItemInfoElement.textContent = `Out of stock`;
            selectedItemInfoElement.classList.remove("stock-count");
            selectedItemInfoElement.classList.add("out-of-stock");
        }
    }
}
