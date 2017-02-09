import React from 'react';
import ListItem from './ListItem.jsx';

const ModelList = ({data,fields}) => {

  fields = fields.map((field) => {
    if(typeof field == 'string') {

      // Object Array fields
      if(field.indexOf('[') != -1) {
        return {
          name: field.split('[')[0],
          type: 'objectArray',
          property:
            {
              key: field.split('[')[1].split(']')[0].split(':')[0],
              value: field.split('[')[1].split(']')[0].split(':')[1]
            }
        }
      }

      // ObjectFields
      else if(field.indexOf('.') != -1) {

      }

      // String fields
      else {
        console.log("String Field", data,field);
        return {
          name: field
        };
      }
    }

  });

  // Iterating over the list items
  data = data.map((item,i,a) => {

    let itemReturn = [];
    // We are going to iterate over the item's properties
    for(key in item) {

      // We must check if the property is on the list of selected fields.
      for(let j=0; j<fields.length; j++) {
        if(fields[j].name == key) {

          // Now we check if the field is an objectArray field
          if(fields[j].hasOwnProperty('type') && fields[j]['type'] == 'objectArray') {

            item[key].forEach((objArrayField,i,a) => {

              if(objArrayField[fields[j].property.key] == fields[j].property.value) {
                 itemReturn.push({ value: objArrayField.value });
              }
            });

          } else {
            itemReturn.push({ value: item[key] });
          }
        }
      }
    }

    return itemReturn;

  });

  return(
    <div className="list">
      {data.map((item,index,items) => (
        <ListItem data={item} />
      ))}
    </div>
  );

};

export default ModelList;
