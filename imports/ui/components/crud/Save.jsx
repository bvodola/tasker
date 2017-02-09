import React, { Component } from 'react';

class Save extends Component {

  render() {

    // Assigning the fields prop to a simpler variable name
    let fields = this.props.fields;
    console.log(fields);


    return(
      <div>
        {fields.map((field,i) => {
          if(typeof field.class == 'undefined') field.class = '';

          switch(field.type){
            case('text'):
              field.class += 'form-control';
              return(
                <input type="text" name={field.name} ref={field.name} className={field.class} id={field.id} />
              );
              break;
            case('select'):
              field.class += 'form-control';
              return(
                <select name={field.name} ref={field.name} className={field.class} id={field.id}>
                  {field.options.map((o, i) => (
                    <option key={i} value={o.value}>{o.name}</option>
                  ))}
                </select>
              );
              break;
          }
        })}
      </div>
    );
  }
}

export default Save;
