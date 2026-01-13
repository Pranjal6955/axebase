"use client";

import * as React from "react";
import type * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

/**
 * Wraps form field parts in a container and provides a stable unique id via context.
 *
 * The provided id is exposed through FormItemContext for descendant components to build
 * accessible relationships (e.g., label, control, description, message). Renders a div
 * with data-slot="form-item" and merges the provided `className` with default layout classes.
 *
 * @param className - Additional CSS classes to apply to the container
 * @param props - Remaining div props are forwarded to the rendered container
 * @returns A div element that serves as the form item wrapper and context provider
 */
function FormItem({ className, ...props }: React.ComponentProps<"div">) {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        data-slot="form-item"
        className={cn("grid gap-2", className)}
        {...props}
      />
    </FormItemContext.Provider>
  );
}

/**
 * Renders a form label tied to the current form field and applies error-dependent styling.
 *
 * The rendered label is linked to the field's control via `htmlFor`, includes `data-slot="form-label"` and
 * `data-error` attributes, and merges any passed `className` with error styling.
 *
 * @returns A `Label` element associated with the field id and annotated for error state and layout slots.
 */
function FormLabel({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  const { error, formItemId } = useFormField();

  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={cn("data-[error=true]:text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
}

/**
 * Renders a Radix Slot as the form control and wires the field's accessibility attributes and error state.
 *
 * For a field with no error, `aria-describedby` references the description id; when an error exists, it also includes the message id. `aria-invalid` is set when the field has an error.
 *
 * @param props - Props forwarded to the underlying Slot component
 * @returns The Slot element configured as the form control with appropriate ids and ARIA attributes
 */
function FormControl({ ...props }: React.ComponentProps<typeof Slot>) {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
}

/**
 * Renders the form field's helper/description text and wires it to the form's accessibility IDs.
 *
 * The element receives an `id` derived from the surrounding FormItem/FormField context so it can be referenced
 * by form controls via `aria-describedby`. It also sets `data-slot="form-description"` and applies muted small-text styling.
 *
 * @param className - Optional additional CSS classes to apply to the paragraph
 * @returns The paragraph element used as the form description
 */
function FormDescription({ className, ...props }: React.ComponentProps<"p">) {
  const { formDescriptionId } = useFormField();

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

/**
 * Renders the field's error message or provided children inside a paragraph, or nothing when there is no message.
 *
 * @param props - Props passed to the paragraph element; `children` is used when the field has no error message.
 * @returns The paragraph element containing the message with error styling and the field message id, or `null` if there is no message to render.
 */
function FormMessage({ className, ...props }: React.ComponentProps<"p">) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : props.children;

  if (!body) {
    return null;
  }

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={cn("text-destructive text-sm", className)}
      {...props}
    >
      {body}
    </p>
  );
}

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};