import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ListItemPreview = ({ item }) => {
  if (!item) {
    return (
      <div className="preview">
        <h3>Bala 3nadh</h3>
        <p>Details</p>
      </div>
    );
  }
  return (
    <div className="preview">
      <h2> { item.name } </h2>
      <p>{ item.description }</p>
      <Link to={`view/${item.name}`}>
        <button type="button" className="btn btn-primary">Read More</button>
      </Link>
    </div>
  );
};

ListItemPreview.propTypes = {
  item: PropTypes.object,
};

ListItemPreview.defaultProps = {
  item: null,
};

export default ListItemPreview;
