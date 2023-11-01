type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-md bg-white p-4 min-w-[200px] max-w-[400px] min-h-[200px] max-h-[400px]">
      {children}
    </div>
  );
};

export default Card;
