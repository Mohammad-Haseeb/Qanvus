import { Col, Row } from 'antd';
import Integrity from '../../../public/Icon_Blue.png'
import Trust from '../../../public/Icon_Yellow.png';
import Compliance from '../../../public/Icon_Green.png';
import Innovation from '../../../public/Icon_Orange.png';
import Efficiency from '../../../public/Icon_Teal.png';
import Courtesy from '../../../public/Icon_Red.png';
import Engagement from '../../../public/Icon_Purple.png';

const LogosWithInfo = () => {
    return (
        <>
            <h1 className="carrerInfoHeading" style={{ textAlign: "center", marginTop: "100px", marginBottom: "50px" }}>
                Driven By a Vision. Guided By Values.
            </h1>
            <Row justify="center" style={{ marginBottom: "60px" }}>
                <Col sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 8 }} style={{ backgroundColor: "", paddingTop: "40px" }} align="center">
                    <Card imageinfo={Trust.src}
                        info="The foundation to every decision,
                              action, and choice we make.
                              Without trust, nothing endures."
                        title="TRUST"
                        lastCard="paragraph"
                    /></Col>
                <Col sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 8 }} style={{ backgroundColor: "", paddingTop: "40px" }} align="center">
                    <Card imageinfo={Compliance.src}
                        info="Our client’s success depends
                              on our understanding of current
                              and future regulation"
                        title="COMPLIANCE"
                        lastCard="paragraph"
                    /></Col>
                <Col sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 8 }} style={{ backgroundColor: "", paddingTop: "40px" }} align="center" >
                    <div className="integraitySection">
                        <Card imageinfo={Integrity.src}
                            info="Do the right thing in all
                              circumstances, even if no one
                              is watching you."
                            title="INTEGRITY"
                            lastCard="paragraph"
                        />
                    </div>
                </Col>
                <div className="marginInRows" > </div>
                <Col sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 8 }} style={{ backgroundColor: "", paddingTop: "70px" }} align="center">
                    <Card imageinfo={Innovation.src}
                        info="Embrace emerging technologies
                              and stay on the cutting edge
                              for our clients."
                        title="INNOVATION"
                        lastCard="paragraph" /></Col>
                <Col sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 8 }} style={{ backgroundColor: "", paddingTop: "70px" }} align="center">
                    <Card imageinfo={Efficiency.src}
                        info="Avoid unnecessary inconveniences
                              for our clients, colleagues, and
                              professional partners."
                        title="EFFICIENCY"
                        lastCard="paragraph" /></Col>
                <Col sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 8 }} style={{ backgroundColor: "", paddingTop: "70px" }} align="center">
                    <Card imageinfo={Courtesy.src}
                        info="Overdeliver and leave colleagues,
                              peers, and partners better off
                              after every encounter. "
                        title="COURTESY"
                        lastCard="paragraph" /></Col>
                <Col sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 8 }} style={{ backgroundColor: "", paddingTop: "70px" }} align="center" >
                    <Card imageinfo={Engagement.src}
                        info="Breathe life into the work you do by staying engaged, curious, and
                              passionate no matter a small or major detail."
                        title="ENGAGEMENT"
                        lastCard="lastparagraph" />
                </Col>
            </Row>
            {/* <Row  justify="center">      
        </Row> */}
        </>
    )
}
export default LogosWithInfo;

const Card = (props) => {
    return (
        <>
            <div>
                <div className="imageBox">
                    <img src={props.imageinfo} />
                </div>
                <div>
                    <h1 style={{ marginTop: "30px", marginBottom: "30px", fontFamily: "GothamBold" }}>
                        {props.title}
                    </h1>
                </div>
                <div>
                    <p className={`${props.lastCard}`}>
                        {props.info}
                    </p>
                </div>
            </div>
            <style>{`
        .imageBox{
            width:100%;
            height:110px;
        }
        img{
            width:auto;
            height:100%;
        }
        .paragraph{
            width:50%;
            font-size:18px;
        }
        .lastparagraph{
            width:92%;
            font-size:18px;   
        }  
        @media only screen and (max-width: 767px) {
            .imageBox{
                width:90%;
                height:110px;
            }
            .paragraph{
                width:70%;
                font-size:18px;
            }

        }  
        `}</style>
        </>
    )
}