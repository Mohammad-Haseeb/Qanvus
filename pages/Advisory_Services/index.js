import Script from 'next/script';
import AdivrosyFirstImageCrouselBox from './FirstCrouselImage/index';
import AdvisoryFirstCircleRowWithName from './CircleWithName/index';
import AdvisoryImagesBox from './ImageGalleryWithInfo/index';
import ProcessIcons, { LastProcessIconsBox } from './ProcessIconsAndInfo/index';
import FirstIcon from './../../public/Advisory/Teal_Icon_1.png';
import SecondIcon from './../../public/Advisory/Teal_Icon_2.png';
import ThirdIcon from './../../public/Advisory/Teal_Icon_3.png';
import FourthIcon from './../../public/Advisory/Teal_Icon_4.png';
import AdvisoryApplySection from './ApplySection/index';

const AdvisoryServices = ({ AdvisoryPageposts }) => {
  let data = AdvisoryPageposts[0];

  return (
    <>
      <Script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/9087966.js"></Script>
      <AdivrosyFirstImageCrouselBox
        mainImage={data["First_Carousel_Image"]}
        title={data["Advisory_Title"]}
        quote={data["Quote"]}
      />
      <AdvisoryFirstCircleRowWithName data={data} />
      <AdvisoryImagesBox data={data} colorSetting="#00afab" />
      <h2 className="ProcessTitle" style={{ textAlign: "center", fontFamily: "GothamBold", fontSize: "40px", marginTop: "80px", marginBottom: "100px" }}>Our Process</h2>
      <ProcessIcons
        name={["360 Assesment", "Strategic Roadmap"]}
        images={[FirstIcon, SecondIcon]}
      />
      <ProcessIcons
        name={["Implementation", "Refinement"]}
        images={[ThirdIcon, FourthIcon]}
      />
      <LastProcessIconsBox />
      <AdvisoryApplySection heading={data["Schedule_Call_heading"]} details={data["Schedule_Call_info"]} />
    </>
  )
}

export async function getServersideprops() {
  const res = await fetch(`https://admin-qanvus.iiinigence.io/advisory-pages`)
  const AdvisoryPageposts = await res.json()
  return {
    props: {
      AdvisoryPageposts
    },
  }
}

export default AdvisoryServices;