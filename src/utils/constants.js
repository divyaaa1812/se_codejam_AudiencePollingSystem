export const pollsList = [
  {
    title: "Favorite Halloween Creature",
    image:
      "https://img.freepik.com/free-vector/flat-design-halloween-background_52683-43036.jpg?w=1060&t=st=1698369489~exp=1698370089~hmac=900b309e6f9e548725a4b50d310c95b726a7562da91d017457d60ae5726f9fd8",
    description:
      "Halloween brings out all manner of creatures and spirits. From the dead of night to the light of the moon, which mythical being sends shivers down your spine the most? Cast your spine-chilling vote now!",
    option1: "🧛‍♂️ Vampires",
    option1Votes: 45,
    option2: "🐺 Werewolves",
    option2Votes: 40,
  },
  {
    title: "Classic vs Modern Horror Movies",
    image:
      "https://img.freepik.com/free-vector/flat-background-halloween-celebration_23-2149698880.jpg?w=1060&t=st=1698369495~exp=1698370095~hmac=1c3c4c2e897fa89e8eed96da654b35ec816ecf1fbcf28cab9f38e15ae455b8b2",
    description:
      "Horror films have evolved over the years, from classic spine-tinglers to modern psychological thrillers. Which era of horror movies keeps you up at night? Make your eerie choice!",
    option1: "🎥 Classic Horrors",
    option1Votes: 55,
    option2: "📽️ Modern Thrillers",
    option2Votes: 50,
  },
  {
    title: "Ideal Haunted Location",
    image:
      "https://img.freepik.com/free-vector/hand-drawn-flat-halloween-background_23-2149077569.jpg?w=1060&t=st=1698369662~exp=1698370262~hmac=9904434fbbd93064823019156dff8658c31eff95df1dc3ddc5b873a56612f5d8",
    description:
      "The allure of haunted places beckons many thrill-seekers. From abandoned mansions to eerie graveyards, which haunted location would you dare to visit on a Halloween night? Venture forth and vote!",
    option1: "🏚️ Haunted Mansion",
    option1Votes: 53,
    option2: "⚰️ Creepy Cemetery",
    option2Votes: 46,
  },
  {
    title: "Favorite Halloween Treat",
    image:
      "https://img.freepik.com/free-vector/halloween-cat-disguised-skull-character_24908-59552.jpg?w=740&t=st=1698369494~exp=1698370094~hmac=fdbdc2ffb68a3405a459b15ac66d8148394df14e37fd0a4ac90551e41bbb8f01",
    description:
      "Trick or treat! Halloween is incomplete without its share of sweet indulgences. From candy corn to chocolate bars, which treat satisfies your Halloween cravings? Share your sugary preference!",
    option1: "🍬 Candy Corn",
    option1Votes: 44,
    option2: "🍫 Chocolate Bars",
    option2Votes: 49,
  },
  {
    title: "Best Halloween Costume Theme",
    image:
      "https://img.freepik.com/free-vector/halloween-illustration-with-big-glowing-moon-ball-night-sparkle-sky-bats-magic-forest-flat_1284-40788.jpg?w=740&t=st=1698369492~exp=1698370092~hmac=2fa387dc5b673ca17aadf7fad43e58089b6aa7d674d5b1115086ad8cbac672ab",
    description:
      "Dressing up for Halloween is a cherished tradition. Whether you like to keep it spooky or go for something funny, which costume theme wins your heart? Unleash your inner ghoul and cast your vote!",
    option1: "💀 Spooky Skeletons",
    option1Votes: 52,
    option2: "🤡 Funny Clowns",
    option2Votes: 45,
  },
  {
    title: "Halloween Battle: Trick or Treat!",
    image:
      "https://img.freepik.com/free-vector/drawn-halloween-background-with-scary-cemetery_52683-43546.jpg?w=1060&t=st=1698369490~exp=1698370090~hmac=f0de6cc55bf3018a87fb9fe380508e27c935d50a54ab7f4ff12c1d605e7a2175",
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
