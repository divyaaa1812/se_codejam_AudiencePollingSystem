import "../pages/index.css";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import Poll from "../components/Poll.js";
import * as constant from "../utils/constants.js";

let pollSection = null;

function renderPoll({ title, description, options }) {
  const poll = new Poll({ title, description, options });
  return poll;
}

function createPollObj ({title, image, description, option1, option2}) {
  const pollObj = {
    title,
    image,
    description,
    options: [
      {
        option1,
        option1Votes: 0,
      },
      {
        option2,
        option2Votes: 0,
      }
    ]
  }
  return pollObj;
}

pollSection = new Section(
  {
    items: constant.pollsList,
    renderer: (data) => {
      pollSection.addItem(renderPoll(data));
    },
  },
  ".polls__list"
);
// pollSection.renderItems();

const addNewPollPopup = new PopupWithForm(
  "#add-new-poll",
  (pollData) => {  
    console.log(createPollObj(pollData));
    // pollSection.addItem(renderPoll(pollData))
    addNewPollPopup.closeModal();
  },
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
