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
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant,
  onClick,
  disabled
}) => {
  const base =
    'rounded-full outline-none transition-all duration-100 ease-in-out'

  return (
    <button
      className={`${base} ${disabled && 'buttonDisabled'}
      ${
        variant?.solid &&
        `bg-link-500 text-white border-none font-body font-bold text-sm
         hover:bg-link-500/80 w-20 lg:w-28 py-1.5`
      }

      ${
        variant?.brand &&
        `bg-brand-500 text-white border-none font-title font-bold text-sm md:px-5 lg:px-8 py-1.5 hover:bg-brand-500/90}`
      }

      ${
        variant?.outline &&
        `bg-white hidden md:block text-link-500 border border-link-500 md:px-5 lg:px-8 py-1 text-sm
        hover:bg-link-100/25 font-body
        font-bold`
      }
      ${
        variant?.oauth &&
        `relative flex h-9 w-full cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-transparent px-4 font-title font-medium text-sm text-soft-gray-500 outline-none transition-all duration-300 hover:border-blue-200 hover:bg-lighest-blue-500/10`
      } `}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
