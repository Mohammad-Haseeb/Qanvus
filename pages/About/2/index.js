import Script from 'next/script';
import { Col, Button } from 'antd';
import LeftImageInfoAndPersonHeadings from "./BoardOfDirectorPage2/LeftImageAndInfo";
import SecondLeftImageInfoAndPersonHeadings from "./BoardOfDirectorPage2/2ndLeftImageAndInfo";
import SecondRightImageInfoAndPersonHeadings from "./BoardOfDirectorPage2/RightImageAndInfo";
import PersonInfoTwoPageCardDetails from './InfoCards/index';

const CareerPage = ({ AboutPageposts }) => {
    let data = AboutPageposts[0];
    return (
        <>
            <Script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/9087966.js"></Script>
            <div className="boardDirectorsTitle" style={{ marginTop: "150px", marginBottom: "150px", fontSize: "40px", fontFamily: "GothamBold", textAlign: "center" }}>
                <p >
                    MEET OUR BOARD OF DIRECTORS
                </p>
            </div>
            <PersonInfoDetailsMain data={data} />
            <PersonInfoTwoPageCardDetails data={data} />
            <div style={{ marginTop: "70px" }}>
                <CarrerApplySection heading={data["Apply_heading"]} info={data["Apply_info"][0]["Para"]} />
            </div>
        </>
    )
}

const PersonInfoDetailsMain = ({ data }) => {
    return (
        <>
            <div style={{ marginBottom: "60px" }}>
                <LeftImageInfoAndPersonHeadings color="#d3d2d2"
                    name={<h3>{data["NV1_Name"].toString().split(" ")[0]} <br />
                        {data["NV1_Name"].toString().split(" ")[1] + " " + data["NV1_Name"].toString().split(" ")[2]}</h3>}
                    Designation={data["NV1_Title"]}
                    primaryColor="#00afab"
                    quote={data["NV1_Quote"]}
                    biography={data["NV1_Biography"]}
                    personImage={data["NV1_Image"].url}
                />
            </div>
            <div style={{ marginBottom: "60px" }}>
                <SecondRightImageInfoAndPersonHeadings color="#d3d2d2"
                    name={<h3>{data["Designation328_Name"]}</h3>}
                    Designation={data["Designation_Title"]}
                    primaryColor="#0076c8"
                    quote={data["Designation328_Quote"]}
                    biography={data["Designation328_Biography"]}
                    quote_2={data["Designation328_Quote2"]}
                    personImage={data["Designation328_Image"].url}
                />
            </div>
            <div style={{ marginBottom: "60px" }}>
                <SecondLeftImageInfoAndPersonHeadings color="#d3d2d2"
                    name={<h3>{data["Designation_176_Name"]}</h3>}
                    Designation={data["Designation_176_Title"]}
                    primaryColor="#6e328a"
                    quote={data["Designation_176_Quote"]}
                    quote_2={data["Designation_176_Quote2"]}
                    biography={data["Designation_176_Biography"]}
                    personImage={data["Designation_176_Image"].url}
                />
            </div>
        </>
    )
}

const CarrerApplySection = ({ heading, info }) => {
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
export async function getServersideprops() {
    const res = await fetch(`https://admin-qanvus.iiinigence.io/about-pages`)
    const AboutPageposts = await res.json()
    return {
        props: {
            AboutPageposts
        },
    }
}


export default CareerPage





