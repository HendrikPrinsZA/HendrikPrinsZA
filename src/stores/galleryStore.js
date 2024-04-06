import { atom, map } from "nanostores";

export const counter = atom(0);

export function incrementCounter() {
  console.log(`Counter is ${counter.get()}`);
  counter.set(counter.get() + 1);
}

/**
 * @typedef {Object} CartItem
 * @property {string} id
 * @property {string} name
 * @property {string} imageSrc
 * @property {number} quantity
 */

/** @type {import('nanostores').MapStore<Record<string, CartItem>>} */
export const cartItems = map({});
