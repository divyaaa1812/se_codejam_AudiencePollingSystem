export const pollsList = [
  {
    title: "Favorite Halloween Creature",
    image: "./images/poll-image-1.jpg",
    description:
      "Halloween brings out all manner of creatures and spirits. From the dead of night to the light of the moon, which mythical being sends shivers down your spine the most? Cast your spine-chilling vote now!",
    option1: "🧛‍♂️ Vampires",
    option1Votes: 45,
    option2: "🐺 Werewolves",
    option2Votes: 40,
  },
  {
    title: "Classic vs Modern Horror Movies",
    image: "./images/poll-image-2.jpg",
    description:
      "Horror films have evolved over the years, from classic spine-tinglers to modern psychological thrillers. Which era of horror movies keeps you up at night? Make your eerie choice!",
    option1: "🎥 Classic Horrors",
    option1Votes: 55,
    option2: "📽️ Modern Thrillers",
    option2Votes: 50,
  },
  {
    title: "Ideal Haunted Location",
    image: "./images/poll-image-3.jpg",
    description:
      "The allure of haunted places beckons many thrill-seekers. From abandoned mansions to eerie graveyards, which haunted location would you dare to visit on a Halloween night? Venture forth and vote!",
    option1: "🏚️ Haunted Mansion",
    option1Votes: 53,
    option2: "⚰️ Creepy Cemetery",
    option2Votes: 46,
  },
  {
    title: "Favorite Halloween Treat",
    image: "./images/poll-image-4.jpg",
    description:
      "Trick or treat! Halloween is incomplete without its share of sweet indulgences. From candy corn to chocolate bars, which treat satisfies your Halloween cravings? Share your sugary preference!",
    option1: "🍬 Candy Corn",
    option1Votes: 44,
    option2: "🍫 Chocolate Bars",
    option2Votes: 49,
  },
  {
    title: "Best Halloween Costume Theme",
    image: "./images/poll-image-5.jpg",
    description:
      "Dressing up for Halloween is a cherished tradition. Whether you like to keep it spooky or go for something funny, which costume theme wins your heart? Unleash your inner ghoul and cast your vote!",
    option1: "💀 Spooky Skeletons",
    option1Votes: 52,
    option2: "🤡 Funny Clowns",
    option2Votes: 45,
  },
  {
    title: "Halloween Battle: Trick or Treat!",
    image: "./images/poll-image-6.jpg",
    description: "It's time to decide once and for all.",
    option1: "🎭 Trick",
    option1Votes: 60,
    option2: "🍭 Treat",
    option2Votes: 65,
  },
];

export const pollTemplate = "#poll-template";

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
