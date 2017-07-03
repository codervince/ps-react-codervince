import React from 'react';
import TextInput from 'ps-react/TextInput';

/** Textarea  */
export default class ExampleError extends React.Component {
  render() {
    return (
      <TextInput
        htmlId="example-optional"
        label="First Name"
        name="firstname"
        type="textarea"
        rows={10}
        cols={50}
        onChange={() => {}}
       />
    )
  }
}