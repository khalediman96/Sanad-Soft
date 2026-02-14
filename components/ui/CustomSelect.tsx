"use client";

import { Listbox } from "@headlessui/react";
import { HugeIcon, type IconName } from "./HugeIcon";
import { cn } from "@/lib/utils";

export interface SelectOption {
  value: string;
  label: string;
}

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function CustomSelect({
  value,
  onChange,
  options,
  placeholder = "Select an option",
  disabled = false,
  className,
}: CustomSelectProps) {
  const selectedLabel = options.find((opt) => opt.value === value)?.label;

  return (
    <Listbox value={value} onChange={onChange} disabled={disabled}>
      <div className={cn("relative", className)}>
        <Listbox.Button
          className={cn(
            "w-full px-4 py-3 bg-slate-900/50 border border-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-slate-900 transition-all text-white text-left flex items-center justify-between",
            disabled && "opacity-50 cursor-not-allowed"
          )}
        >
          <span className={!selectedLabel ? "text-gray-400" : ""}>
            {selectedLabel || placeholder}
          </span>
          <HugeIcon
            name="chevron-down"
            size={18}
            className="text-gray-400 flex-shrink-0"
          />
        </Listbox.Button>

        <Listbox.Options className="absolute z-50 w-full mt-2 bg-slate-900/95 border border-primary/30 rounded-xl backdrop-blur-sm shadow-lg overflow-hidden">
          {options.map((option) => (
            <Listbox.Option
              key={option.value}
              value={option.value}
              className={({ active, selected }) =>
                cn(
                  "px-4 py-3 cursor-pointer transition-colors text-white",
                  active || selected
                    ? "bg-primary/40"
                    : "hover:bg-primary/20"
                )
              }
            >
              {({ selected }) => (
                <div className="flex items-center justify-between">
                  <span>{option.label}</span>
                  {selected && (
                    <HugeIcon name="check" size={18} className="text-primary" />
                  )}
                </div>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
}

export default CustomSelect;
