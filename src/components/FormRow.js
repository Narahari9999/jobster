const FormRow = ({ name, type, labelText, value, handleChange }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className='form-input'
      />
    </div>
  );
};

export default FormRow;
