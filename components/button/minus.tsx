interface MinusButtonProps {
  disable?: boolean;
  onClick: () => void;
}

const MinusButton: React.FC<MinusButtonProps> = ({
  disable = false,
  onClick,
}) => {
  return (
    <button
      className={`flex items-center justify-center p-2 w-6 h-6 rounded-full ${
        disable ? "bg-gray-500 cursor-not-allowed" : "bg-gray-400"
      }`}
      onClick={onClick}
      disabled={disable}
    >
      -
    </button>
  );
};

export default MinusButton;
