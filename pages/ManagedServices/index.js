import Script from 'next/script';
import ManagedServicesFirstImageCrouselBox from './FirstCrouselImage/index';
import MangedFirstCircleRowWithName from './ManagedIconsWithName/index';
import ManagedImagesGalleryWithInfo from './ManagedImageGalleryWithInfo/index';
import ManagedProcessIcons, { LastProcessIconsBox } from './ManagedProcessIconsAndInfo/index';
import FirstIcon from './../../public/ManagedServices/Red_Icon_1.png';
import SecondIcon from './../../public/ManagedServices/Red_Icon_2.png';
import ThirdIcon from './../../public/ManagedServices/Red_Icon_3.png';
import FourthIcon from './../../public/ManagedServices/Red_Icon_4.png';
import ManagedApplySection from './ManagedApplySection/index';
import ServicesGraphicImageComponent from './ServicesGraphicImage/index';
const ManagedServiceGraphics = ({ ManagedPageposts }) => {
  let data = ManagedPageposts[0]
  return (
    <>
      <Script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/9087966.js"></Script>
      <ManagedServicesFirstImageCrouselBox mainImage={data["First_Carousel_Image"]} title={data["Page_Title"]} quote={data["Quote"]} />
      <MangedFirstCircleRowWithName data={data} />
      <ManagedImagesGalleryWithInfo data={data} />
      <h1 className="ProcessTitle" style={{ textAlign: "center", fontFamily: "GothamBold", fontSize: "45px", marginTop: "80px", marginBottom: "100px" }}>Our Process</h1>
      <ManagedProcessIcons
        name={["360 Assesment", "Strategic Roadmap"]}
        images={[FirstIcon, SecondIcon]}
      />
      <ManagedProcessIcons
        name={["Implementation", "Refinement"]}
        images={[ThirdIcon, FourthIcon]}
      />
      <LastProcessIconsBox />
      <ServicesGraphicImageComponent />
      <ManagedApplySection heading={data["Schedule_Call_heading"]} details={data["Schedule_Call_info"]} />
    </>
  )
}

export async function getServersideprops() {
  const res = await fetch(`https://admin-qanvus.iiinigence.io/managed-services-pages`)
  const ManagedPageposts = await res.json()
  return {
    props: {
      ManagedPageposts
    },
  }
}

export default ManagedServiceGraphics;