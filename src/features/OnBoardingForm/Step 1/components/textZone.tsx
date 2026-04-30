import { useId } from "react";

import { Label } from "#/components/ui/label";
import { Textarea } from "#/components/ui/textarea";

const TextZone = () => {
  const id = useId();

  return (
    <div className="w-full space-y-2">
      <Label htmlFor={id}>Add notes</Label>
      <Textarea
        id={id}
        placeholder="Add custom notes to your hunt"
        className="focus-visible:ring-primary/20 focus-visible:border-primary/50 [resize:none]"
      />
    </div>
  );
};

export default TextZone;
