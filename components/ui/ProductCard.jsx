"use client";

import React from "react";
import Button from "./Button";

/**
 * ProductCard — e-commerce product display card
 * @param {object} props
 * @param {string} props.image
 * @param {string} props.title
 * @param {string} props.description
 * @param {string|number} props.price
 * @param {string} props.badge      optional badge text e.g. "New", "Sale"
 * @param {function} props.onAddToCart
 */
export default function ProductCard({
  image = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
  title = "Premium Product",
  description = "A beautifully crafted item that fits seamlessly into your lifestyle.",
  price = "99.00",
  badge = "",
  onAddToCart,
}) {
  return (
    <article className="group relative flex flex-col w-72 rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-100 dark:border-slate-700">
      {/* Image */}
      <div className="relative overflow-hidden h-52 bg-slate-100 dark:bg-slate-700">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {badge && (
          <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow">
            {badge}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Title */}
        <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3 flex-1">
          {description}
        </p>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-100 dark:border-slate-700">
          <span className="text-xl font-extrabold text-indigo-600 dark:text-indigo-400">
            ${price}
          </span>
          <Button variant="primary" onClick={onAddToCart}>
            Add to Cart
          </Button>
        </div>
      </div>
    </article>
  );
}
