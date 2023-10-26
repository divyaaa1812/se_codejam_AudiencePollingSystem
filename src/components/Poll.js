export default class Poll {
    constructor({title, description, option1, option2, option1Votes, option2Votes}, pollSelector) {
        this._pollSelector = pollSelector;
        this._title = title;
        this._description = description;
        this._option1 = option1;
        this._option2 = option2;
        this._option1Votes = option1Votes;
        this._option2Votes = option2Votes;

        this._pollElement = document.querySelector(this._pollSelector).content.firstElementChild.cloneNode(true);
    }

    _setEventListners() {
        this._optionsButton1.addEventListener('click', (e) => {
            console.log(e.target.value)
        })

        this._optionsButton2.addEventListener('click', (e) => {
            console.log(e.target.value)
        })
    }

    vote (option) {
        this.option += 1;
    }

    calcPercentOfVotes (...optionVotes) {
        // calculate percentage of votes
    }

    renderVotes () {
        this._option1VoteElement.textContent = this._option1Votes;
        this._option2VoteElement.textContent = this._option2Votes;
    }

    getPoll() {
        this._optionsButton1 = this._pollElement.querySelector('#option-button-1')
        this._optionsButton2 = this._pollElement.querySelector('#option-button-2')
        this._option1VoteElement = this._pollElement.querySelector('#poll-vote1')
        this._option2VoteElement = this._pollElement.querySelector('#poll-vote2')


        this._setEventListners();
        this.renderVotes();

        this._pollElement.querySelector('.poll__title').textContent = this._title;
        this._pollElement.querySelector('.poll__description').textContent = this._description;
        this._pollElement.querySelector('#poll-option1').textContent = this._option1
        this._pollElement.querySelector('#poll-option2').textContent = this._option2

        return this._pollElement;
    }
}