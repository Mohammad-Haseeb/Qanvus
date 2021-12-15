import { Row, Col, Button } from 'antd';
const MainTextInfoBox = ({ First_quote, Second_quote, Third_quote }) => {
    return (
        <>
            <div className="CarrerTextInfoBoxComponent">
                <h1 className="CarrerTextInfoBoxDetails" style={{ textAlign: 'center', color: "white" }}>
                    {First_quote}
                </h1>
                <Col align="center">
                    <div className="CarrerhorizonalLine"></div>
                </Col>
                <p className="CarrerInfoText">{Second_quote}
                </p>
                <h1 className="careerTextINfoBoxSecondHeading">
                    {Third_quote}
                </h1>
                <Col align="center">
                    <Button
                        size="large"
                        style={{
                            marginTop: "30px",
                            width: "280px",
                            height: "70px",
                            border: "3px solid white",
                            backgroundColor: " #00afab",
                            fontWeight: "bold",
                            color: "white",
                        }}
                        shape="round">
                        APPLY NOW
                    </Button>
                </Col>
            </div>
            <style jsx>{`
        .CarrerTextInfoBoxComponent{
            background-color: #00afab;
            padding:70px 0px;
        }
        .CarrerhorizonalLine {
            border: 4px solid white;
            background-color:white;
            width:150px;
          }
          .CarrerInfoText{
              text-align:center;
              font-size:35px;
              padding:30px 17%;
              line-height:large;
              color:white;
          }
          .careerTextINfoBoxSecondHeading{
              text-align:center;
              color:white;
          }
          @media only screen and (max-width: 767px) {
            .CarrerInfoText{              
                padding:30px 4%;
            }
            .careerTextINfoBoxSecondHeading{
                margin-right:16px;
                margin-left:16px;
                font-size:22px;
                color:white;
            }
            .CarrerInfoText{
                text-align:center;
                font-size:25px;
                padding:30px 4%;
                line-height:normal;
                color:white;
            }
          }
        `}</style>
        </>
    )
}
export default MainTextInfoBox;