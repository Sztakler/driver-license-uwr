import React from 'react';

export default function Label(props) {
  const {forElement, children} = props;

  return <label for={forElement}>{children}</label>;
}
