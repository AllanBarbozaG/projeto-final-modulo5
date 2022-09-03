function InputwithLabel({
  htmlFor,
  labelText,
  inputName,
  inputType,
  callback,
}) {
  return (
    <>
      <label htmlFor={htmlFor}> {labelText} </label>
      <br />
      <input onChange={callback} name={inputName} type={inputType} />
      <br />
    </>
  );
}

export default InputwithLabel;
