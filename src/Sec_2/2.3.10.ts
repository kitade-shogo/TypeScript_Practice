// import { createInterface } from "readline";

// const rl = createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('文字列を入力してください:', (line) => {
//     const num = Number(line)
//     console.log(num + 1000);
//     rl.close()
// });



// const num1 = Number(true);
// const num2 = Number(false);
// const num3 = Number(null);
// const num4 = Number(undefined);

// console.log(num1, num2, num3, num4);



// const bigint1 = BigInt("1234");
// const bigint2 = BigInt(500);
// const bigint3 = BigInt(true);

// console.log(bigint1, bigint2, bigint3);



// const bigint = BigInt("kitade");

// console.log("bigint is ", bigint);



// const str1 = String(1234.5);
// const str2 = String(true);
// const str3 = String(null);
// const str4 = String(undefined);

// console.log(str1, str2, str3, str4);


console.log(Boolean(123))
console.log(Boolean(0))
console.log(Boolean(1n))
console.log(Boolean(0n))
console.log(Boolean(""))
console.log(Boolean("foobar"))
console.log(Boolean(null))
console.log(Boolean(undefined))