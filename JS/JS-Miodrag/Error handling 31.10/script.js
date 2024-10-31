try {
  console.log("Entering try block");
  let b = a + 1;
} catch (err) {
  console.log(err);
} finally {
  console.log("Entering finally block");
}

console.log("Try/catch/finally end");

function multiplyTwoNumbers(inputA, inputB) {
  try {
    if (!inputA || inputB) {
      throw new Error("Input numbers are falsy");
    }

    return inputA * inputB;
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("Code executed");
  }
}

console.log(multiplyTwoNumbers(3, 4));
