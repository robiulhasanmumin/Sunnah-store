import Footer from "../Component/Shared/Footer/Footer"
import Header from "../Component/Shared/Header/Header"
import {Outlet} from "react-router-dom"

const MainLayout = () => {
  return (
    <>
      <Header/>
      <div>
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default MainLayout
