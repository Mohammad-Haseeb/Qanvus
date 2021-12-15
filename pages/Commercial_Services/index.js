import Script from 'next/script';
import CommercialFirstImageCrouselBox from './FirstCrouselImage/index';
import CommercialImagesWithName from './CommercialImagesWithName/index';
import CommercialImagesGalleryWithInfo from './CommercialImageGalleryWithInfo/index';
import CommercialProcessIcons, { LastProcessIconsBox } from './CommercialProcessIconsAndInfo/index';
import FirstIcon from './../../public/Commercial_Services/Purple_Icon_1.png';
import SecondIcon from './../../public/Commercial_Services/Purple_Icon_2.png';
import ThirdIcon from './../../public/Commercial_Services/Purple_Icon_3.png';
import FourthIcon from './../../public/Commercial_Services/Purple_Icon_4.png';
import CommercialApplySection from './CommercialApplySection/index';
const CommercialServices = ({ CommercialPageposts }) => {
  let data = CommercialPageposts[0];
  return (
    <>
      <Script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/9087966.js"></Script>
      <CommercialFirstImageCrouselBox mainImage={data["First_Carousel_Image"]} title={data["Page_Title"]} quote={data["Quote"]} />
      <CommercialImagesWithName data={data} />
      <CommercialImagesGalleryWithInfo data={data} />
      <h1 className="ProcessTitle" style={{ textAlign: "center", fontFamily: "GothamBold", fontSize: "45px", marginTop: "80px", marginBottom: "100px" }}>Our Process</h1>
      <CommercialProcessIcons
        name={["360 Assesment", "Strategic Roadmap"]}
        images={[FirstIcon, SecondIcon]}
      />
      <CommercialProcessIcons
        name={["Implementation", "Refinement"]}
        images={[ThirdIcon, FourthIcon]}
      />
      <LastProcessIconsBox />
      <CommercialApplySection heading={data["Schedule_Call_heading"]} details={data["Schedule_Call_info"]} />
    </>
  )
}

export async function getServersideprops() {
  const res = await fetch(`https://admin-qanvus.iiinigence.io/commercial-industrial-formulations-pages`)
  const CommercialPageposts = await res.json()
  return {
    props: {
      CommercialPageposts
    },
  }
}

export default CommercialServices;