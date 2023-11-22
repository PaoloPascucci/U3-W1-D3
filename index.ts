abstract class Tasse {
  redditoLordo: number;
  constructor(_redditoLordo: number) {
    this.redditoLordo = _redditoLordo;
  }

  abstract tasseIrpef(): number;
  abstract tasseInps(): number;
  abstract utileTasse(): number;

  getRedditoNetto(): number {
    return this.utileTasse() - (this.tasseIrpef() + this.tasseInps());
  }
}

class Professionista extends Tasse {
  constructor(codredd: number, redditoLordo: number) {
    super(redditoLordo);
  }
  
  utileTasse(): number {
    return this.redditoLordo - (this.redditoLordo * 0.22);
  }
  tasseIrpef(): number {
      return  this.utileTasse() * 0.05;
    }
    
    tasseInps(): number {
        return this.utileTasse() * 0.25;
    }
}

class Artigiano extends Tasse {
  constructor(codredd: number, redditoLordo: number) {
    super(redditoLordo);
  }

  utileTasse(): number {
    return this.redditoLordo - (this.redditoLordo * 0.05);
  }

  tasseIrpef(): number {
    return this.utileTasse() * 0.15;
  }

  tasseInps(): number {
    return this.utileTasse() * 0.15;
  }
}

class Commerciante extends Tasse {
  constructor(codredd: number, redditoLordo: number) {
    super(redditoLordo);
  }

  utileTasse(): number {
    return this.redditoLordo - (this.redditoLordo * 0.25);
  }

  tasseIrpef(): number {
    return this.utileTasse() * 0.15;
  }

  tasseInps(): number {
    return this.utileTasse() * 0.35;
  }
}
const lavA = new Professionista(1, 50000);
const lavB = new Artigiano(2, 60000);
const lavC = new Commerciante(3, 70000);

console.log("Gianni Morandi - Reddito Lordo:", lavA.redditoLordo+"€");
console.log("Gianni Morandi - Reddito post IVA:", lavA.utileTasse()+"€");
console.log("con tasse pari a: Irpef per", lavA.tasseIrpef()+"€", "e Inps per", lavA.tasseInps()+"€");
console.log("Gianni Morandi - Reddito Netto:", lavA.getRedditoNetto()+"€");

console.log("Pippo Pluto - Reddito Lordo:", lavB.redditoLordo+"€");
console.log("Pippo Pluto - Reddito post IVA:", lavB.utileTasse()+"€");
console.log("con tasse pari a: Irpef per", lavB.tasseIrpef()+"€", "e Inps per", lavB.tasseInps()+"€");
console.log("Pippo Pluto - Reddito Netto:", lavB.getRedditoNetto()+"€");

console.log("Mario Rossi - Reddito Lordo:", lavC.redditoLordo+"€");
console.log("Mario Rossi - Reddito post IVA:", lavC.utileTasse()+"€");
console.log("con tasse pari a: Irpef per", lavC.tasseIrpef()+"€", "e Inps per", lavC.tasseInps()+"€");
console.log("Mario Rossi - Reddito Netto:", lavC.getRedditoNetto()+"€");