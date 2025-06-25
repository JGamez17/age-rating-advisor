import { Button as RadixButton } from '@radix-ui/themes';

const Button = ({ 
  children, 
  variant = 'solid', 
  color = 'primary',
  onClick,
  fullWidth = false,
  ...props 
}) => {
  const colorMap = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-purple-600 hover:bg-purple-700 text-white',
    outline: 'bg-transparent border border-blue-600 text-blue-600',
    ghost: 'bg-transparent text-blue-600 hover:bg-blue-50',
  };

  return (
    <RadixButton
      className={`rounded-xl transition-all duration-200 ${
        fullWidth ? 'w-full' : ''
      } ${colorMap[`${variant}-${color}`] || colorMap[variant]}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </RadixButton>
  );
};

export default Button;