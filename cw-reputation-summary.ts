@component("cw-reputation-summary")
class CWReputationSummary extends polymer.Base {
  @property({ type: Object })
  reputation: ISimpleReputationObject
  @property({ type: String })
  star1
  @property({ type: String })
  star2
  @property({ type: String })
  star3
  @property({ type: String })
  star4
  @property({ type: String })
  star5
  public ready() {
    this.star1 = (this.reputation.roundedRating >= 1) ? 'gold' : 'grey'
    this.star2 = (this.reputation.roundedRating >= 2) ? 'gold' : 'grey'
    this.star3 = (this.reputation.roundedRating >= 3) ? 'gold' : 'grey'
    this.star4 = (this.reputation.roundedRating >= 4) ? 'gold' : 'grey'
    this.star5 = (this.reputation.roundedRating === 5) ? 'gold' : 'grey'
  }
}


// register the element in Polymer
CWReputationSummary.register();
