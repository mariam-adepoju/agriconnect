import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";
import type { ReactNode } from "react";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type SelectOption = {
  value: string;
  label: string;
};

type FormFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label: ReactNode | string;
  type?: string; // text, number, password, email...
  options?: SelectOption[]; // select dropdown options
};

export function FormField<T extends FieldValues>({
  control,
  name,
  label,
  type = "text",
  options,
}: FormFieldProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Field className="">
          <FieldLabel className="mb!-1">{label}</FieldLabel>

          {/* If select options exist → render SELECT */}
          {options ? (
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
              aria-invalid={fieldState.invalid}
            >
              <SelectTrigger className="w-[280px] bg-white border-secondary ">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {options.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : (
            <Input
              {...field}
              type={type}
              aria-invalid={fieldState.invalid}
              value={field.value ?? ""}
              className="mt!-1 bg-white border-secondary focus-visible:ring-secondary/50"
              autoComplete="off"
            />
          )}
          {fieldState.error && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
