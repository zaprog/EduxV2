"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var script_loader_service_1 = require("../../../../_services/script-loader.service");
var CandidateStudentsComponent = /** @class */ (function () {
    function CandidateStudentsComponent(_script) {
        this._script = _script;
    }
    CandidateStudentsComponent.prototype.ngOnInit = function () {
    };
    CandidateStudentsComponent.prototype.ngAfterViewInit = function () {
        this._script.loadScripts('candidate-students', ['assets/demo/default/custom/components/datatables/base/data-ajax.js']);
    };
    CandidateStudentsComponent = __decorate([
        core_1.Component({
            selector: "candidate-students",
            templateUrl: "./candidate-students.component.html",
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [script_loader_service_1.ScriptLoaderService])
    ], CandidateStudentsComponent);
    return CandidateStudentsComponent;
}());
exports.CandidateStudentsComponent = CandidateStudentsComponent;
//# sourceMappingURL=candidate-students.component.js.map