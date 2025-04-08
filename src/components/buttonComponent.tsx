import React from 'react'

type ButtonProps = {
    className: string;
    children: React.ReactNode;
    }

const Button = ({className='', children}: ButtonProps) => {
    return (
        <button className={`button ${className}`}>{children}</button>
    )
}

export default Button