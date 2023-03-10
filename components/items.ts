import {items} from "../data";

const groupByLength = (data, size = 3) => {
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

export default class Items {
    private element;

    constructor() {
        this.element = document.getElementById("item-container");
    }

    render () {
      let groupedItems = groupByLength(items, 3);

      let resultHtml = "";

        for (let i = 0; i < groupedItems.length; i++) {
            let innerHtml = "";

            for (let j = 0; j < groupedItems[i].length; j++) {
                const value = groupedItems[i][j];

                innerHtml += `
                 <div class="item"data-price=${value.price} data-count=${value.count}>
                     <div class="stock-count item-info" id="item-info">Available Items: ${value.count}</div>
                     <img src=${value.src} class="image">
                     <div class="name item-info">${value.name}</div>
                     <div class="price item-info" >${value.price}</div>
                 </div>
                `
            }
            resultHtml += `
                <div class="item-container-row">${innerHtml}</div>
            `
        }
      this.element.innerHTML = resultHtml;
    };

};
