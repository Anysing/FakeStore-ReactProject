import ViewcartBody from "./ViewcartBody"
import ViewcartSidebar from "./ViewcartSidebar"

const Viewcart = () => {
  return (
    <>
    <div className="flex">
        <ViewcartBody />
      <div>
        <ViewcartSidebar/>
      </div>
    </div>
    </>
  )
}

export default Viewcart