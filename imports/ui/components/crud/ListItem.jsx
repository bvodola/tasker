import React from 'react';

const ListItem = ({data}) => (

  <div className="well" style={{'cursor': 'pointer'}}>
    {data.map((item, i) => (
      <div key={i}>
        <p>
          {(item.icon)?<i className="material-icons">{item.icon}</i>:''}
          {item.value}
        </p>
      </div>
    ))}

  </div>

);

export default ListItem;
