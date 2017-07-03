import React from 'react';
import ProgressBar from 'ps-react/ProgressBar';

// what am I hardcoding that should be configurable?//
//Starting rigid!

/** 70% progress */
export default function Ex100PercentHeight20px() {
    return <ProgressBar percent={100} width={150} height={20} />
}