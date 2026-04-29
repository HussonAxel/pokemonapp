import { Info } from "lucide-react";

interface InputLabelProps {
  LabelName: string;
}

export default function InputLabel({ LabelName }: InputLabelProps) {
  return (
    <label className="flex items-center gap-2 text-xs font-semibold tracking-wider whitespace-nowrap text-[#808080] uppercase transition-colors dark:text-[#6C6C6C]">
      {LabelName} <Info size={14} className="opacity-50" />
    </label>
  );
}
