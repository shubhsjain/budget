
// export class BudgetItem {
//   description: string;
//   amount: number;

//   constructor(description: string, amount: number) {
//     this.description = description;
//     this.amount = amount;
//   }
// }

// insted of above we can just use ts 2 line code

export class BudgetItem {
  constructor (public description: string , public amount: number ){}
}