"use client";

import React from "react";

/**
 * Input — styled text/password input field
 * @param {object} props
 * @param {string} props.placeholder
 * @param {boolean} props.disabled
 * @param {"text"|"password"|"email"|"number"} props.type
 * @param {string} props.label
 * @param {string} props.value
 * @param {function} props.onChange
 */
export default function Input({
  placeholder = "Type something…",
  disabled = false,
  type = "text",
  label = "",
  value,
  onChange,
}) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {label}
        </label>
      )}
      <div className="relative">
        {/* Left icon — lock for password, search for text */}
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
          {type === "password" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          )}
        </span>

        <input
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={onChange}
          className={[
            "w-full rounded-lg border pl-10 pr-4 py-2.5 text-sm text-slate-800",
            "dark:text-slate-100 dark:bg-slate-800 dark:border-slate-600",
            "placeholder:text-slate-400 dark:placeholder:text-slate-500",
            "transition-all duration-200",
            "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",
            disabled
              ? "bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed opacity-60"
              : "bg-white border-slate-300 hover:border-slate-400",
          ].join(" ")}
          aria-disabled={disabled}
        />
      </div>
    </div>
  );
}
