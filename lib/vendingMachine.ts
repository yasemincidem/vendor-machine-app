enum STATE {
    ready = "READY",
    dispense_change = "DISPENSE_CHANGE",
    dispense_item =  "DISPENSE_ITEM",
    transaction_cancelled ="TRANSACTION_CANCELLED"
}
export default class VendingMachine {
    private _state: string = "READY";
    private _count: number = 0;

    get state(): string {
        return this._state;
    }
    set state(value: string) {
        this._state = value;
    }

    get count(): number {
        return this._count;
    }
    set count(value: number) {
        this._count = value;
    }

    collectCash() {
        switch (this.state) {
            case STATE.ready:
                this.handleCollectCash();
                this.state = "DISPENSE_ITEM";
                break;
            case STATE.dispense_change:
                throw new Error("Dispensing change. Unable to collect cash");
            case STATE.dispense_item:
                throw new Error("Dispensing item. Unable to collect cash");
            case STATE.transaction_cancelled:
                throw new Error("Transaction cancelled. Unable to collect cash");

        }
    }

    dispenseItem() {
        switch (this.state) {
            case STATE.ready:
                throw new Error("Cash not collected. Unable to dispense item");
                break;
            case STATE.dispense_change:
                this.handleDispenseChange();
                this.state = "READY";
                break;
            case STATE.dispense_item:
                this.handleDispenseItem();
                this.state = "READY";
                break;
            case STATE.transaction_cancelled:
                throw new Error("Transaction cancelled. Unable to dispense item");

        }
    }

    handleCollectCash() {
        console.log("implement collect cash");
    }

    handleDispenseChange() {
        console.log("implement dispense change");
    }

    handleDispenseItem() {
        console.log("implement dispense item");
    }
}
