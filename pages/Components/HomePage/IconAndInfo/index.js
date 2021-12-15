import { Row, Col } from 'antd';
import CardComponent from './card';
import imageNo1 from '../../../../public/HomePageIcon/Icon_1.png';
import imageNo2 from '../../../../public/HomePageIcon/Icon_2.png';
import imageNo3 from '../../../../public/HomePageIcon/Icon_3.png';
import imageNo4 from '../../../../public/HomePageIcon/Icon_4.png';
import imageNo5 from '../../../../public/HomePageIcon/Icon_5.png';

import bgImageOfCards from '../../../../public/HomePageIcon/LogoPattern.png';

const CardsMainComponent = () => {
  return (
    <>
      <div className="transformBussinessHeading" style={{ marginTop: "90px", marginBottom: "60px", textAlign: "center", fontSize: "40px", fontWeight: "bold" }}>
        How We Transform Your Business
      </div>
      <div style={{ marginBottom: "70px" }}>
        <Row justify="space-around" >
          <Col className="col" xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 12 }} lg={{ span: 9 }} xl={{ span: 6 }} align="center"  >
            <CardComponent heading="Unparalleled Experience."
              imageInfo={imageNo1.src}
              info="We bring decades of in-the-trenches experience
                          with Cannabis & Hemp businesses at every stage.
                          From cultivation to manufacturing multi-state and
                          global operations —we help you maneuver the maze
                          of regulation and state by state compliance to shortcut
                          your path to operational excellence.
                          Hello, freedom."
            />
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 12 }} lg={{ span: 9, }} xl={{ span: 6 }} align='center' >
            <div className="targetBusinessCards">
              <CardComponent heading="Stay Ahead of The Curve."
                imageInfo={imageNo4.src}
                info="Change is the only constant in your business.
                          Which means you’ve got to stay ahead of the curve
                          all while managing, operating, and growing your business.
                          Sounds like a lot of work? That’s why we’re here.
                          We help you stay on the cutting edge so you
                          can focus on what you do best."/>
            </div>
          </Col>
        </Row>
        <div className="secondRow">
          <Row justify="space-around" >
            <Col className="col" xs={{ span: 24 }} sm={{ span: 16 }} lg={{ span: 9 }} xl={{ span: 6 }} align="center"  >
              <CardComponent heading="Technology & Data at Scale."
                imageInfo={imageNo2.src}
                info="Not all data is equal. We leverage technologyand data
                          to help your business thrive. With our suite of cutting-edge
                          technologies, including Seed and Beyond —the #1 Cannabis
                          ERP software powered by SAP, you’re able to adapt to changing
                          internal and external demands, harness leveraged data at
                          your fingertips and experience the freedom to
                          grow across all verticals"/>
            </Col>
          </Row>
        </div>
        <div className="secondFullRow">
          <Row justify="space-around" >
            <Col className="col" xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 12 }} lg={{ span: 9 }} xl={{ span: 6 }} align="center"  >
              <div className="targetBusinessCards">
                <CardComponent heading="Avoid Operational Nightmares."
                  imageInfo={imageNo3.src}
                  info="Operations require an adaptable, yet proven model
                            that allows your business to reduce the
                            costs of technology, minimize risk, streamline HR
                            and stay ahead of compliance. We save your business
                            from costly headaches, free up your status’s bandwidth
                            and prepare the foundation to fuel ambitious
                            growth at scale. "/>
              </div>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 16 }} lg={{ span: 9, }} md={{ span: 12 }} xl={{ span: 6 }} align='center' >
              <div className="targetBusinessCards">
                <CardComponent
                  heading="Strategic Guidance."
                  imageInfo={imageNo5.src}
                  info="Whether you’re looking to enter the industry, are
                    currently operational but dealing with pressing
                    operational issues or are ready to grow at scale,
                    we’ve got you. No challenge or concern is too big to us,
                    and we’re here to turn your challenges
                    into competitive advantages for years
                    and decades to come." />
              </div>
            </Col>
          </Row>
        </div>
        <div className="finalRow">
          <Row justify="space-around" >
            <Col className="col" sm={{ span: 16 }} lg={{ span: 9 }} xl={{ span: 6 }} align="center"  >
              <div className="targetBusinessCards">
                <CardComponent
                  heading="Technology & Data at Scale."
                  imageInfo={imageNo2.src}
                  info="Not all data is equal. We leverage technologyand data
                    to help your business thrive. With our suite of cutting-edge
                    technologies, including Seed and Beyond —the #1 Cannabis
                    ERP software powered by SAP, you’re able to adapt to changing
                    internal and external demands, harness leveraged data at
                    your fingertips and experience the freedom to
                    grow across all verticals"/>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <style jsx>{`
      // .backGroundImageOfCardsSection{
      //   background-image: url(${bgImageOfCards.src});
      //   // background-color: #cccccc;
      //   height: 100%;
      //   width:100%;
      //   background-position: center;
      //   background-repeat: no-repeat;
      //   background-size: cover;
      //   position: relative;
      // }
            .rowDIsplayControllerForLg{
                margin-top:-90px;
            }
            .secondRow{
                margin-top:-100px;
            }
            .secondFullRow{
                margin-top:-110px;               
            }
            .finalRow{
                display:none;
            }
      @media only screen and (max-width: 767px) {
            .secondRow{
                display:none;
            } 
            .secondFullRow{
                margin-top:10px;
            }
            .finalRow{
                display:unset;
            }
            .transformBussinessHeading{
              margin-top:40px !important;
              margin-bottom:20px !important; 
              font-size:30px !important;
            }
            .targetBusinessCards{
              margin-top:30px !important;
            }
      }
      @media only screen and  (max-width: 1200px) and (min-width: 768px)  {
          .secondRow{
              display:none;
          }
          .secondFullRow{
            margin-top:10px;
          }
        .finalRow{
            display:unset;
          }
       }
      `}</style>
      {/* lg={{span:6}} xs={{span:12}} sm={{span:24}} */}
    </>
  )
}
export default CardsMainComponent;