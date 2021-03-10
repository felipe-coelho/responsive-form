import ARIAUtils from "./scripts/ARIAUtils";
import Counter from "./scripts/Counter";
import FormValidation from "./scripts/FormValidation";

const form = document.querySelector("form");
const submitButton = form.querySelector("button");
const Validation = new FormValidation(form);
submitButton.addEventListener("click", () => Validation.validate());
ARIAUtils();
Counter.init();