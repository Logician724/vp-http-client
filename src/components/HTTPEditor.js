import React from 'react';
import styles from './HTTPEditor.module.css';
const HTTPEditor = (props) => (
  <div className={`${styles.editorWidth} btn btn-primary text-white mb-3`}>
    <div className='row align-items-center'>
      <div className='col-2'>HTTP</div>
      <div className={props.type === 'GET' ? 'col-3' : 'col-2'}>
        <div className='form-control'>{props.type}</div>
      </div>
      <div className={props.type === 'GET' ? 'col-7' : 'col-4'}>
        <input
          placeholder='Request URL'
          type='text'
          className='form-control'
          value={props.url}
          onChange={(event) =>
            props.URLChangeHandler(event, props.id)
          }
        ></input>
      </div>
      {props.type !== 'GET' ? (
        <div className='col-4'>
          <textarea
            placeholder='JSON Body'
            className='form-control'
            rows='1'
            value={props.body}
            onChange={(event) =>
              props.bodyChangeHandler(event, props.id)
            }
          />
        </div>
      ) : null}
    </div>
  </div>
);
export default HTTPEditor;
