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

//     public filterOlder(users: readonly User[]): User[] {
//         return users.filter(u => u.#age > this.#age)
//     }
// }

// const uhyo = new User("uhyo", 26);
// const jhon = new User("Jhon Smith", 15);
// const bob = new User("Bob", 40);

// const older = uhyo.filterOlder([jhon, bob])

// console.log(older);