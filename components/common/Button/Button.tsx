import { FC, ReactNode } from 'react'
import classNames from 'classnames'
import s from './Button.module.css'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string,
  children?: ReactNode,
}

const Button: FC<Props> = ({ className, children, ...rest}) => {

  return (
    <button className={classNames(s.root, className)} {...rest}>
      {children}
    </button>
  )
}

export default Button