class Calculator {
  #num1;
  #num2;

  constructor() {
    this.#num1 = document.querySelector("#num1");
    this.#num2 = document.querySelector("#num2");
    this.mark = document.querySelector("#operation");
    this.result = document.querySelector("#result");
    this.calcBtn = document.querySelector("#calculateBtn");
    // this.event = document
    //   .querySelector("#calculateBtn")
    //   .addEventListener("click", function () {
    //     console.log(calc.compute(document.querySelector("#option")));
    //   });
  }

  get num1() {
    return this.#num1;
  }

  set num1(newNum) {
    return (this.#num1 = newNum);
  }

  get num2() {
    return this.#num2;
  }

  set num2(newNum) {
    return (this.#num2 = newNum);
  }

  add() {
    // console.log(this.#num1.value, this.#num2.value);
    return +this.#num1.value + +this.#num2.value;
  }

  subtract() {
    return +this.#num1.value - +this.#num2.value;
  }

  multiply() {
    return +this.#num1.value * +this.#num2.value;
  }

  divide() {
    if (+this.#num2 != 0) return +this.#num1.value / +this.#num2.value;
  }

  compute(arg) {
    if (arg === "add") return this.add();
    if (arg === "subtract") return this.subtract();
    if (arg === "multiply") return this.multiply();
    if (arg === "divide") return this.divide();
  }
}

const calc = new Calculator();
// console.log(calc);
// console.log(calc.compute());

document.querySelector("#calculateBtn").addEventListener("click", function () {
  const a = document.querySelector("#operation");
  const b = calc.compute(a.value);
  // console.log(a);
  console.log(b);
  document.querySelector("#result").textContent = b;
});
