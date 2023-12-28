import { useRef } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../store/store.ts";

import CartModal from "./CartModal.js";

export default function Header() {
  const modal = useRef<HTMLDialogElement>(null);

  const cart = useSelector((state: RootState) => state.shop.cart);

  const cartQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  function handleOpenCartClick() {
    modal.current?.showModal();
  }

  let modalActions = (
    <button className="px-4 py-1 rounded-xl text-lg hover:scale-105 duration-200">
      Close
    </button>
  );

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button className="px-4 py-1 rounded-xl text-lg hover:scale-105 duration-200">
          Close
        </button>
        <button className="bg-amber-200 hover:bg-amber-300 duration-200 text-amber-950 px-4 py-1 rounded-xl text-lg">
          Checkout
        </button>
      </>
    );
  }

  return (
    <>
      <CartModal ref={modal} title="Your Cart" actions={modalActions} />
      <header className="flex justify-between items-center max-w-5xl mx-auto py-8 px-4 lg:px-0">
        <div className="flex items-center gap-8">
          <img
            src="logo.png"
            alt="Elegant model"
            className="hidden sm:inline-block sm:w-20 lg:w-24"
          />
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-amber-300">
            Elegant Redux/toolkit
          </h1>
        </div>
        <p>
          <button
            onClick={handleOpenCartClick}
            className="bg-amber-300 px-4 py-2 rounded-xl text-xl hover:bg-amber-400 duration-200"
          >
            Cart ({cartQuantity})
          </button>
        </p>
      </header>
    </>
  );
}
