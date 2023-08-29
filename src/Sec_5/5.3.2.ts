// class User {
//     name: string;
//     #age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.#age = age;
//     }

//     public isAdult(): boolean {
//         return this.#age >= 20;
//     }
// }

// // class PremiumUser extends User {
// //     rank: number = 1;

// //     public isAdult(): boolean {
// //         return true;
// //     }
// // }

// class PremiumUser extends User {
//   rank: number;

//   constructor(name: string, age: number, rank: number) {
//     super(name, age);
//     this.rank = rank;
//   }
// }

// const taro = new PremiumUser("Taro Yamada", 15, 3);
// console.log(taro.name);
// console.log(taro.rank);
