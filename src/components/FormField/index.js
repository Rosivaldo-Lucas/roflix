import React from 'react';

const FormField = ({ label, value, onChange, type, name }) => {
  return (
    <div>
      <label>
        {label}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default FormField;
