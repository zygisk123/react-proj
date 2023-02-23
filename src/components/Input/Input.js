
const Input = (props) => {

    return (<input
        type={props.type}
        name={props.name}
        accept={props.accept}
        onChange={props.onChange} />);
}

export default Input;