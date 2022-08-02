const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav aria-label="Page navigation example" className="full-pagi">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link pvr" href="#">
            Previous
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li className="page-item">
            <a className="page-link" href="#!" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}

        <li className="page-item">
          <a className="page-link pvr" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
