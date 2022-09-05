function InputwithLabel({
  htmlFor,
  labelText,
  inputName,
  inputType,
  callback,
  value
}) {
  return (
    <>
      <label htmlFor={htmlFor}> {labelText} </label>
      <br />
      <input onChange={callback} value={value} name={inputName} type={inputType} />
      <br />
    </>
  );
}

export default InputwithLabel;
