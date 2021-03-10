export default () => {
  const documentCheckboxes = document.querySelectorAll(
    'input[type="checkbox"]'
  );

  documentCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        this.setAttribute("aria-checked", true);
      } else {
        this.setAttribute("aria-checked", false);
      }
    });
  });
};
