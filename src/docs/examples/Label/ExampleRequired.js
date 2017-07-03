import React from 'react';
import Label from 'ps-react/Label';

//shortcut required={true} ==> required

/** This field is required */
export default function ExampleRequired() {
    return <Label htmlFor="test" label="test" required={true} />
}