import Script from 'next/script';
import FirstImageCrouselBox from './FirstCrouselImage/index';
import ImagesCards from './ImagesCard/index';
import AboutInfo from './PersonalInfo/index';
import GalleryAndInfo from './GalleryAndInfo/index';
const About = ({ AboutPageposts }) => {
    let data = AboutPageposts[0];
    return (
        <>
            <Script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/9087966.js"></Script>
            <FirstImageCrouselBox First_Carousel_Image={data["First_Carousel_Image"]} FirstLine={data["About_Title"][0]["First-Line"]} SecondLine={data["About_Title"][1]["Second-Line"]} quote={data["Quotes"]} />
            <ImagesCards imagesList={data["About_First_Page_Image_Card"]} />
            <div>
                <p className="leaderShipTitle">
                    MEET OUR LEADERSHIP
                </p>
            </div>
            <AboutInfo data={data} />
            <GalleryAndInfo Image_Gallery={data["Image_Gallery"]} heading={data["Image_Gallery_Title"]} firstInfo={data["Image_Gallery_First_Info"]} SecondInfo={data["Image_Gallery_Second_Info"]} />
            <div className="boardOfDirectorHeading" style={{ marginTop: "150px", fontSize: "40px", fontFamily: "GothamBold", textAlign: "center" }}>
                <p >
                    MEET OUR BOARD OF DIRECTORS
                </p>
            </div>
            <div className="continuedPageHeading" style={{ marginTop: "200px", marginBottom: "100px", fontWeight: "", fontSize: "40px", textAlign: "center" }}>
                <a href="/About/2" style={{ textDecoration: 'none', color: "black" }}>
                    <p >
                        (SEE CONTINUED PAGE)
                    </p>
                </a>
            </div>
            <style jsx>{`
        .leaderShipTitle{
            text-align: center;
            margin-top:60px;
            font-size:40px;
            font-weight:bold;
        }
        `}</style>
        </>
    )
}

export async function getServersideprops() {
    const res = await fetch(`https://admin-qanvus.iiinigence.io/about-pages`)
    const AboutPageposts = await res.json()
    return {
        props: {
            AboutPageposts
        },
    }
}

export default About;