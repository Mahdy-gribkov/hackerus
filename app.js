function createTable(tableData) {
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');
  
    tableData.forEach(function(rowData) {
      var row = document.createElement('tr');
  
      rowData.forEach(function(cellData) {
        var cell = document.createElement('td');
        cell.appendChild(document.createTextNode(cellData));
        row.appendChild(cell);
      });
  
      tableBody.appendChild(row);
    });
  
    table.appendChild(tableBody);
    document.body.appendChild(table);
  }
  
  createTable([["Course Name", "Start At","Number Of Classes","Price"], ["Web Economics", "Oct 12, 2022","16","100.5$",],["Building Cool Robots","Oct 25, 2022","12","95.99$"],["Cooking","Nov 05,2022","15","100$"]]);