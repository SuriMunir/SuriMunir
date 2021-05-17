import newDataSet from './src/data.js';
import loadTable from './src/displayTable.js';
import paginate from './src/paginate.js';
import get from './src/getElement.js';
import displayButtons from './src/displayButtons.js';

const btnContainer = get('.btn-container');
const info = get('.info');
const itemsPerPageInput = get('.itemsPerPage');
const tableHeadings = get('.table-heading');
const sortArrows = document.querySelectorAll('.fas');
const searchInput = get('.search');

let index = 0;
let itemsPerPage = parseInt(itemsPerPageInput.value);
let data = [];
let pages = [];
let sortColumnID = 0;
let ascending = true;
let searchString = '';

const setUI = () => {
  loadTable(pages[index]);
  info.innerText = `showing ${index * itemsPerPage + 1} to ${
    index * itemsPerPage + itemsPerPage > data.length
      ? data.length
      : index * itemsPerPage + itemsPerPage
  } of total ${data.length}`;
  displayButtons(btnContainer, pages, index);
};

const init = () => {
  data = newDataSet(sortColumnID, ascending, searchString);
  pages = paginate(data, itemsPerPage);
  setUI();
};

itemsPerPageInput.addEventListener('change', () => {
  itemsPerPage = parseInt(itemsPerPageInput.value);
  index = 0;
  init();
});

btnContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('btn-container')) return;
  if (e.target.classList.contains('page-btn')) {
    index = parseInt(e.target.dataset.id);
  }
  if (e.target.classList.contains('prev-btn')) {
    index--;
    if (index < 0) {
      index = pages.length - 1;
    }
  }
  if (e.target.classList.contains('next-btn')) {
    index++;
    if (index > pages.length - 1) {
      index = 0;
    }
  }
  setUI();
});

tableHeadings.addEventListener('click', (e) => {
  sortColumnID = e.target.dataset.id;
  init();
  ascending = !ascending;
  sortArrows.forEach((item) => {
    item.style.color = '#d8d8d8';
  });
  if (!ascending) {
    e.target.children[0].children[0].style.color = '#2b2b2b';
  } else {
    e.target.children[0].children[1].style.color = '#2b2b2b';
  }
});

searchInput.addEventListener('keyup', () => {
  searchString = searchInput.value;
  init();
});

window.addEventListener('load', init);
