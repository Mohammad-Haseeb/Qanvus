import Script from 'next/script';
import ServicesFirstImageCrouselBox from './FirstCrouselImage/index';
import FacilityDesignFirstCircleRowWithName from './FacilityCircleWithName/index';
import FacilityDesignImagesGalleryWithInfo from './FacilityImageGalleryWithInfo/index';
import FacilityDesignProcessIcons, { LastProcessIconsBox } from './FacilityProcessIconsAndInfo/index';
import FirstIcon from './../../public/FacilityAndDesignServices/Green_Icon_1.png';
import SecondIcon from './../../public/FacilityAndDesignServices/Green_Icon_2.png';
import ThirdIcon from './../../public/FacilityAndDesignServices/Green_Icon_3.png';
import FourthIcon from './../../public/FacilityAndDesignServices/Green_Icon_4.png';
import FacilityApplySection from './FacilityApplySection/index';
const FacilityAndDesignServices = ({ FacilityPageposts }) => {
  let data = FacilityPageposts[0];
  return (
    <>
      <ServicesFirstImageCrouselBox mainImage={data["First_Carousel_Image"]} title={data["Page_Title"]} quote={data["Quote"]} />
      <FacilityDesignFirstCircleRowWithName data={data} />
      <FacilityDesignImagesGalleryWithInfo data={data} />
      <h1 className="ProcessTitle" style={{ textAlign: "center", fontFamily: "GothamBold", fontSize: "45px", marginTop: "80px", marginBottom: "100px" }}>Our Process</h1>
      <FacilityDesignProcessIcons
        name={["360 Assesment", "Strategic Roadmap"]}
        images={[FirstIcon, SecondIcon]}
      />
      <FacilityDesignProcessIcons
        name={["Implementation", "Refinement"]}
        images={[ThirdIcon, FourthIcon]}
      />
      <LastProcessIconsBox />
      <FacilityApplySection heading={data["Schedule_Call_heading"]} details={data["Schedule_Call_info"]} />

    </>
  )
}

export async function getServersideprops() {
  const res = await fetch(`https://admin-qanvus.iiinigence.io/facility-design-and-optimization-pages`)
  const FacilityPageposts = await res.json()
  return {
    props: {
      FacilityPageposts
    },
  }
}


export default FacilityAndDesignServices;