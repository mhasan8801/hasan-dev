const Input = ({type,placeholder}) => {
  return (
    <input
      type={type}
      className="form-control"
      id="exampleFormControlInput1"
      placeholder={placeholder}
      style={{margin:'1rem 0'}}
    />
  );
};

export default Input;
