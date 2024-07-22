function generateTable() {
    let xSize = document.getElementById('xAxis').value;
    let ySize = document.getElementById('yAxis').value;
    let tableContainer = document.getElementById('tableContainer');
    
    tableContainer.innerHTML = '';

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    let headerRow = document.createElement('tr');
    let headerCell = document.createElement('th');
    headerCell.textContent = 'x';  
    headerRow.appendChild(headerCell);

    for (let i = 1; i <= xSize; i++) {
        let th = document.createElement('th');
        th.textContent = i;
        headerRow.appendChild(th);
    }
    thead.appendChild(headerRow);

    for (let i = 1; i <= ySize; i++) {
        let row = document.createElement('tr');
        let rowHeader = document.createElement('th');
        rowHeader.textContent = i;  
        row.appendChild(rowHeader);

        for (let j = 1; j <= xSize; j++) {
            let cell = document.createElement('td');
            cell.textContent = i * j;
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }

    table.appendChild(thead);
    table.appendChild(tbody);

    tableContainer.appendChild(table);
}
