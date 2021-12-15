import Script from 'next/script'
import "antd/dist/antd.css";
import FirstImageWIthOverlayText from "./Components/HomePage/firstImage/index";
import TextInfo from "./Components/HomePage/TextInfo/index";
import FirstBox from "./Components/HomePage/FirstBox/index";
import CardsMainComponent from './Components/HomePage/IconAndInfo/index';
import ImagesBox from './Components/HomePage/ImgesBox/index';
import TurkeyServicesAndList from './Components/HomePage/TurnkeyServicesAndList/index';

export default function Home({ HomePageposts }) {
  let data = HomePageposts[0]
  return (
    <>
      <Script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/9087966.js"></Script>
      <FirstImageWIthOverlayText title={data.Website_Title} CrouselImage={data.First_Crousel_Image} />
      <TextInfo info={data.quote} />
      <FirstBox First_Session_with_Image={data.First_Session_with_Image} Second_Session_with_Image={data.Second_Session_with_Image} heading_One={data.First_Session_with_First_Text} info_One={data.First_Session_with_Second_Text} heading_Two={data.Second_Session_with_First_Text} info_Two={data.Second_Session_with_Second_Text} />
      <CardsMainComponent />
      <ImagesBox mainImage={data["Home_Page_Gallery"]} heading={data.Home_Page_Gallery_First_Text} info={data.Home_Page_Gallery_Second_Text} />
      <TurkeyServicesAndList data={data} />
    </>
  );
}


export async function getServersideprops() {
  const res = await fetch(`https://admin-qanvus.iiinigence.io/home-pages`)
  const HomePageposts = await res.json()
  return {
    props: {
      HomePageposts
    },
  }
}
