document.getElementById("myform").addEventListener("submit", function(e) {
  e.preventDefault();
});

// Lista dos números a serem inseridos
var numbers = [];

function addList() {
  "Adiciona elementos na lista";

  var num = document.querySelector("input#number");
  let sel = document.querySelector("select#sel1");
  let res = document.querySelector("div#res");
  let n = Number(num.value);

  res.innerHTML = "";

  if (!checkAll(n)) return false;
  else {
    numbers.push(n);

    // Adicionar options na tela
    let item = document.createElement("option");
    item.text = `Número ${n} foi adicionado`;
    item.value = `tab${n}`;
    sel.appendChild(item);
  }
}

function checkAll(n) {
  "Checa se é possível adicionar o número";

  for (let index = 0; index < numbers.length; index++) {
    if (n == numbers[index]) {
      alert("Número existente!");
      return;
    }
  }

  if (n < 1 || n > 100) return;

  return true; // atendeu todos os requisitos
}

function finalize() {
  "Exibe os resultados";

	let res = document.querySelector("div#res");
	let lst = numbers[numbers.length - 1];
	let sum = numbers.reduce((a, b) => a + b);
	let avg = (sum/numbers.length).toFixed(2);

  numbers.sort();
  res.innerHTML += `Ao todo, temos ${numbers.length} elementos <br>`;
  res.innerHTML += `O maior valor informado foi ${lst} <br>`;
  res.innerHTML += `O menor valor informado foi ${numbers[0]} <br>`;
  res.innerHTML += `Somando todos os valores, temos ${sum} <br>`;
  res.innerHTML += `A média dos valores é ${avg}`;
}
