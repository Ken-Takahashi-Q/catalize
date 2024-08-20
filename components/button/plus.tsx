interface PlusButtonProps {
  disable?: boolean;
  onClick: () => void;
}

const PlusButton: React.FC<PlusButtonProps> = ({
  disable = false,
  onClick,
}) => {
  return (
    <button
      className={`flex items-center justify-center p-2 w-6 h-6 rounded-full ${
        disable ? "bg-gray-500 cursor-not-allowed" : "bg-green-600"
      }`}
      onClick={onClick}
      disabled={disable}
    >
      +
    </button>
  );
};

export default PlusButton;
