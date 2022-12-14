import StoreItem from "./StoreItem"

export default function Store({ items }) {
  return (
    <section className="store text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap ">
          {items.map(item => (
            <StoreItem key={item.id} item={item}/>
          ))}
        </div>
      </div>
    </section>
  )
}
