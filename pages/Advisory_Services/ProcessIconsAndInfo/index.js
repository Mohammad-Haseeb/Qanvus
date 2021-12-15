import { Row, Col } from 'antd';
import lastIcon from './../../../public/Advisory/Teal_Icon_5.png';


const ProcessIcons = ({ name, images }) => {
    return (
        <>
            <Row className="processIconsMainContainer" justify="space-around" style={{ marginTop: "80px" }}>
                <Col align="center" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 9 }} lg={{ span: 8 }} xl={{ span: 6 }} >
                    <div className="AdvisoryProcessIconImageWrapeer">
                        <img className="AdvisoryProcessIconImage" src={images[0].src} alt="First Icon Image" />
                    </div>
                    <div><h1 style={{ marginTop: "20px", marginBottom: "30px", fontFamily: "GothamBold" }}>{name[0]}</h1></div>
                    <div>
                        <p className="AdvisoryProcessIconInfo">Where it all begins. We’ll study every part of
                            your business operations against the backdrop of
                            current and upcoming trends, garnering an
                            in-depth analysis of every facet of
                            your operations.</p>
                    </div>
                </Col>
                <Col className="processIconsMainContainer" align="center" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 9 }} lg={{ span: 8 }} xl={{ span: 6 }} >
                    <div className="AdvisoryProcessIconImageWrapeer">
                        <img className="AdvisoryProcessIconImage" src={images[1].src} alt="First Icon Image" />
                    </div>
                    <div><h1 style={{ marginTop: "20px", marginBottom: "30px", fontFamily: "GothamBold" }}>{name[1]}</h1></div>
                    <div>
                        <p className="AdvisoryProcessIconInfo">Armed with the full scope of your operations
                            and your unique vision, target, and objectives, we’ll
                            develop a detailed roadmap of our recommended
                            path to achieve that success...
                            and beyond.</p>
                    </div>
                </Col>
            </Row>
            <style jsx>{`
          .AdvisoryProcessIconImageWrapeer{
              width:130px;
              height:140px;
            //   background-color:black;
          }
          .AdvisoryProcessIconImage{
              width:100%;
              height:auto;
              object-fit:cover;
          }
          .AdvisoryProcessIconInfo{
              font-size:23px;
          }
          @media only screen and (max-width: 767px) {
            .AdvisoryProcessIconInfo{
                font-size:16px;
                margin:5px 16px;
            }
          }
          `}</style>
        </>
    );
}

export const LastProcessIconsBox = () => {
    return (
        <>
            <div className="processIconsMainContainer" style={{ marginTop: "100px", marginBottom: "100px" }}>
                <Row justify="center">
                    <Col align="center" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 15 }} xl={{ span: 12 }} xxl={{ span: 9 }} >
                        <div className="AdvisoryProcessIconImageWrapeer">
                            <img className="AdvisoryProcessIconImage" src={lastIcon.src} alt="First Icon Image" />
                        </div>
                        <div><h1 style={{ marginTop: "20px", marginBottom: "30px", fontFamily: "GothamBold" }}>Live Operation</h1></div>
                        <div>
                            <p className="AdvisoryProcessIconInfo">Say hello to your new normal as managed service operations
                                go live and you experience the confidence of knowing your business
                                has never been in better hands —equipped to handle growth and scale at
                                any level —while achieving operational excellence.</p>
                        </div>

                    </Col>
                </Row>
            </div>
            <style jsx>{`
          .AdvisoryProcessIconImageWrapeer{
              width:130px;
              height:140px;
            //   background-color:black;
          }
          .AdvisoryProcessIconImage{
              width:100%;
              height:auto;
              object-fit:cover;
          }
          .AdvisoryProcessIconInfo{
              font-size:25px;
          }
          @media only screen and (max-width: 767px) {
            .AdvisoryProcessIconInfo{
                font-size:16px;
                margin:5px 16px;
            }
          }
          `}</style>
        </>
    )
}

export default ProcessIcons;