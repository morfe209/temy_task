import React from "react";

const TextArea = ({ name, label, rows, plh, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <textarea
        rows={rows}
        {...rest}
        name={name}
        id={name}
        className="form-control"
        placeholder={plh}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default TextArea;
