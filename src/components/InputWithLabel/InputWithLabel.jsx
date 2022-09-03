function InputwithLabel({htmlFor, labelText, inputName, callback}) {
  return (
    <>
      <label htmlFor={ htmlFor }> { labelText } </label><br />
      <input onChange={callback} name={ inputName } type="text" />
      <br />
    </>
  )
}

export default InputwithLabel