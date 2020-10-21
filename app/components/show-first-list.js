import Component from '@glimmer/component'
import { tracked } from '@glimmer/tracking'

export default class ShowFirstListComponent extends Component {
    @tracked newNameInput
    @tracked newEventInput
    @tracked newAmountInput
    @tracked isTallyUpClicked
    @tracked sumOfExpendages
    @tracked supposedIndividualContribution

    @tracked nameList = []
    
    constructor(){
        super(...arguments)
        this.nameList = this.args.nameList,
        this.isTallyUpClicked = this.args.isTallyUpClicked
        
        
    }

    removeFromList(index){
        console.log("in show-first-list")
        this.isTallyUpClicked = false
        console.log("State of isTallyUp" , this.isTallyUpClicked)

        this.nameList.removeAt(index)
    }

}