import InputLabel from "#/components/InputLabel";
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/components/ui/number-field";

export default function Input() {
  return (
    <>
      <InputLabel LabelName={"LabelName"} />
      <NumberField defaultValue={1}>
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>
    </>
  );
}
