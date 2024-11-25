import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
    const { label,name,placeholder,type,className } = props;
    return (
        <div className="mb-6">
            <Label htmlFor={name}>{label}</Label>
            <Input
                type={type}
                name={name}
                placeholder={placeholder}
                id={name}
                classname={`${className}`}
            />
        </div>
    );
};
export default InputForm;