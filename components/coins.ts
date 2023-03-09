import Component from "../lib/component";

export default class Coins extends Component {
  constructor() {
      super({
          element: document.getElementById("coin-container")
      })
  }

  addCoin(coin) {
      const submitBtn = document.getElementById("submit-btn");
      const currentMoney = document.getElementById("current-money");
      const isItemAvailable = submitBtn.getAttribute("data-isItemAvailable");
      const textContent = super.addCoin(coin, isItemAvailable);
      if (textContent) {
          (submitBtn as HTMLButtonElement).disabled = false
          currentMoney.textContent = textContent;
      }
      return null;
  }

    render() {
      const innerHtml =  `
       <div class="coins-title">Coins:</div>
         <div class="coins-container">
            <div class="coin" data-value="5" data-currency="cent">5¢</div>
            <div class="coin" data-value="10" data-currency="cent">10¢</div>
            <div class="coin" data-value="25" data-currency="cent">25¢</div>
            <div class="coin" data-value="50" data-currency="cent">50¢</div>
            <div class="coin" data-value="100" data-currency="dollar">$1</div>
         </div>
       </div>
      `;
      this.element.innerHTML = innerHtml;

      Array.from(document.getElementsByClassName("coin")).forEach((coin) => {
          coin.addEventListener("click", () => {
              this.addCoin(coin);
          });
      })
  }
};
