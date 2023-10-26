export default class Poll {
    constructor({title, description, options}, pollSelector) {
        this._pollSelector = pollSelector;
        this._title = title;
        this._description = description;
        this._options = options;
        // this.option1Votes = options[0][this.option1Votes];
        // this.option2Votes = options[1][this.option2Votes];
    }

    _setEventListners() {
        this._optionBUtton.addEventListener('click', () => {
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
        this._option1VoteElement = document.querySelector('#poll-option1-votes').textContent = this.option1Votes;
        this._option2VoteElement = document.querySelector('#poll-option2-votes').textContent = this.option2Votes;
    }

    getPoll() {
        this.poll = document.querySelector(this._pollSelector).content.firstElementChild.cloneNode(true);
        this._optionsButton = this.poll.querySelector('.poll__option')


        this._setEventListners();
        this.renderVotes();

        this.poll.querySelector('.poll__title').textContent = this._title;
        this.poll.querySelector('.poll__description').textContent = this._description;
        this.poll.querySelector('#poll-option1').textContent = this._option1;
        this.poll.querySelector('#poll-option2').textContent = this._option2;
    }
}