// table script start
const fullTable = document.createElement("table");
let tableData = [
  {
    sn: 1,
    name: "Rohan Singh",
    contact: "7897802647",
    delete: "x",
  }
];

let tableRow = `<th>SN.</th>
        <th id='shortName'>Name</th>
        <th>Contact</th>
        <th>Delete</th>`;
tableData.forEach((row) => {
  const rowData = `<tr>
                <td>${row.sn}</td>
                <td>${row.name}</td>
                <td>${row.contact}</td>
                <td id=${row.sn} class='deleterow' style='cursor: pointer;'>${row.delete}</td>
                </tr>`;
  tableRow += rowData;
});
fullTable.innerHTML = tableRow;
const tableInformation = document.getElementById("infoTable");
tableInformation.appendChild(fullTable);

// delete row start
deletetableData();
sortTableData();
// delete row end

// table script end

// contact form script start
const contactForm = document.getElementById("forminfo");
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const contactNumber = document.getElementById("cname");

function ContactSubmitted(event) {
  event.preventDefault();
  const dublicateData = tableData.filter(rowData => ((rowData.name === `${firstName.value} ${lastName.value}`) || rowData.contact === `${contactNumber.value}`));
  console.log('dublicateData', dublicateData.length);
  if(dublicateData.length > 0){
    alert('Duplicates are not allowed!');
    return
  }
  const contactInfo = {
    sn: tableData.length + 1,
    name: `${firstName.value} ${lastName.value}`,
    contact: `${contactNumber.value}`,
    delete: "x",
  };
  firstName.value = '';
  lastName.value = '';
  contactNumber.value = '';
  tableData.push(contactInfo);
  tableRow = `<th>SN.</th>
            <th id='shortName'>Name</th>
            <th>Contact</th>
            <th>Delete</th>`;
  tableData.forEach((row) => {
    const rowData = `<tr>
                    <td>${row.sn}</td>
                    <td>${row.name}</td>
                    <td>${row.contact}</td>
                    <td id=${row.sn} class='deleterow' style="cursor: pointer;">${row.delete}</td>
                    </tr>`;
    tableRow += rowData;
  });
  fullTable.innerHTML = tableRow;

  // delete row start
  deletetableData();
  sortTableData();
  // delete row end
}

contactForm.addEventListener("submit", ContactSubmitted);
// contact form script end

// search form script start
const searchForm = document.getElementById("formsearch");
const searchQuery = document.getElementById("query");

function serarchSubmitted(event) {
  event.preventDefault();
  const searchValue = searchQuery.value;
  tableRow = `<th>SN.</th>
                <th id='shortName'>Name</th>
                <th>Contact</th>
                <th>Delete</th>`;
  tableData.forEach((row) => {
    if (
      row.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    ) {
      const rowData = `<tr>
                        <td>${row.sn}</td>
                        <td>${row.name}</td>
                        <td>${row.contact}</td>
                        <td id=${row.sn} class='deleterow' style="cursor: pointer;">${row.delete}</td>
                        </tr>`;
      tableRow += rowData;
    }
  });
  fullTable.innerHTML = tableRow;

  // delete row start
  deletetableData();
  sortTableData();
  // delete row end
}

searchForm.addEventListener("input", serarchSubmitted);
// search form script end

function deletetableData() {
  // delete row start
  let deleteRows = document.querySelectorAll(".deleterow");
  function deleteTableRow(event) {
    const status = confirm('Please confirm to Delete!');
    if(status){

      const id = parseInt(event.target.id);
      const afterDelete = tableData.filter((row) => row.sn !== id);
      tableData = afterDelete;
      tableRow = `<th>SN.</th>
                  <th id='shortName'>Name</th>
                  <th>Contact</th>
                  <th>Delete</th>`;
      tableData.forEach((row) => {
        const rowData = `<tr>
                          <td>${row.sn}</td>
                          <td>${row.name}</td>
                          <td>${row.contact}</td>
                          <td id=${row.sn} class='deleterow' style="cursor: pointer;">${row.delete}</td>
                          </tr>`;
        tableRow += rowData;
      });
      fullTable.innerHTML = tableRow;
      deletetableData();
      sortTableData();
    }
  }
  deleteRows.forEach((rowDelete) => {
    rowDelete.addEventListener("click", deleteTableRow);
  });
}
// delete row end

// sort table by name column start
function sortTableData() {
  let shortRows = document.getElementById("shortName");
  function sortTableRow() {
    tableData.sort((a, b) => a.name.localeCompare(b.name));
    tableRow = `<th>SN.</th>
                <th id='shortName'>Name</th>
                <th>Contact</th>
                <th>Delete</th>`;
    tableData.forEach((row) => {
      const rowData = `<tr>
                        <td>${row.sn}</td>
                        <td>${row.name}</td>
                        <td>${row.contact}</td>
                        <td id=${row.sn} class='deleterow' style="cursor: pointer;">${row.delete}</td>
                        </tr>`;
      tableRow += rowData;
    });
    fullTable.innerHTML = tableRow;
    sortTableData();
    deletetableData();
  }
  shortRows.addEventListener("click", sortTableRow);
}
// sort table by name column end
