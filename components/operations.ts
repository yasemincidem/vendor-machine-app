export default class Operations {
    private element: HTMLElement;

    constructor() {
        this.element = document.getElementById("operations-container");
    }

    render() {
        const innerHtml = `
            <div class="money-avb-title" id="current-money">Money available:</div>
            <button class="submit-btn" id="submit-btn" data-isItemAvailable="false">Get your money and selected item</button>
        `;

        this.element.innerHTML = innerHtml;
    }
};
