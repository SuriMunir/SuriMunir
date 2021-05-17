const paginate = (data, itemsPerPage) => {
  const perPage = itemsPerPage;
  const numberOfPages = Math.ceil(data.length / perPage);
  const perPageData = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * perPage;
    return data.slice(start, start + perPage);
  });
  return perPageData;
};

export default paginate;
