const displayButtons = (container, pages, activeIndex) => {
  let btns = pages.map((_, pageIndex) => {
    return `<button class="page-btn ${
      pageIndex === activeIndex ? 'active' : ''
    }" data-id="${pageIndex}">
${pageIndex + 1}
</button>`;
  });
  btns.push(`<button class="next-btn">next</button>`);
  btns.unshift(`<button class="prev-btn">previous</button>`);
  container.innerHTML = btns.join('');
};

export default displayButtons;
