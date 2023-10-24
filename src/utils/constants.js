export const settings = {
  inputElementSelector: ".modal__text-input",
  submitButtonSelector: ".modal__button",
  inactiveButtonSelector: "modal__button_disabled",
  inputErrorSelector: "modal__input-error_visible",
  errorSelectorHide: "modal__input-error-hide",
  errorSelector: "modal__input-error",
};

export const submitButton = document.querySelector(
  settings.submitButtonSelector
);

export const addNewPollModal = document.querySelector("#add-new-poll");
export const createPollButton = document.querySelector("#add-new-poll-button");

// export const pollTitle = document.querySelector(".profile__title");
// export const pollSubtitle = document.querySelector(".profile__subtitle");
