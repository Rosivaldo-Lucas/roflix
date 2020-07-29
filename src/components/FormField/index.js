import React from 'react';

const FormField = ({ label, value, onChange, type, name }) => {
  return (
    <div>
      <label>
        {label}
        {type === 'textarea'
          ? (
              <textarea
                name={name}
                value={value}
                onChange={onchange}
              />
            )
          : (
              <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
              />
            )
        }
      </label>
    </div>
  );
};

export default FormField;
