import "../pages/index.css";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import Poll from "../components/Poll.js";
import * as constant from "../utils/constants.js";

let pollSection = null;

function renderPoll(
  { title, description, option1, option2, option1Votes, option2Votes, image },
  pollSelector
) {
  const poll = new Poll(
    { title, description, option1, option2, option1Votes, option2Votes, image },
    pollSelector
  );
  return poll.getPoll();
}

pollSection = new Section(
  {
    items: constant.pollsList,
    renderer: (data) => {
      pollSection.addItem(renderPoll(data, "#poll-template"));
    },
  },
  ".polls__list"
);
pollSection.renderItems();

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

function handleAddNewPostFormSubmit(pollData) {
  const pollObj = {
    ...pollData,
    option1Votes: 0,
    option2Votes: 0,
  };
  pollSection.addItem(renderPoll(pollObj, "#poll-template"));
  addNewPollPopup.closeModal();
}

/* Event Listeners */
constant.createPollButton.addEventListener("click", handleOpenNewPollForm);

/* Form Validations */
addNewPollFormValidator.enableValidation();
