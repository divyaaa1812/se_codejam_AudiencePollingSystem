import "../pages/index.css";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import * as constant from "../utils/constants.js";

const addNewPollPopup = new PopupWithForm(
  "#add-new-poll",
  handleAddNewPostFormSubmit,
  ".modal__button"
);

//instantiate FormValidator class
const addNewPollFormValidator = new FormValidator(
  constant.settings,
  constant.addNewPollModal
);

function handleOpenNewPollForm() {
  addNewPollFormValidator.disableButton();
  addNewPollPopup.openModal();
}

function handleAddNewPostFormSubmit() {
  console.log("Form submitted successfully");
}

/* Event Listeners */
constant.createPollButton.addEventListener("click", handleOpenNewPollForm);

/* Form Validations */
addNewPollFormValidator.enableValidation();
