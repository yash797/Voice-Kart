import { useState } from "react"
import formatCurrency from "../util/formatCurrency"
import StoreItemModal from "./StoreItemModal"

export default function StoreItem({ item }) {
  const [open, setOpen] = useState(false)

  function openModal() {
    setOpen(true)
  }

  function closeModal() {
    setOpen(false)
  }

  return (
    <>
      <div className="   justify-center w-1/4 px-6 ">
        <div className="block mt-12  relative rounded-xl overflow-hidden   ">
          <div className="w-80 h-80 transition duration-1000 ease-in-out hover:-translate-y-1 hover:scale-105">
            <img
              alt="e-commerce"
              className="object-cover object-center w-full h-full block "
              src={`${item.url}`}
            />
          </div>
        </div>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <h3 className="text-gray-500 text-xs tracking-widest title-font uppercase mb-1">
              {item.category}
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              {item.name}
            </h2>
            <p className="mt-1">{formatCurrency(item.priceCents / 100)}</p>
          </div>
          <button
            onClick={openModal}
            className="text-white py-2 px-4 text-lg bg-purple-500 rounded hover:bg-purple-700"
          >
            Details
          </button>
        </div>
      </div>
      <StoreItemModal item={item} open={open} closeModal={closeModal} />
    </>
  );
}
