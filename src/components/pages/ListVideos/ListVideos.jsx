import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// API's
import { getVideoList } from '../../../services/videoList';
// Components
import VideoCatTable from '../../VideoCatTable';
import Pagination from '../../Pagination';
import VideoCatInputField from '../../VideoCatInputField';
import SearchFilters from '../../SearchFilters';
const columnNames = ['', 'Title', 'Year', 'Type'];

const ListVideos = () => {
  const [videoList, setvideoList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    handleGetVideos(undefined, page);
  }, [page]);

  const handleGetVideos = async (search, pageValue) => {
    let list = await getVideoList(search, pageValue);
    setvideoList(list);
    console.log(list);
    return list;
  };

  const handlePageChange = value => {
    setPage(value);
  };

  const handleSerachValuehange = value => {
    if (value) {
      handleGetVideos(value, 1);
    } else {
      handleGetVideos('american', 1);
    }
  };

  return (
    <div>
      <h1>Video Catalog</h1>
      <hr />
    <div>
      <Row className=''>
        <Col xs lg='2'>
          <Pagination handlePageChange={handlePageChange} />
        </Col>
        <Col md='6'>
          <VideoCatInputField handleSerachValuehange={handleSerachValuehange} />
        </Col>
        <Col xs lg='4'>
          <SearchFilters />
        </Col>
      </Row>
      <VideoCatTable column={columnNames} data={videoList} />
    </div>    
    </div>
  );
};

export default ListVideos;
