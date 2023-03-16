import Image from 'next/image'

interface InputGroupProps {
  label: string
  type: string
  id: string
  placeholder: string
  required: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  value?: string
  error?: string
  isValid?: boolean
  dirty?: boolean
}

const InputGroup: React.FC<InputGroupProps> = ({
  label,
  type,
  id,
  placeholder,
  required,
  onChange,
  value,
  error,
  isValid,
  dirty
}) => {
  return (
    <>
      <div className="flex items-center relative">
        <input
          type={type}
          id={id}
          className={`peer authInput ${error && 'inputInvalid'}
          ${!error && dirty && 'inputValid'}`}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          value={value}
        />
        <label htmlFor={id} className="floatingLabel">
          {label}
        </label>
        {!error && dirty && (
          <div className="h-3 w-3 absolute right-5">
            <Image
              src="/images/verified.svg"
              alt="Input valid icon"
              fill
              className="object-contain"
            />
          </div>
        )}
      </div>

      {error && (
        <span className="text-error-500 text-xs font-medium pl-4 !mt-2">
          {error}
        </span>
      )}
    </>
  )
}

export default InputGroup
