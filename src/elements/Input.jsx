import Paragraph from "./Paragraph";
import Title from "./Title";

const Input = ({type, label, id, placeholder, value, onChangeText}) => {
  return (
    <>
    <Paragraph>{label}</Paragraph>
    <input
      type={type}
      name={label}
      id={id ? id : ''}
      placeholder={placeholder ? placeholder : ''}
      style={{margin:'0.5rem 0'}}
      className="form-control"
      value={value ? value : ''}
      onChange={onChangeText ? onChangeText : ''}
    />
    </>
  );
};

export default Input;
