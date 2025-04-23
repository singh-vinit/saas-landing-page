interface Props {
  text: string;
  classname?: string;
}

export default function Tag({ text, classname }: Props) {
  return (
    <div
      className={`px-4 py-2 w-fit rounded-full text-xs text-white font-[400] ${classname}`}
    >
      ✶ {text}
    </div>
  );
}
