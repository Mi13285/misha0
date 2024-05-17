let table = document.body.firstElementChild;
console.log(table);
let tr = table.rows[1];
console.log(tr);
let element = table.rows.length;
console.log(element);

for (let index = 0; index < table.rows.length; index++) {
  let row = table.rows[index];
  row.cells[index].style.backgroundColor = "red";
}
for (let lol of table.rows) {
  console.log(lol);
  lol.style.backgroundColor = "blue";
  lol.cells[0].style.backgroundColor = "orange";
}
