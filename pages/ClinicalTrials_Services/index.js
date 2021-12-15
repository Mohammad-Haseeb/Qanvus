import Script from 'next/script';
import ClinicalTrialsFirstImageCrouselBox from './FirstCrouselImage/index';
import ClinicalCircleWithName from './ClinicalCircleWithName/index';
import ClinicalImagesGalleryWithInfo from './ClinialImageGalleryWithInfo/index';
import ProcessIcons, { LastProcessIconsBox } from './ClinalProcessIconsAndInfo/index';
import FirstIcon from './../../public/CliniclaTrials/Blue_Icon_1.png';
import SecondIcon from './../../public/CliniclaTrials/Blue_Icon_2.png';
import ThirdIcon from './../../public/CliniclaTrials/Blue_Icon_3.png';
import FourthIcon from './../../public/CliniclaTrials/Blue_Icon_4.png';
import ClinicalApplySection from './ClinicalApplySection/index';
const ClinicalTrials_Services = ({ ClinicalPageposts }) => {
  let data = ClinicalPageposts[0];
  return (
    <>
      <Script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/9087966.js"></Script>
      <ClinicalTrialsFirstImageCrouselBox
        mainImage={data["First_Carousel_Image"]}
        title={data["Clinical_Trials_Title"]}
        quote={data["Quote"]}
        quote_2={data["Quote_2"]} />
      <ClinicalCircleWithName data={data} />
      <ClinicalImagesGalleryWithInfo data={data} />
      <h1 className="ProcessTitle" style={{ textAlign: "center", fontFamily: "GothamBold", fontSize: "45px", marginTop: "80px", marginBottom: "100px" }}>Our Process</h1>
      <ProcessIcons
        name={["360 Assesment", "Strategic Roadmap"]}
        images={[FirstIcon, SecondIcon]}
      />
      <ProcessIcons
        name={["Implementation", "Refinement"]}
        images={[ThirdIcon, FourthIcon]}
      />
      <LastProcessIconsBox />
      <ClinicalApplySection />
    </>
  )
}

export async function getServersideprops() {
  const res = await fetch(`https://admin-qanvus.iiinigence.io/clinical-trials-pages`)
  const ClinicalPageposts = await res.json()
  return {
    props: {
      ClinicalPageposts
    },
  }
}

export default ClinicalTrials_Services;