import quotation from "./../../../../public/quotation.PNG";
import { Button, Radio, Row, Col } from "antd";


const TextInfo = ({ info }) => {

    return (
        <>
            <div className="mainTextInfo">
                <p className="mainTextInfoPara">
                    Hear Directly From Our Clients
                </p>
                <div className="whiteLine">
                    <hr className="new1" />
                </div>
                <Row justify="center">
                    <Col align="left" xl={{ span: 8 }} lg={{ span: 10 }} md={{ span: 14 }} sm={{ span: 24 }}>
                        <div className="internalTextInfo">
                            <div className="internalFirst">
                                <div className="quoteImage">
                                    <img src={quotation.src} />
                                </div>
                                <div>
                                    <h1 className="message">
                                        {info}{" "}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <style jsx>{`
          .mainTextInfo {
                background-color: #0d1720;
                width:100%;
              //height : 400px;
                color:white;
                padding: 30px 0px;
            }
            img{
                width:80px;
                margin-top:20px;
            }
            .mainTextInfoPara{
                   text-align: center;
                   padding-top:0%;
                   font-weight:bolder;
                   font-size:40px;
            }
            .whiteLine{
                   display:flex;
                   justify-content: center;
            }
            hr.new1 {
                  //border: 4px solid white;
                    width:200px;
              }
              .internalTextInfo{
                  //margin-left : 20%;
                  //border :1px solid blue;
                    width : 100%
              }
              .internalFirst{
                    display:flex;
                    justify-content: center;
                  //padding-left :30px;
                    padding-top:20px;
              }
              h1.message{
                    padding-top:40px;
                    text-align:center;
                    color:white;
              }
              @media only screen and (max-width: 767px) {
                img{
                    width:auto;
                    margin-top:0px;
                } 
                .internalTextInfo{
                    //border :1px solid green;
                      width : 100%;
                      display: flex;
                      justify-content:center;
                  }
                  .internalFirst{
                        display:inline-block;
                  }
                  h1.message{
                      padding-top:19px;
                      font-weight:05px;
                      font-size:21px;
                      line-height:normal;
                      text-align:center;
                      color:white;
                      padding:0px 10px; 
                  }
                  .mainTextInfoPara{
                    text-align: center;
                    padding-top:0%;
                    font-size:24px;
                }             
            }
              @media only screen and  (max-width: 863px) and (min-width: 768px)  {
                .internalFirst{
                    justify-content: start;
                }
                .internalTextInfo{
                    //margin-left : 20%;
                    //border :1px solid blue;
                      padding-left:0px; 
                      width : 100%
                  }
                  .quoteImage{
                      margin-left : 60px;
                  }               
       `}</style>
        </>
    );
};

export default TextInfo;
