import React from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';

//doesnot need state children optional

/** Text input with integrated label to enforce consistency in layout, error display, label placement, and required field marker. */
function TextInput({htmlId, name, label, type = "text",rows=1, cols=1, required = false, onChange, placeholder, value, error, children, ...props}) {
  let isTextArea = type ==="textarea"? true:false;
  if (isTextArea){
            return (
                <div style={{marginBottom: 16}}>
                <Label htmlFor={htmlId} label={label} required={required} />
                
                <textarea
                    id={htmlId}
                    type={type}
                    name={name}
                    rows={rows}
                    cols={cols}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    style={error && {border: 'solid 1px red',  autofocus: true}}
                    {...props}/>
                    {children}
                {error && <div className="error" style={{color: 'red'}}>{error}</div>}
                </div>
            );
  } else {
  return (
                    <div style={{marginBottom: 16}}>
                    <Label htmlFor={htmlId} label={label} required={required} />
                    
                    <input
                        id={htmlId}
                        type={type}
                        name={name}

                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        style={error && {border: 'solid 1px red'}}
                        {...props}/>
                        {children}
                    {error && <div className="error" style={{color: 'red'}}>{error}</div>}
                    </div>
  );

  }

};

TextInput.propTypes = {
  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
  htmlId: PropTypes.string.isRequired,

  /** Input name. Recommend setting this to match object's property so a single change handler can be used. */
  name: PropTypes.string.isRequired,

  /** Input label */
  label: PropTypes.string.isRequired,

  /** Input type */
  type: PropTypes.oneOf(['text', 'number', 'password', 'textarea']),

  /** Input rows optional */
  rows: PropTypes.number,

  /** Input cols optional */
  cols: PropTypes.number,

  /** Mark label with asterisk if set to true */
  required: PropTypes.bool,

  /** Function to call onChange */
  onChange: PropTypes.func.isRequired,

  /** Placeholder to display when empty */
  placeholder: PropTypes.string,

  /** Value */
  value: PropTypes.any,

  /** String to display when error occurs */
  error: PropTypes.string,

  /** Child component to display next to the input */
  children: PropTypes.node
};

export default TextInput;