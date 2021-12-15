import Script from 'next/script';
import { Col, Button } from 'antd';
import FirstImageBoxCrousel from './FirstImageCrousal/index';
import MainTextInfoBox from './TextInformationBox/index';
import CarrerImgePreviewAndInfoBox from './ImagePreviewBox/index';
import InfoBoxCards from './InfoBoxCards/index';
import LogosWithInfo from './LogoWithInfo/index';

const Career = ({ CareerPageposts }) => {
    let data = CareerPageposts[0];
    return (
        <>
            <Script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/9087966.js"></Script>
            <FirstImageBoxCrousel ImageUrl={data.First_Carousel_Image} info={data.Carrer_Title} />
            <MainTextInfoBox First_quote={data.Quote_First} Second_quote={data.Quote_Second} Third_quote={data.Quote_Third} />
            <CarrerImgePreviewAndInfoBox imageScource={data.First_Session_Career_Image} info={data.First_Session_Career_Info} headingTitle={data.First_Session_Career_Heading} />
            <InfoBoxCards imagesSource={data.Cards_image} data={data} />
            <LogosWithInfo />
            <CarrerApplySection heading={data["Apply_heading"]} info={data["Apply_info"][0]["Para"]} />
        </>
    )
}

export const CarrerApplySection = ({ heading, info }) => {
    return (
        <>
            <div className="mainCarreerApplySection">
                <Col align="center">
                    <h1 className="mainCarrerApplyHeading" style={{ fontFamily: "GothamBold" }}>
                        {heading}
                    </h1>
                    <p className="mainCarrerApplyParagraph">
                        {info}
                    </p>
                    <div>
                        <Button
                            size="large"
                            style={{
                                width: "300px",
                                height: "80px",
                                border: "2px solid white",
                                marginTop: "",
                                color: "white",
                                fontSize: "25px",
                                fontWeight: "bold",
                                backgroundColor: "black",
                                marginLeft: "10px"
                            }}
                            shape="round">
                            APPLY NOW
                        </Button>
                    </div>
                </Col>
            </div>
            <style jsx>{`
        .mainCarreerApplySection{
            background-color:black;
            padding:90px 0px;
        }
        .mainCarrerApplyHeading{
            text-align:center;
            font-weight: bold;
            color:white;
            font-size:40px;
            // font-family:Gotham;
        }
        .mainCarrerApplyParagraph{
            color:white;
            font-size:34px;
            padding:60px 25%;
        }
        @media only screen and (max-width: 767px) {
            .mainCarrerApplyHeading{
                margin:0px 10px;
                font-size:30px;
            }
            .mainCarrerApplyParagraph{
                color:white;
                font-size:22px;
                padding:60px 7%;
            }
        }
        `}</style>
        </>
    )
}
export default Career;


export async function getServersideprops() {
    const res = await fetch(`https://admin-qanvus.iiinigence.io/career-pages`)
    const CareerPageposts = await res.json()
    return {
        props: {
            CareerPageposts
        },
    }
}
