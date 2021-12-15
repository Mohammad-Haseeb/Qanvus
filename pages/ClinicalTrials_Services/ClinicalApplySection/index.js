import { Row, Col, Button } from 'antd';
export const ClinicalApplySection = ({ info }) => {
    return (
        <>
            <div className="mainCarreerApplySection">
                <Col align="center">
                    <h1 className="mainCarrerApplyHeading" style={{ fontFamily: "GothamBold" }}>
                        Your Growth Starts Here —Schedule a Call.
                    </h1>
                    <p className="mainCarrerApplyParagraph">
                        Whether you know what managed services you need,<span className="breadInInfo"><br /></span>
                        are dealing with a challenge or simply need clarity —schedule a call today.
                    </p>
                    <p className="mainCarrerApplyParagraph">
                        We’ll get to know exactly where you are and provide a<span className="breadInInfo"><br /></span>
                        roadmap towards your successful future.
                    </p>
                    <div className="">
                        <Button
                            size="large"
                            style={{
                                padding: "0px 30px",
                                height: "90px",
                                border: "3px solid white",
                                marginTop: "30px",
                                color: "white",
                                fontSize: "25px",
                                fontWeight: "bold",
                                borderRadius: "100px",
                                backgroundColor: "black",
                            }}
                            shape="round">
                            SCHEDULE A CALL
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
            font-size:45px;
            // font-family:Gotham;
        }
        .mainCarrerApplyParagraph{
            color:white;
            font-size:40px;
            padding:0px 15%;
            padding-top:60px;
        }
        @media only screen and (max-width: 767px) {
            .mainCarrerApplyHeading{
                font-size:30px;
                margin: 0px 10px;
            }
            .mainCarrerApplyParagraph{
                color:white;
                font-size:22px;
                padding:0px 7%;
                padding-top:60px;
            }
            .breadInInfo{
                display:none;
            }
            .mainButton{
                width:300px !important;
            }
        }
        `}</style>
        </>
    )
}
export default ClinicalApplySection;