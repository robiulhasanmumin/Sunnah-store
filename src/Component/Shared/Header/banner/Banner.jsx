import { Carousel } from "@material-tailwind/react"
import img1 from "../../../../assets/cover/img1.png"
import img2 from "../../../../assets/cover/img2.png"
import img3 from "../../../../assets/cover/img3.png"
import BannerImg from "./BannerImg"

const Banner = () => {
  return (
    <Carousel
     className="h-[400px] my-6 "
     autoPlay
     autoplayDelay={4000}
     loop={true}
    >
      <BannerImg src={img1} alt={img1}/>
      <BannerImg src={img2} alt={img2}/>
      <BannerImg src={img3} alt={img3}/>
    </Carousel>
  )
}

export default Banner
