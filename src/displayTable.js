import get from './getElement.js';

const tableBody = get('.table-body');
const loadTable = (data) => {
  const nfObject = new Intl.NumberFormat('en-US');
  let tableContent = '';
  if (data) {
    tableContent = data
      .map((item) => {
        return `<tr>
 <td>${item[0]}</td>
 <td>${item[1]}</td>
 <td>${item[2]}</td>
 <td>${item[3]}</td>
 <td>${item[4]}</td>
 <td>${item[5]}</td>
 </tr>`;
      })
      .join('');
  } else {
    tableContent = `<div class="not-found">No Matching Results Found</div>`;
  }
  tableBody.innerHTML = tableContent;
};

export default loadTable;
