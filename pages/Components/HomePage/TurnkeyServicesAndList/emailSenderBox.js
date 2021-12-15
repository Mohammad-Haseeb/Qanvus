import { Row, Col, Input, Button } from 'antd';
const EmailSenderBox = ({ data }) => {

    return (
        <>
            <div style={{ backgroundColor: '#040503', color: 'white', marginTop: '30px', paddingTop: '120px', paddingBottom: '60px' }}>
                <Row justify="center">
                    <Col span="24" align="center" >
                        <h1 className="emailSendMainHeading" style={{ color: 'white', fontSize: '30px', lineHeight: "2px" }}>
                            {data["Schedule_Email"][0]["First-Line"]}
                        </h1>
                        <h2 className="emailSendMainHeading" style={{ color: 'white', fontSize: '40px' }}>
                            {data["Schedule_Email"][1]["Second-Line"]}
                        </h2>
                        <p className="emailSendFirstHeading" style={{ marginTop: "30px", fontSize: "30px" }}>
                            {data["Schedule_Email"][2]["Third-Line"]}
                        </p>
                        <p style={{ marginTop: "60px", fontSize: "30px", fontFamily: "GothamBold" }}>
                            {data["Schedule_Email"][3]["Fourth-Line"]}
                        </p>
                        <Input
                            size="small"
                            style={{
                                borderRadius: "40px", width: "280px",
                                height: "80px",
                                marginBottom: "40px",
                                backgroundColor: "black",
                                paddingLeft: "30px",
                                fontSize: "24px"
                            }}
                            placeholder="Email address" />
                        <span className="submitBtn">
                            <Button
                                className="submitBtn"
                                size="large"
                                style={{
                                    width: "200px",
                                    height: "80px",
                                    border: "2px solid black",
                                    marginTop: "",
                                    color: "black",
                                    fontSize: "30px",
                                    backgroundColor: "White",
                                    marginLeft: "10px"
                                }}
                                shape="round">
                                Submit
                            </Button>
                        </span>
                    </Col>
                </Row>
            </div>
            <style jsx>{`
                   
                        `}</style>
        </>
    )
}

export default EmailSenderBox;