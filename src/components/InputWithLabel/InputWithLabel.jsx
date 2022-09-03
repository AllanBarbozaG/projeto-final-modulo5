function InputwithLabel({htmlFor, labelText, inputName}) {
  return (
    <>
      <label htmlFor={ htmlFor }> { labelText } </label><br />
      <input name={ inputName } type="text" />
    </>
  )
}

export default InputwithLabel