interface ButtonProps {
  text: string;
  className?: string;
}

export default function Button({ text, className }: ButtonProps) {
  return (
    <button
      className={`font-semibold py-2 px-4 rounded-full ${className}`}
    >
      {text}
    </button>
  );
}
