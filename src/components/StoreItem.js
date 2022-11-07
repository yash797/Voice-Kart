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
    
      <div className="lg:w-1/4 w-1/2 p-3">
        <div className="block relative h- rounded-xl overflow-hidden border-soild border-4 border-blue-500 border-opacity-40">
          <div className= "w-96 h-96 transition duration-1000 ease-in-out hover:-translate-y-1 hover:scale-125">
          <img
            alt="e-commerce"
            className="object-cover object-center w-full h-full block"
            src={`${item.url}`}
          /></div>
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
  )
}
