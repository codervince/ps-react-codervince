import React from 'react';
import TextInput from 'ps-react/TextInput';

/** Required TextBox with Placeholder */
export default class ExampleError extends React.Component {
  render() {
    return (
      <TextInput
        htmlId="example-optional"
        label="First Name"
        name="firstname"
        placeholder="Enter your name here"
        onChange={() => {}}
       />
    )
  }
}
