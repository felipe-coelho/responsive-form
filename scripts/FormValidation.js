import Messages from "./Messages";

class FormValidation {
  constructor(form) {
    this.form = form;
    this.requiredInputText = form.querySelectorAll("[required]");
    this.checkBoxGroup = form.querySelectorAll("input[type='checkbox']");
    this.messagesLabel = form.querySelector("#validationMessages");
    this.CLASS_VALID = "valid";
    this.CLASS_INVALID = "invalid";
  }

  validateInputText() {
    this.requiredInputText.forEach((input) => {
      if (!input.value || input.value === "0") {
        input.setAttribute("aria-invalid", "true");
      }
    });
  }

  validateInputCheckbox() {
    let isThereOneSelected = false;

    this.checkBoxGroup.forEach((input) => {
      if (input.checked) {
        isThereOneSelected = true;
      }
    });

    if (!isThereOneSelected) {
      this.checkBoxGroup.forEach((input) => {
        input.parentNode.setAttribute("aria-invalid", "true");
      });
    }
  }

  removeCheckboxInvalidation() {
    this.checkBoxGroup.forEach((input) => {
      input.parentNode.removeAttribute("aria-invalid");
    });
  }

  removeInputTextInvalidation() {
    this.requiredInputText.forEach((input) => {
      input.removeAttribute("aria-invalid");
    });
  }

  showValidationMessage(message, cssClass) {
    this.messagesLabel.textContent = message;
    this.messagesLabel.setAttribute("aria-label", message);
    this.messagesLabel.classList.remove(...this.messagesLabel.classList);
    this.messagesLabel.classList.add(cssClass);
  }

  validate() {
    this.validateInputCheckbox();
    this.validateInputText();
    this.messagesLabel.setAttribute("aria-hidden", false);

    if (this.form.querySelectorAll("[aria-invalid]").length) {
      this.showValidationMessage(Messages.formInvalid, this.CLASS_INVALID);
    } else {
      this.showValidationMessage(Messages.formValid, this.CLASS_VALID);
    }

    this.checkBoxGroup.forEach((input) => {
      input.addEventListener("click", () => this.removeCheckboxInvalidation());
    });

    this.requiredInputText.forEach((input) => {
      input.addEventListener("input", () => this.removeInputTextInvalidation());
    });
  }
}

export default FormValidation;
