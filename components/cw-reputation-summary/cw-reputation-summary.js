var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CWReputationSummary = (function (_super) {
    __extends(CWReputationSummary, _super);
    function CWReputationSummary() {
        _super.apply(this, arguments);
    }
    CWReputationSummary.prototype.ready = function () {
        this.star1 = (this.reputation.roundedRating >= 1) ? 'gold' : 'grey';
        this.star2 = (this.reputation.roundedRating >= 2) ? 'gold' : 'grey';
        this.star3 = (this.reputation.roundedRating >= 3) ? 'gold' : 'grey';
        this.star4 = (this.reputation.roundedRating >= 4) ? 'gold' : 'grey';
        this.star5 = (this.reputation.roundedRating === 5) ? 'gold' : 'grey';
    };
    __decorate([
        property({ type: Object }), 
        __metadata('design:type', Object)
    ], CWReputationSummary.prototype, "reputation", void 0);
    __decorate([
        property({ type: String }), 
        __metadata('design:type', Object)
    ], CWReputationSummary.prototype, "star1", void 0);
    __decorate([
        property({ type: String }), 
        __metadata('design:type', Object)
    ], CWReputationSummary.prototype, "star2", void 0);
    __decorate([
        property({ type: String }), 
        __metadata('design:type', Object)
    ], CWReputationSummary.prototype, "star3", void 0);
    __decorate([
        property({ type: String }), 
        __metadata('design:type', Object)
    ], CWReputationSummary.prototype, "star4", void 0);
    __decorate([
        property({ type: String }), 
        __metadata('design:type', Object)
    ], CWReputationSummary.prototype, "star5", void 0);
    CWReputationSummary = __decorate([
        component("cw-reputation-summary"), 
        __metadata('design:paramtypes', [])
    ], CWReputationSummary);
    return CWReputationSummary;
}(polymer.Base));
// register the element in Polymer
CWReputationSummary.register();
