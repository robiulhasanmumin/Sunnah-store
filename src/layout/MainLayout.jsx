import Footer from "../Component/Shared/Footer/Footer"
import Header from "../Component/Shared/Header/Header"
import {Outlet} from "react-router-dom"

const MainLayout = () => {
  return (
    <div className="container ">
      <Header/>
      <div>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default MainLayout
