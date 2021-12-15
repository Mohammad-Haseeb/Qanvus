import { Row, Col } from 'antd';
import ReactMarkdown from 'react-markdown';

const ImageInfoAndPersonHeadings = (props) => {
    let border = `10px solid ${props.primaryColor}`;

    return (
        <>
            <div style={{ display: "flex" }}>
                <div style={{ flexBasis: "100%" }}>
                    <Row>
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 11, offset: 1 }} style={{ backgroundColor: "", paddingTop: "20px" }}>
                            <div className="PersonMainInfoHeading">
                                <div className="nameInfo">
                                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 24 }} xl={{ span: 13 }} style={{ padding: "0px" }}>
                                        <div className="personName" style={{}}>
                                            {props.name}
                                        </div>
                                    </Col>
                                    <Col className="line" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 11, }} style={{ backgroundColor: props.primaryColor, height: "15px" }}>
                                    </Col>
                                </div>
                                <div className="nameInfoForsmallScreen">
                                    <div className="nameForSmallScreen">
                                        {props.name}
                                    </div>
                                    <div className="lineForSmallScreen" style={{ backgroundColor: props.primaryColor }}>
                                    </div>
                                </div>
                            </div>
                            <p className="status" style={{ color: props.primaryColor }}>{props.Designation}</p>
                            <div className="quoteInformation" style={{ backgroundColor: "", width: "100%", paddingTop: "0px", paddingBottom: "0px" }}>
                                <div className="AboutQuoteWrapper">
                                    <div>
                                        <img src={props.image} />
                                    </div>
                                    <div >
                                        <p className="AboutMainHeading" style={{ background: "", color: "black" }}>
                                            {props.quote}
                                        </p>
                                        <p className="AboutMainHeading" style={{ background: "", color: "black", textAlign: "justify" }} >
                                            {props.quote_2}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col align="center" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} style={{ backgroundColor: "" }}>
                            <div className="aboutImagePreview" style={{ backgroundColor: props.color }}>
                                <img src={`https://admin-qanvus.iiinigence.io${props.personImage}`} style={{ width: "100%", height: "100%", objectPosition: "center", objectFit: "cover" }} alt="Image" />
                            </div>
                        </Col>
                    </Row>
                    {/* {props.biography.map((object, index) => {
                        return (index > 1 ? <p className="AboutPersonInfoDetaial" key={index}>{object["Para"]}</p> : index == 1 ? <p className="AboutPersonInfoDetaial" style={{ marginTop: "100px" }} key={index}>{object["Para"]}</p> : <span key={index}></span>)
                    })} */}
                    <div className="AboutPersonInfoDetaial">
                        <ReactMarkdown children={props.biography} />
                    </div>
                </div>
                <div className="vl" style={{ borderLeft: border, flexBasis: "05%" }}>
                </div>
            </div>
            <style jsx>{`
        .vl {
          //margin-left:30px;
            padding-bottom:20px;
          }
       .aboutImagePreview{
        width:75%;
        height:105%;
       //background-color:props.color;
       }
       .personName{
           font-family:GothamBold;
           font-size:40px;
           padding-top:30px;
       }
       .nameInfo{
           display:flex;
           align-items:center;
       }
       .line{
           margin-top:80px !important;
       }
       .nameForSmallScreen{
           font-family:GothamBold;
           padding:0px 05%;
           font-size:40px;
       }
       .nameInfoForsmallScreen{
           display:none !important;
       }
       .lineForSmallScreen{
               width:90%;
               margin:3px 5%;
               height:10px !important;
            // background-color:  #c12f2a;
               margin-top:-30px;
       }
       .status{
           font-size:50px;
           margin-top:-60px;
           margin-bottom:80px;
        // color: #c12f2a;
       }
       .quoteInformation{
        margin:3px 0%;
        margin-top:-50px;
       }
       .AboutQuoteWrapper{
           margin-left:10px;
            display:flex;
            align-items:start;
       }
       .AboutMainHeading{
           margin-top:30px !important;
           font-size:25px;
        // line-height:60px;
           color:white;
        //    font-family:GothamBold;
        // padding-right:100px;
    }
    .AboutPersonInfoDetaial{
          font-size:23px;
          margin-top:40px;
          margin-right:20px;
          margin-left:100px;
    }
       @media only screen and (max-width: 767px){
        .vl {
             margin-left:0px;
            padding-bottom:20px;
             border-left:0px !important;
          }
        .AboutPersonInfoDetaial{
            font-size:23px;
            margin-top:40px;
            margin-right:20px;
            margin-left:20px;
        }
        .aboutImagePreview{
            width:100%;
            margin:0px 16px;
            margin-top:40px;
             height:850px;
             // background-color:props.color;
            }
        .nameInfoForsmallScreen{
            display:unset !important;
        }
        .nameInfo{
            display:none;
        }
        .status{
            font-size:50px;
            margin:3px 5%;
            margin-top:10px;
            // color: #c12f2a;
        }
        .quoteInformation{
            margin:3px 0%;
            // margin-right:10px;
           }       
    //     .lineForSmallScreen{
    //         width:90%;
    //         margin:10px 05%;
    //         height:10px !important;
    //         background-color:  #c12f2a;
    // }
    .AboutMainHeading{
        // margin-top:10px !important;
           font-size:19px ; 
           color:white;
        //    font-family:GothamBold;
           margin-left:28px;
           font-weight: bold;
           line-height:30px!important;
           margin-right:16px !important;
           padding-right:0px;
           text-align:left;
    }
    .AboutQuoteWrapper{
        margin-left:10px;
         display:flex;
         text-align: center;
         flex-direction:column;
         align-items:start;
    }
    .nameForSmallScreen{
        font-family:GothamBold;
        padding:0px 05%;
        padding-bottom:13px;
        line-height:normal;
        font-size:30px;
    }
       }
       @media only screen and  (max-width: 1200px) and (min-width: 768px)  {     
        .nameInfoForsmallScreen{
            display:unset !important;
        }
        .quoteInformation{
            margin:3px 0%;
            margin-top:30px;
           }
        .nameInfo{
            display:none;
        }
        .status{
            margin:3px 5%;
            font-size:60px;
            margin-top:10px;
            // color: #c12f2a;
        } 
        .AboutMainHeading{
            // margin-top:10px !important;
               font-size:35px;
               color:white;
               font-family:GothamBold;
               margin-left:0px;
            // margin-right:0px;
        }
        .AboutQuoteWrapper{
            margin-left:10px;
             display:flex;
             flex-direction:column;
             align-items:start;    
        }
    }      
        `}</style>
        </>
    )
}


export default ImageInfoAndPersonHeadings;


