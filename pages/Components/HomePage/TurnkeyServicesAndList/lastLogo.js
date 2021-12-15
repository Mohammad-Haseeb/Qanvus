import logo from './../../../../public/bottom_Logo.png';
import { Col, Row } from 'antd';
const LastLogo = () => {
    return (
        <>
            <Row justify="center">
                <Col align="center" span="24" style={{ marginTop: "100px", marginBottom: "50px" }}>
                    <div className="imageBox">
                        <a href="/">
                            <img src={logo.src} alt="logo" />
                        </a>
                    </div>
                </Col>
                <Col>
                    <p>
                        © Copyright Qanvus. All Rights Reserved
                    </p>
                </Col>
            </Row>
            <style jsx>{`
             .imageBox{
                width:100%;
                height:150px;
            }
            img{
                width:auto;
                height:100%;
            }
            `}</style>
        </>
    )
}
export default LastLogo;