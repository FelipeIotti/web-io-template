interface LabelProps {
  text?: string;
}

export function Label({ text }: LabelProps) {
  return text && <p className="pl-1 text-xs font-bold">{text}</p>;
}
