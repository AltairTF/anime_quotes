type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler;
};
const Button = ({ children, className, onClick }: ButtonProps) => {
  const defaultClassName = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded';

  return (
    <button className={`${defaultClassName} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
