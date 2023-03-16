interface InputGroupProps {
  label: string
  type: string
  id: string
  placeholder: string
  required: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputGroup: React.FC<InputGroupProps> = ({
  label,
  type,
  id,
  placeholder,
  required,
  onChange
}) => {
  return (
    <div className="flex items-center relative">
      <input
        type={type}
        id={id}
        className="peer authInput"
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />
      <label htmlFor={id} className="floatingLabel">
        {label}
      </label>
    </div>
  )
}

export default InputGroup
