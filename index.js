var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Tasse = /** @class */ (function () {
    function Tasse(_redditoLordo) {
        this.redditoLordo = _redditoLordo;
    }
    Tasse.prototype.getRedditoNetto = function () {
        return this.utileTasse() - (this.tasseIrpef() + this.tasseInps());
    };
    return Tasse;
}());
var Professionista = /** @class */ (function (_super) {
    __extends(Professionista, _super);
    function Professionista(codredd, redditoLordo) {
        return _super.call(this, redditoLordo) || this;
    }
    Professionista.prototype.utileTasse = function () {
        return this.redditoLordo - (this.redditoLordo * 0.22);
    };
    Professionista.prototype.tasseIrpef = function () {
        return this.utileTasse() * 0.05;
    };
    Professionista.prototype.tasseInps = function () {
        return this.utileTasse() * 0.25;
    };
    return Professionista;
}(Tasse));
var Artigiano = /** @class */ (function (_super) {
    __extends(Artigiano, _super);
    function Artigiano(codredd, redditoLordo) {
        return _super.call(this, redditoLordo) || this;
    }
    Artigiano.prototype.utileTasse = function () {
        return this.redditoLordo - (this.redditoLordo * 0.05);
    };
    Artigiano.prototype.tasseIrpef = function () {
        return this.utileTasse() * 0.15;
    };
    Artigiano.prototype.tasseInps = function () {
        return this.utileTasse() * 0.15;
    };
    return Artigiano;
}(Tasse));
var Commerciante = /** @class */ (function (_super) {
    __extends(Commerciante, _super);
    function Commerciante(codredd, redditoLordo) {
        return _super.call(this, redditoLordo) || this;
    }
    Commerciante.prototype.utileTasse = function () {
        return this.redditoLordo - (this.redditoLordo * 0.25);
    };
    Commerciante.prototype.tasseIrpef = function () {
        return this.utileTasse() * 0.15;
    };
    Commerciante.prototype.tasseInps = function () {
        return this.utileTasse() * 0.35;
    };
    return Commerciante;
}(Tasse));
var lavA = new Professionista(1, 50000);
var lavB = new Artigiano(2, 60000);
var lavC = new Commerciante(3, 70000);
console.log("Gianni Morandi - Reddito Lordo:", lavA.redditoLordo + "€");
console.log("Gianni Morandi - Reddito post IVA:", lavA.utileTasse() + "€");
console.log("con tasse pari a: Irpef per", lavA.tasseIrpef() + "€", "e Inps per", lavA.tasseInps() + "€");
console.log("Gianni Morandi - Reddito Netto:", lavA.getRedditoNetto() + "€");
console.log("Pippo Pluto - Reddito Lordo:", lavB.redditoLordo + "€");
console.log("Pippo Pluto - Reddito post IVA:", lavB.utileTasse() + "€");
console.log("con tasse pari a: Irpef per", lavB.tasseIrpef() + "€", "e Inps per", lavB.tasseInps() + "€");
console.log("Pippo Pluto - Reddito Netto:", lavB.getRedditoNetto() + "€");
console.log("Mario Rossi - Reddito Lordo:", lavC.redditoLordo + "€");
console.log("Mario Rossi - Reddito post IVA:", lavC.utileTasse() + "€");
console.log("con tasse pari a: Irpef per", lavC.tasseIrpef() + "€", "e Inps per", lavC.tasseInps() + "€");
console.log("Mario Rossi - Reddito Netto:", lavC.getRedditoNetto() + "€");
