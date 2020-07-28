import React from 'react';

const ButtonLink = (props) => {
  return (
    <a href={props.href} className={props.className}>
      <span>{props.children}</span>
    </a>
  );
};

export default ButtonLink;
