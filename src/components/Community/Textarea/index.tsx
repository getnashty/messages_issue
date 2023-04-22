import React, { ChangeEvent, forwardRef, TextareaHTMLAttributes } from "react";
import "./styles.css";

interface GenericTextarea
  extends Omit<TextareaHTMLAttributes<any>, "onChange"> {
  onChange?: (
    e: ChangeEvent,
    { name, value }: { name: string; value: string | number }
  ) => void;
}

export const Textarea = forwardRef<HTMLTextAreaElement, GenericTextarea>(
  ({ onChange, onKeyDown, ...props }, ref) => {
    return (
      <textarea
        {...props}
        ref={ref}
        onChange={(e) => {
          if (onChange) {
            const { name = "input" } = props;
            onChange(e, { name, value: e.target.value });
          }
        }}
        onKeyDown={(e) => {
          // We don't want any input
          // to trigger a keyboard shortcut
          // these are all using keydown listeners
          if (e.key !== "Escape") {
            e.stopPropagation();
          }

          if (onKeyDown) {
            onKeyDown(e);
          }
        }}
      />
    );
  }
);
