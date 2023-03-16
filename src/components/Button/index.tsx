interface Variant {
  solid: ''
  outline: 'bg-white text-link-500 border border-link-500'
  oauth: 'font-title font-medium text-gray-300 border border-gray-300 bg-white hover:bg-link-300 hover:border-link-300'
}

interface IVariant {
  solid?: boolean
  outline?: boolean
  oauth?: boolean
  brand?: boolean
}

interface ButtonProps {
  text: string
  variant?: IVariant
  onClick?: () => void
  disabled?: boolean
  type?: 'submit' | 'button'
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant,
  onClick,
  disabled,
  type
}) => {
  return (
    <button
      type={type}
      className={`buttonBase
      ${disabled && 'buttonDisabled'}
      ${variant?.solid && `buttonSolid`}
      ${variant?.brand && 'buttonBrand'}
      ${variant?.outline && 'buttonOutline'}
      ${variant?.oauth && 'buttonOAuth'} `}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
