import Script from 'next/script';
import AuditFirstImageCrouselBox from './FirstCrouselImage/index';
import AuditFirstCircleRowWithName from './CircleWithName/index';
import AuditImagesBox from './ImageGalleryWithInfo/index';
import FirstIcon from './../../public/AuditAndControl/Yellow_Icon_1.png';
import SecondIcon from './../../public/AuditAndControl/Yellow_Icon_2.png';
import ThirdIcon from './../../public/AuditAndControl/Yellow_Icon_3.png';
import FourthIcon from './../../public/AuditAndControl/Yellow_Icon_4.png';
import ProcessIcons, { LastProcessIconsBox } from './ProcessCards/index';
import AuditApplySection from './AuditApplySection/index';

const AuditAndControlServices = ({ AuditPageposts }) => {
  let data = AuditPageposts[0];
  return (
    <>
      <Script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/9087966.js"></Script>
      <AuditFirstImageCrouselBox mainImage={data["First_Carousel_Image"]} title={data["Audit_Control_Title"]} quote={data["Quote"]} />
      <AuditFirstCircleRowWithName data={data} />
      <AuditImagesBox
        data={data}
        colorSetting="#ffbd00" />
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
      <AuditApplySection heading={data["Schedule_Call_heading"]} info={data["Schedule_Call_info"]} />
    </>
  )
}
export async function getServersideprops() {
  const res = await fetch(`https://admin-qanvus.iiinigence.io/audit-control-pages`)
  const AuditPageposts = await res.json()
  return {
    props: {
      AuditPageposts
    },
  }
}


export default AuditAndControlServices;