class GuessingGame {
    constructor() {
    }

    setRange(min, max) {
        this.first = min;
        this.last = max;
        this.middle;
    }

    guess() {
        this.middle = Math.ceil((this.first + this.last) / 2);
        return this.middle;
    }

    lower() {
        this.last = this.middle;
    }

    greater() {
        this.first = this.middle;
    }
}

module.exports = GuessingGame;
