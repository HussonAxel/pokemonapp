import { useId } from "react";
import { FaDesktop, FaLaptop, FaLayerGroup, FaMobileAlt, FaTabletAlt } from "react-icons/fa";

import { RadioGroup, RadioGroupItem } from "#/components/ui/radio-group";
import InputLabel from "../../../../components/InputLabel";

const RadioShinyMethod = ({ LabelName }) => {
  const id = useId();

  const items = [
    { value: "1", label: "Randoms Encounters", icon: FaMobileAlt },
    { value: "2", label: "Masuda", icon: FaTabletAlt, disabled: true },
    { value: "3", label: "Pokéradar", icon: FaLaptop },
    { value: "4", label: "Chain Fishing", icon: FaDesktop },
    { value: "5", label: "Soft Resets", icon: FaLayerGroup },
  ];

  return (
    <fieldset className="w-full max-w-96 space-y-4">
      <InputLabel LabelName={LabelName} />

      <RadioGroup className="grid grid-cols-3 gap-2" defaultValue="1">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <label
              key={`${id}-${item.value}`}
              className="border-input has-data-[state=checked]:border-primary/80 has-data-[state=checked]:bg-accent/40 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex flex-col items-center justify-center gap-2 rounded-md border px-2 py-3 text-center shadow-xs transition outline-none has-focus-visible:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50"
            >
              <RadioGroupItem
                id={`${id}-${item.value}`}
                value={item.value}
                className="sr-only after:absolute after:inset-0"
                aria-label={`device-radio-${item.value}`}
                disabled={item.disabled}
              />

              <Icon className="text-muted-foreground size-5 shrink-0" />

              <p className="text-foreground text-sm font-medium">{item.label}</p>
            </label>
          );
        })}
      </RadioGroup>
    </fieldset>
  );
};

export default RadioShinyMethod;
