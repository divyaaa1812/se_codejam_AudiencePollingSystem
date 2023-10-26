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
            this.vote('option1')
        })

        this._optionsButton2.addEventListener('click', (e) => {
            this.vote('option2')
        })
    }

    vote = (option) => {
        if (option === 'option1') {
            this._option1Votes++;
        } else {
            this._option2Votes++;
        }
        this.renderVotes();
    }

    // _calcPercentOfVotes (option1Votes, option2Votes) {
    //     let option1VotingPercentage = 0
    //     let option2VotingPercentage = 0
        
    //     if (option1Votes !== 0) {
    //         option1VotingPercentage = Math.floor(option1Votes / (option1Votes + option2Votes) * 100)
    //     }
        
    //     if (option2Votes !== 0) {
    //         option2VotingPercentage = Math.floor(option2Votes / (option1Votes + option2Votes) * 100)
    //     }

    //     return [option1VotingPercentage, option2VotingPercentage];
    // }

    renderVotes () {
        // const [option1Votes, option2Votes] = this._calcPercentOfVotes(this._option1Votes, this._option2Votes)
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