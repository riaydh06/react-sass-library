import React from "react";

interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return <button className="p-5">{label}</button>;
};

export default Button;
