interface MyInterface {
  myNumber: number;
  myString: string;
}

let myInterface: MyInterface = {
  myNumber: 10,
  myString: "Hello World",
};
console.log("myNumber = ", myInterface.myNumber);
console.log("myString = ", myInterface.myString);

