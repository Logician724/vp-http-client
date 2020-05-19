import React from 'react';

const HTTPButton = (props) => (
  <div className='btn btn-primary mb-3 col-7' onClick={() => props.clickHandler(props.type)}>
    <div className='row align-items-center'>
      <div className='col-4'>HTTP</div>
      <div className='col-8'>
        <div className='form-control'>{props.type}</div>
      </div>
    </div>
  </div>
);

export default HTTPButton;
