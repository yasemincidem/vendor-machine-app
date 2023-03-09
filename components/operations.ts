import Component from "../lib/component";

export default class Operations extends Component{
    constructor() {
        super({element : document.getElementById("operations-container")})
    }

    purchase() {
        const submitBtn = document.getElementById("submit-btn");
        const currentMoney = document.getElementById("current-money");
        submitBtn.setAttribute("data-isItemAvailable", "false");
        currentMoney.textContent = `Money available:`;
        super.purchase();
    }

    render() {
        const innerHtml = `
            <div class="money-avb-title" id="current-money">Money available:</div>
            <button class="submit-btn" id="submit-btn" data-isItemAvailable="false" disabled>Get your money and selected item</button>
        `;

        this.element.innerHTML = innerHtml;

        document.getElementById("submit-btn").addEventListener("click", () => {
          this.purchase()
        });
    }
};
