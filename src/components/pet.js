import React from 'react';

const Pet = (props) => {

  return(<div className="petBox">
    <p>Name: {props.name}</p>
    {
      props.category ? 
      (<p>Category: {props.category}</p>) :
      (<></>)
    }
  </div>)
}

export default Pet;