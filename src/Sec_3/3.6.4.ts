// // type Obj = { foo?: number };
// // const obj1: Obj = {};
// // // const obj2: Obj = { foo: -1234 };

// // // const { foo = 500 } = obj1;
// // // console.log(foo);
// // // const { foo: bar = 500 } = obj2;
// // // console.log(bar); 

// // // const obj = { foo: null };
// // // const { foo = 123 } = obj;
// // // console.log(foo)

// // const { foo = 123 } = obj1;


// type NestedObj = {
//     obj?: {
//         foo: number
//     }
// };

// const nested1: NestedObj = {
//     obj: { foo: 123 }
// };

// const nested2: NestedObj = {};

// const { obj: { foo: foo1 } = { foo: 500 } } = nested1;
// const { obj: { foo: foo2 } = { foo: 500 } } = nested2;