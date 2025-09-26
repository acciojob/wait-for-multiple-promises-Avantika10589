const output = document.getElementById("output");
output.innerHTML = `<tr id="loading"><td colspan="2" class="text-center">Loading...</td></tr>`;

function createPromise(name) {
  const time = (Math.random() * 2 + 1).toFixed(3);
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name, time }), time * 1000);
  });
}

const startTime = performance.now();


const promises = [
  createPromise("Promise 1"),
  createPromise("Promise 2"),
  createPromise("Promise 3"),
];

Promise.all(promises).then((results) => {
  const endTime = performance.now();
  const totalTime = ((endTime - startTime) / 1000).toFixed(3);


  output.innerHTML = "";


  results.forEach((result) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${result.name}</td><td>${result.time}</td>`;
    output.appendChild(row);
  });

  // Add total row
  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
  output.appendChild(totalRow);
});
