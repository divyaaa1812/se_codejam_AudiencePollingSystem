export const pollsList = [
  {
    title: "The spookiest party on Mission",
    image: "./images/poll-1.jpg",
    description:
      "Spooky greetings! 🎃 Join us for a bewitching Halloween soirée. A night where magic meets mischief and ghouls come to dance. Dress in your eerie best, and prepare for a hauntingly good time. RSVP, if you dare, and be part of the most enchanting night of the year! 🦇👻 See you at the witching hour!",
    options: [
      {
        option1: "🎃 Ghosts and spiders",
        option1Votes: 36,
      },
      {
        option2: "👻 Pirates",
        option2Votes: 25,
      },
    ],
  },
];

export const pollWrapper = document.querySelector('.polls__list')

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
