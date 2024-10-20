const add = function () {
  document.getElementById("input").value += "+";
};

const off = function () {
  document.getElementById("input").value = "";
};

const mr = function () {
  document.getElementById("input").value = "Memory Recall not implemented";
};

const ma = function () {
  document.getElementById("input").value += "+";
};

const ml = function () {
  document.getElementById("input").value += "-";
};

const div = function () {
  document.getElementById("input").value += "/";
};

const c = function () {
  document.getElementById("input").value = "";
};

const seven = function () {
  document.getElementById("input").value += "7";
};

const eight = function () {
  document.getElementById("input").value += "8";
};

const nine = function () {
  document.getElementById("input").value += "9";
};

const one = function () {
  document.getElementById("input").value += "1";
};

const two = function () {
  document.getElementById("input").value += "2";
};

const three = function () {
  document.getElementById("input").value += "3";
};

const four = function () {
  document.getElementById("input").value += "4";
};

const five = function () {
  document.getElementById("input").value += "5";
};

const six = function () {
  document.getElementById("input").value += "6";
};

const point = function () {
  document.getElementById("input").value += ".";
};

const zero = function () {
  document.getElementById("input").value += "0";
};

const l = function () {
  document.getElementById("input").value += "L";
};

const mul = function () {
  document.getElementById("input").value += "*";
};
const per = function () {
  document.getElementById("input").value += "%";
};
const sub = function () {
  document.getElementById("input").value += "-";
};

const pow = function () {
  document.getElementById("input").value += "^";
};

const to = function () {
  try {
    let input = document.getElementById("input").value;

    // Handle percentage
    input = input.replace(/(\d+)%/g, (match, number) => {
      return number / 100;
    });

    // Handle power
    input = input.replace(/(\d+)\^(\d+)/g, (match, base, exponent) => {
      return `Math.pow(${base}, ${exponent})`;
    });

    const result = eval(input);
    document.getElementById("input").value = result;
  } catch (error) {
    document.getElementById("input").value = "Error";
  }
};
document
  .getElementById("dark-mode-toggle")
  .addEventListener("click", function () {
    const calculator = document.querySelector(".calculator");
    calculator.classList.toggle("dark-mode");

    const icon = this.querySelector("i");
    if (icon.classList.contains("fa-moon")) {
      icon.classList.replace("fa-moon", "fa-sun");
    } else {
      icon.classList.replace("fa-sun", "fa-moon");
    }
  });
