'use client';
import React from "react";
import '@/styles/button.scss';


interface ButtonProps {
    title: string;
    onClick?: () => void;
    isLoading?: boolean;
};

const Button = ({ title, isLoading }: ButtonProps) => {
    return (
        <>
            <button type={"submit"} disabled={isLoading}>
                {title}
            </button>
        </>
    )
}

export default Button