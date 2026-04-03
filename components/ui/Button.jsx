"use client";

import React from "react";

/**
 * Button — primary UI action component
 * @param {object} props
 * @param {"primary"|"secondary"} props.variant
 * @param {boolean} props.disabled
 * @param {boolean} props.loading
 * @param {function} props.onClick
 * @param {React.ReactNode} props.children
 */
export default function Button({
  variant = "primary",
  disabled = false,
  loading = false,
  onClick,
  children = "Button",
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 select-none";

  const variants = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95 focus:ring-indigo-500 shadow-md hover:shadow-indigo-300/50 hover:shadow-lg",
    secondary:
      "border-2 border-indigo-600 text-indigo-600 bg-transparent hover:bg-indigo-50 active:scale-95 focus:ring-indigo-400",
  };

  const disabledStyles =
    "opacity-50 cursor-not-allowed pointer-events-none shadow-none";

  return (
    <button
      type="button"
      onClick={!disabled && !loading ? onClick : undefined}
      disabled={disabled || loading}
      className={`${base} ${variants[variant] ?? variants.primary} ${
        disabled || loading ? disabledStyles : ""
      }`}
      aria-disabled={disabled || loading}
    >
      {loading && (
        <svg
          className="h-4 w-4 animate-spin text-current"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      {children}
    </button>
  );
}
