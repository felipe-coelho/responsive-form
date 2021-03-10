(()=>{"use strict";function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}const e=new(function(){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.component=document.querySelector("[data-counter]"),this.counter=this.component.querySelector("input[type='number']"),this.plusButton=this.component.querySelector("[data-plus-button]"),this.minusButton=this.component.querySelector("[data-minus-button]"),this.counterValue=""}var n,i;return n=e,(i=[{key:"plusCounter",value:function(){this.counterValue++,this.counter.value=this.counterValue,this.changeButtonState(this.minusButton,"enabled");var t=document.createEvent("HTMLEvents");t.initEvent("input",!0,!0),this.counter.dispatchEvent(t)}},{key:"minusCounter",value:function(){this.counterValue--,this.counterValue<=0&&(this.counterValue=0,this.changeButtonState(this.minusButton,"disabled")),this.counter.value=this.counterValue}},{key:"changeButtonState",value:function(t,e){var n=t;"disabled"===e?n.setAttribute("aria-disabled",!0):n.setAttribute("aria-disabled",!1)}},{key:"typeCounter",value:function(){var t=parseInt(this.counter.value,10);t<0?(this.counter.value="",this.changeButtonState(this.minusButton,"disabled")):this.changeButtonState(this.minusButton,"enabled"),0===t&&this.changeButtonState(this.minusButton,"disabled"),this.counterValue=this.counter.value}},{key:"init",value:function(){var t=this;this.counter.value=this.counterValue,this.changeButtonState(this.minusButton,"disabled"),this.plusButton.addEventListener("click",(function(){return t.plusCounter()})),this.minusButton.addEventListener("click",(function(){return t.minusCounter()})),this.counter.addEventListener("input",(function(){return t.typeCounter()}))}}])&&t(n.prototype,i),e}());function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}const r=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.form=e,this.requiredInputText=e.querySelectorAll("[required]"),this.checkBoxGroup=e.querySelectorAll("input[type='checkbox']"),this.messagesLabel=e.querySelector("#validationMessages"),this.CLASS_VALID="valid",this.CLASS_INVALID="invalid"}var e,r;return e=t,(r=[{key:"validateInputText",value:function(){this.requiredInputText.forEach((function(t){t.value&&"0"!==t.value||t.setAttribute("aria-invalid","true")}))}},{key:"validateInputCheckbox",value:function(){var t=!1;this.checkBoxGroup.forEach((function(e){e.checked&&(t=!0)})),t||this.checkBoxGroup.forEach((function(t){t.parentNode.setAttribute("aria-invalid","true")}))}},{key:"removeCheckboxInvalidation",value:function(){this.checkBoxGroup.forEach((function(t){t.parentNode.removeAttribute("aria-invalid")}))}},{key:"removeInputTextInvalidation",value:function(){this.requiredInputText.forEach((function(t){t.removeAttribute("aria-invalid")}))}},{key:"showValidationMessage",value:function(t,e){var i,r;this.messagesLabel.textContent=t,this.messagesLabel.setAttribute("aria-label",t),(i=this.messagesLabel.classList).remove.apply(i,function(t){if(Array.isArray(t))return n(t)}(r=this.messagesLabel.classList)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(r)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?n(t,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),this.messagesLabel.classList.add(e)}},{key:"validate",value:function(){var t=this;this.validateInputCheckbox(),this.validateInputText(),this.messagesLabel.setAttribute("aria-hidden",!1),this.form.querySelectorAll("[aria-invalid]").length?this.showValidationMessage("Verifique os campos que precisam ser preenchidos.",this.CLASS_INVALID):this.showValidationMessage("Formulário enviado com sucesso!",this.CLASS_VALID),this.checkBoxGroup.forEach((function(e){e.addEventListener("click",(function(){return t.removeCheckboxInvalidation()}))})),this.requiredInputText.forEach((function(e){e.addEventListener("input",(function(){return t.removeInputTextInvalidation()}))}))}}])&&i(e.prototype,r),t}();var a=document.querySelector("form"),u=a.querySelector("button"),o=new r(a);u.addEventListener("click",(function(){return o.validate()})),document.querySelectorAll('input[type="checkbox"]').forEach((function(t){t.addEventListener("change",(function(){this.checked?this.setAttribute("aria-checked",!0):this.setAttribute("aria-checked",!1)}))})),e.init()})();