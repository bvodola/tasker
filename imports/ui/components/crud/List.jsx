import React from 'react';
import ListItem from './ListItem.jsx';

const List = ({data}) => (
  <div className="list">
      {data.map((item,i) => (
        <ListItem key={i} data={item} />
      ))}
  </div>
);

export default List;
