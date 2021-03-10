class Counter {
  constructor() {
    this.component = document.querySelector("[data-counter]");
    this.counter = this.component.querySelector("input[type='number']");
    this.plusButton = this.component.querySelector("[data-plus-button]");
    this.minusButton = this.component.querySelector("[data-minus-button]");
    this.counterValue = "";
  }

  plusCounter() {
    this.counterValue++;
    this.counter.value = this.counterValue;
    this.changeButtonState(this.minusButton, "enabled");

    const triggerInput = document.createEvent("HTMLEvents");
    triggerInput.initEvent("input", true, true);
    this.counter.dispatchEvent(triggerInput);
  }

  minusCounter() {
    this.counterValue--;

    if (this.counterValue <= 0) {
      this.counterValue = 0;
      this.changeButtonState(this.minusButton, "disabled");
    }

    this.counter.value = this.counterValue;
  }

  changeButtonState(button, state) {
    const buttonState = state;
    const buttonWillChange = button;

    if (buttonState === "disabled") {
      buttonWillChange.setAttribute("aria-disabled", true);
    } else {
      buttonWillChange.setAttribute("aria-disabled", false);
    }
  }

  typeCounter() {
    const typedValue = parseInt(this.counter.value, 10);

    if (typedValue < 0) {
      this.counter.value = "";
      this.changeButtonState(this.minusButton, "disabled");
    } else {
      this.changeButtonState(this.minusButton, "enabled");
    }

    if (typedValue === 0) {
      this.changeButtonState(this.minusButton, "disabled");
    }

    this.counterValue = this.counter.value;
  }

  init() {
    this.counter.value = this.counterValue;
    this.changeButtonState(this.minusButton, "disabled");

    this.plusButton.addEventListener("click", () => this.plusCounter());
    this.minusButton.addEventListener("click", () => this.minusCounter());
    this.counter.addEventListener("input", () => this.typeCounter());
  }
}

export default new Counter();
