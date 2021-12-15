import { Col, Row, Button } from 'antd';
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ImagesBox = ({ mainImage, heading, info }) => {
    return (
        <>
            <Row display="flex" >
                <Col md={{ span: 12 }} xl={{ span: 10 }} sm={{ span: 24 }} xs={{ span: 24 }} >
                    <Row display="flex" justify="space-between">
                        <Col md={{ span: 12 }} xl={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 12 }} style={{ paddingRight: "10px" }}>
                            <ImageDemo imageSource={mainImage[0]} />
                        </Col>
                        <Col md={{ span: 12 }} xl={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 12 }} style={{ paddingLeft: "5px" }}>
                            <ImageDemo imageSource={mainImage[1]} />
                        </Col>
                        <Col md={{ span: 12 }} xl={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 12 }} style={{ paddingRight: "10px" }}>
                            <ImageDemo imageSource={mainImage[2]} />
                        </Col>
                        <Col md={{ span: 12 }} xl={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 12 }} style={{ paddingLeft: "5px" }}>
                            <ImageDemo imageSource={mainImage[3]} />
                        </Col>
                    </Row>
                    <div className="secondSectionOFGallery" >
                        <Row display="flex" justify="space-between">
                            <Col md={{ span: 12 }} xl={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 12 }} style={{ paddingRight: "10px" }}>
                                <ImageDemo imageSource={mainImage[4]} />
                            </Col>
                            <Col md={{ span: 12 }} xl={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 12 }} style={{ paddingLeft: "5px" }}>
                                <ImageDemo imageSource={mainImage[5]} />
                            </Col>
                            <Col md={{ span: 12 }} xl={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 12 }} style={{ paddingRight: "10px" }}>
                                <ImageDemo imageSource={mainImage[6]} />
                            </Col>
                            <Col md={{ span: 12 }} xl={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 12 }} style={{ paddingLeft: "5px" }}>
                                <ImageDemo imageSource={mainImage[7]} />
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col md={{ span: 11, offset: 1 }} xl={{ span: 13, offset: 1 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                    <Col span="24" style={{ marginTop: "10" }}>
                        <Row justify="space-around">
                            <Col md={{ span: 18 }} xl={{ span: 16 }} sm={{ span: 16 }} xs={{ span: 16 }}>
                                <div className="mainHeadingInImageGallery">
                                    <p>{heading}
                                    </p>
                                </div>
                                <div className="mainParagraphInImageGallery">
                                    <p>{info}
                                    </p>
                                </div>
                            </Col>
                            <Col md={{ span: 6 }} xl={{ span: 6 }} sm={{ span: 8 }} xs={{ span: 8 }} align="right" >
                                <div className="lineWrapper">
                                    <div className="verticleLine">
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col span="24" className="UlElements" style={{ backgroundColor: "#4fad2f", height: "56%", paddingBottom: "100px", marginTop: "1%" }}  >
                        <div>
                            <p className="solutionTitle">
                                SOLUTIONS
                            </p>
                            <ul>
                                <li> <span> <FontAwesomeIcon icon={faPlay} style={{ fontSize: "22px" }} color="white"></FontAwesomeIcon>
                                </span>
                                    <span className="liContent">
                                        Technology
                                    </span>
                                </li>
                                <li> <FontAwesomeIcon icon={faPlay} style={{ fontSize: "22px" }} color="white"></FontAwesomeIcon>
                                    <span className="liContent">
                                        Cultivation
                                    </span>
                                </li>
                                <li> <FontAwesomeIcon icon={faPlay} style={{ fontSize: "22px" }} color="white"></FontAwesomeIcon>
                                    <span className="liContent">
                                        Processing
                                    </span>
                                </li>
                                <li> <FontAwesomeIcon icon={faPlay} style={{ fontSize: "22px" }} color="white"></FontAwesomeIcon>
                                    <span className="liContent">
                                        Testing
                                    </span>
                                </li>
                                <li>   <FontAwesomeIcon icon={faPlay} style={{ fontSize: "22px" }} color="white"></FontAwesomeIcon>
                                    <span className="liContent">
                                        Distribution
                                    </span>
                                </li>
                                <li> <FontAwesomeIcon icon={faPlay} style={{ fontSize: "22px" }} color="white"></FontAwesomeIcon>
                                    <span className="liContent">Retail
                                    </span>
                                </li>
                                <li> <FontAwesomeIcon icon={faPlay} style={{ fontSize: "22px" }} color="white"></FontAwesomeIcon>
                                    <span className="liContent">Public Sector
                                    </span>
                                </li>
                                <li> <FontAwesomeIcon icon={faPlay} style={{ fontSize: "22px" }} color="white"></FontAwesomeIcon>
                                    <span className="liContent">
                                        Soverign Sector
                                    </span>
                                </li>
                                <li>
                                    <span className="liContent  firstLiBtn">
                                        <Button
                                            size="large"
                                            style={{
                                                marginTop: "30px",
                                                width: "auto",
                                                height: "70px",
                                                border: "2px solid white",
                                                color: "white",
                                                backgroundColor: "#4fad2f",
                                                fontSize: "20px",
                                                fontFamily: "GothamBold",
                                            }}
                                            shape="round">
                                            EXPLORE SOLUTIONS
                                        </Button>
                                    </span>
                                    <span className="liContent ">
                                        <div className="Libtn">
                                            <Button
                                                size="large"
                                                style={{
                                                    marginTop: "20px",
                                                    width: "auto",
                                                    height: "70px",
                                                    border: "2px solid white",
                                                    color: "white",
                                                    backgroundColor: "#4fad2f",
                                                    fontSize: "18px",
                                                    fontFamily: "GothamBold",
                                                }}
                                                shape="round">
                                                EXPLORE SOLUTIONS
                                            </Button>
                                        </div>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Col>
            </Row>
            <style jsx>{`      
       ul{
           list-style:none;
           padding-left:10%;
         padding-bottom:04%;
       }
       li{
           
           padding:0%;
          padding-top:2%;
       }       
         .liContent{
             padding-left:50px;
             font-size:30px;
             color: white;
         } 
         .solutionTitle{
             padding-left:18%;
             padding-top:25px;
             text-weight: bold;
             font-size:28px;
             font-family:GothamBold;
             color:white;         
         }
        .mainHeadingInImageGallery {
            padding-top:06%;
            padding-left:15%;
            font-size:40px;
            font-weight:bold;
            width:80%;
        }
        .mainParagraphInImageGallery{
            padding-top:02%;
            padding-left:15%;
            font-size:31px;         
        }
        .lineWrapper{
            margin-top:5%;
            height:90%;
            width:10px;
            margin-bottom:5%;
            margin-right:5%;
            background-color:#4fad2f;
        } 
        .Libtn{
                  display:none !important;
        }  
        @media only screen and (max-width: 767px) {
            .secondSectionOFGallery{
                display:none !important;
            }
            .mainHeadingInImageGallery {
                padding-top:10%;
                padding-left:10%;
                font-size:20px;
                font-weight:bold;
                width:100%;
            }
            .mainParagraphInImageGallery{
                padding-top:02%;
                padding-left:10%;
                font-size:20px;    
            }
            .lineWrapper{
                margin-top:5%;
                height:90%;
                width:10px;
                margin-bottom:5%;
                margin-right:5%;
                background-color:#4fad2f;
            }
            .liContent{
                padding-left:10px;
            } 
            .UlElements{
                padding-bottom:10px !important;
            }
            ul{
                list-style:none;
                padding-left:10%;
             padding-bottom:20%;
            }
            li{
           
                padding:0%;
                padding-top:10px;
            }       
            .firstLiBtn{
                display:none !important;
         }      
            .Libtn{
                padding-left:-13px;
             padding-top:0px !important;
              padding-bottom:100px;
                display:flex !important;
                justify-content:center;
      }
      ul{
        list-style:none;
        padding-left:10%;
      padding-bottom:10%;
    }
    li{
        
        padding:0%;
       padding-top:1.5%;
    } 
        }
        @media only screen and  (max-width: 1200px) and (min-width: 768px)  {
            .secondSectionOFGallery{
                display:unset !important;
            }
            .mainHeadingInImageGallery {
                padding-top:10%;
                padding-left:10%;
                font-size:20px;
                font-weight:bold;
                width:100%:
            }
            .mainParagraphInImageGallery{
                padding-top:02%;
                padding-left:10%;
                font-size:20px;   
            }
            .lineWrapper{
                padding-right:10px;
            }   
            .firstLiBtn{
                   display:none !important;
            }  
            .Libtn{
                display:unset !important;
                margin-bottom:50px;
      }    
      ul{
        list-style:none;
        padding-left:10%;
        padding-bottom:15%;
    }
    li{       
        padding:0%;
        padding-top:1.5%;
    }   
        }
        `}</style>
        </>
    )
}

export default ImagesBox;

function ImageDemo({ imageSource }) {
    return (
        <>
            <div className="imageChecker">
                <img src={`https://admin-qanvus.iiinigence.io${imageSource.url}`} style={{ width: "100%", height: "100%", objectPosition: "center", objectFit: "cover" }} alt="Image" />
            </div>
            <style jsx>{`
                .imageChecker{
                   height:369px !important;
                   background-color:#d3d2d2;
                   width:100% !important;
                   margin-top:10px;
                 //margin-left:2px;
            }
            @media only screen and  (max-width: 1200px) and (min-width: 768px)  {
                .imageChecker{
                    height:250px !important;
                }
            }           
            @media only screen and (max-width: 767px) {
                .imageChecker{
                    height:220px !important;
                }
            }           
     `}</style>
        </>
    )
}



