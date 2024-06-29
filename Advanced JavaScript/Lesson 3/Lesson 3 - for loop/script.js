const tables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const containerIds = [
  'paraofone',
  'paraoftwo',
  'paraofthree',
  'paraoffour',
  'paraoffive',
  'paraofsix',
  'paraofseven',
  'paraofeight',
  'paraofnine',
  'paraoften'
];

for (let t = 0; t < tables.length; t++) {
  let output = '';
  for (let i = 1; i <= 10; i++) {
    output += `${tables[t]} x ${i} = ${tables[t] * i} <br>`;
  }
  document.getElementById(containerIds[t]).innerHTML = output;
}
