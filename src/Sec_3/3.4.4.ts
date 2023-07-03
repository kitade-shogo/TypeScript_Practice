// type Animal = {
//     name: string;
// };

// // type Family<Parent = Animal, Child = Animal> = {
// //     mother: Parent;
// //     father: Parent;
// //     child: Child;
// // };

// // type S = Family<string, string>;
// // type T = Family;
// // type U = Family<string>;

// type Family<Parent, Child = Animal> = {
//     mother: Parent;
//     father: Parent;
//     child: Child;
// };