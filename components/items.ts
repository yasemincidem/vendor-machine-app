import {items} from "../data";
import Component from "../lib/component";

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

export default class Items extends Component {

  constructor() {
      super({
          element: document.getElementById("item-container")
      })
  }

  selectItem(item, itemInfo) {
      const submitBtn = document.getElementById("submit-btn");
      const count = item.getAttribute("data-count");
      const price = item.getAttribute("data-price");
      const currentMoney = document.getElementById("current-money");
      const isItemAvailable = document.getElementById("submit-btn")
          .getAttribute("data-isItemAvailable");

      const textContent = super.selectItem(item, price, itemInfo, count, isItemAvailable);
      if (textContent) {
          currentMoney.textContent = textContent;
          if (isItemAvailable === "false") {
              submitBtn.setAttribute("data-isItemAvailable", "true");
          }
      }
      return null;
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

      Array.from(document.getElementsByClassName("item")).forEach((item) => {
        item.addEventListener("click", () => {
            this.selectItem(item, item.firstElementChild);
        })
      })
    };

};
