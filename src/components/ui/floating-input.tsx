import { cn } from "#/lib/utils";
import { Info } from "lucide-react";
interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}



export function FloatingInput({ className }: FloatingInputProps) {

  return (
    <div className="relative">
      <label className="flex items-center gap-2 py-2 text-xs font-semibold tracking-wider whitespace-nowrap text-[#808080] uppercase transition-colors dark:text-[#6C6C6C]">
        Hunt Name <Info size={14} className="opacity-50" />
      </label>
      <input
        className={cn(
          "peer w-full px-4 py-3 border rounded-lg bg-transparent outline-none",
          "border-border focus:border-primary transition-colors",
          className
        )}
        placeholder="Salamence #2"
      />
    </div>
  );
}