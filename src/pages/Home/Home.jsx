import { useState } from "react"
import Ebook from "../../Component/EBook"
import Banner from "../../Component/Shared/Header/banner/Banner"
import { useEffect } from "react"
import AdvertisementModal from "../../Component/AdvertiseMentModal"
import Offer from "./Offer"

const Home = () => {
  const [showModal, setShowModal] = useState(false)
  const targetDate = "2024-12-18T00:00:00";


  useEffect(() => {
    // Check the localStorage value and update the state
    const checkModalState = () => { 
      const isModalShown = localStorage.getItem("modal");
      if (isModalShown === "false" || !isModalShown) {
        setShowModal(true);
        localStorage.setItem("modal", "true");
      }
    };

    // Initial check on component mount
    checkModalState();
    // Set a timer to reset the localStorage value to "false" after 24 hours
    const resetTimer = setTimeout(() => {
      localStorage.setItem("modal", "false");
      checkModalState();
    }, 1000000);

    // Cleanup the timer
    return () => clearTimeout(resetTimer);
  }, [showModal]);

  return (
    <>
    <div>
      <Banner/>
    </div>
    <Offer targetDate={targetDate}/>
    <Ebook/>
    <AdvertisementModal showModal={showModal} setShowModal={setShowModal} /> 
    </>
     )
}

export default Home
