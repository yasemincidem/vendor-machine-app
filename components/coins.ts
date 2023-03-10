export default class Coins {
  element: HTMLElement;

  constructor() {
      this.element = document.getElementById("coin-container")
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
  }
};
