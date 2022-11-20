import Pagination from 'react-bootstrap/Pagination';

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

const paginationBasic = ({ handlePageChange }) => (
  <div>
    <Pagination onClick={e => handlePageChange(e.target.innerText)}>{items}</Pagination>
  </div>
);

export default paginationBasic;
