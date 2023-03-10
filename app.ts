import Items from "./components/items";
import Coins from "./components/coins";
import Operations from "./components/operations";
import VendingMachine from "./lib/vendingMachine";

const items = new Items();
const coins = new Coins();
const operations = new Operations();

items.render();
coins.render();
operations.render();

const vendingMachine = new VendingMachine();

Array.from(document.getElementsByClassName("item")).forEach((item) => {
    item.addEventListener("click", () => {
        // vendingMachine.selectItem();
    })
})

Array.from(document.getElementsByClassName("coin")).forEach((coin) => {
    coin.addEventListener("click", () => {
        vendingMachine.collectCash();
    });
})


Array.from(document.getElementsByClassName("submit-btn")).forEach((coin) => {
    coin.addEventListener("click", () => {
        vendingMachine.dispenseItem()
    });
})
