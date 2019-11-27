// Form validation
const FormValidationHandler = (function() {
  let isFormDataCorrect = true;
  const _validateEmailInput = UIInput => {
    UIInput.addEventListener('blur', () => {
      const inputValue = UIInput.value;
      if (inputValue.match(/\w+\@\w+\./)) {
        // Correct
        UIInput.classList.remove('invalid-input');
        e;
      } else {
        // Not correct
        UIInput.classList.add('invalid-input');
        e;
      }
    });
  };

  const validateInputs = UIForm => {
    const UIEmailInput = UIForm.querySelector('input[type=email]');
    _validateEmailInput(UIEmailInput);
  };

  return {
    validateInputs
  };
})();

module.exports = FormValidationHandler;
