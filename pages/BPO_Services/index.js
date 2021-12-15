import Script from 'next/script';
import BPOFirstCrouselImage from './FirstCrouselImage/index';
import BPOImagesWithName from './BPOImagesWIthInfo/index';
import BPOImagesGalleryWithInfo from './BPOImagesGalleryWithInfo/index';
import FirstIcon from './../../public/BPO/Orange_Icon_1.png';
import SecondIcon from './../../public/BPO/Orange_Icon_2.png';
import ThirdIcon from './../../public/BPO/Orange_Icon_3.png';
import FourthIcon from './../../public/BPO/Orange_Icon_4.png';
import BPOProcessIcons, { LastProcessIconsBox } from './BPO-Process-Cards/index';
import BPOApplySection from './BPOApplySection/index';
import ServicesGraphicImageComponent from '../ManagedServices/ServicesGraphicImage/index';
const BPO_Services = ({ BPOPageposts }) => {
  let data = BPOPageposts[0];
  return (
    <>
      <Script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/9087966.js"></Script>
      <BPOFirstCrouselImage mainImage={data["First_Carousel_Image"]} title={data["BPO_Title"]} quote={data["Quote"]} />
      <BPOImagesWithName data={data} />
      <BPOImagesGalleryWithInfo data={data} />
      <h1 className="ProcessTitle" style={{ textAlign: "center", fontFamily: "GothamBold", fontSize: "45px", marginTop: "80px", marginBottom: "100px" }}>Our Process</h1>
      <BPOProcessIcons
        name={["360 Assesment", "Strategic Roadmap"]}
        images={[FirstIcon, SecondIcon]}
      />
      <BPOProcessIcons
        name={["Implementation", "Refinement"]}
        images={[ThirdIcon, FourthIcon]}
      />
      <LastProcessIconsBox />
      <ServicesGraphicImageComponent />
      <BPOApplySection heading={data["Schedule_Call_heading"]} info={data["Schedule_Call_info"]} />
      {/* <h1>Managed BPO Services</h1> */}
    </>
  )
}
export async function getServersideprops() {
  const res = await fetch(`https://admin-qanvus.iiinigence.io/bpo-pages`)
  const BPOPageposts = await res.json()
  return {
    props: {
      BPOPageposts
    },
  }
}


export default BPO_Services;