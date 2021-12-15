import { Col, Row, } from 'antd';


const AuditImagesBox = ({ data, colorSetting }) => {
    return (
        <>
            <Row className="imageGalleryMainContainer" display="flex" style={{ marginTop: "80px" }} >

                <Col md={{ span: 11, offset: 1 }} xl={{ span: 13, offset: 1 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                    <div className="vlSecond" >
                        <h1 className="CareerImageGalleryheading">{data["Image_Gallery_Heading"]}</h1>
                        <p className="firstPara">{data["Image_Gallery_Info"][0]["Para"]}</p>
                        <p className="SeocndPara">{data["Image_Gallery_Info"][1]["Para"]}</p>
                    </div>
                </Col>
                <Col md={{ span: 12 }} xl={{ span: 10 }} sm={{ span: 24 }} xs={{ span: 24 }} >
                    <div className="firstImageSet">
                        <Row display="flex" justify="space-between">
                            <Col md={{ span: 12 }} xl={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 12 }} style={{ paddingRight: "10px" }}>
                                <ImageDemo imageSource={data["Image_Gallery"][0]} />
                            </Col>
                            <Col md={{ span: 12 }} xl={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 12 }} style={{ paddingLeft: "5px" }}>
                                <ImageDemo imageSource={data["Image_Gallery"][1]} />
                            </Col>
                            <Col md={{ span: 12 }} xl={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 12 }} style={{ paddingRight: "10px" }}>
                                <ImageDemo imageSource={data["Image_Gallery"][2]} />
                            </Col>
                            <Col md={{ span: 12 }} xl={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 12 }} style={{ paddingLeft: "5px" }}>
                                <ImageDemo imageSource={data["Image_Gallery"][3]} />
                            </Col>
                        </Row>
                    </div>
                    <div className="secondSectionOFGallery" >
                        <Row display="flex" justify="space-between">
                            <Col md={{ span: 12 }} xl={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 12 }} style={{ paddingRight: "10px", }}>
                                <ImageDemo imageSource={data["Image_Gallery"][4]} />
                            </Col>
                            <Col md={{ span: 12 }} xl={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 12 }} style={{ paddingLeft: "5px" }}>
                                <ImageDemo imageSource={data["Image_Gallery"][5]} />
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <style jsx>{`      
            .vlSecond {
                border-left: 11px solid #ffbd00;
              //padding-bottom:2px;
                margin-left: 20px;
                margin-bottom: 60px;
                font-family: GothamBook;
              }
              .CareerImageGalleryheading{
                  font-family:GothamBold;
                  font-size:40px;
                  padding-top:20px;
                  margin-left:50px;
                  margin-right:55%;
              }
              .firstPara{
                  padding-top:20px;
                  margin-left:50px;
                  font-size:40px;
                  margin-right:40px;
              }
              .SeocndPara{
                padding-top:50px;
                margin-left:50px;
                font-size:40px;
                margin-right:40px;
              }
            //   @media only screen and (min-width: 1592px){
            //     .firstPara{
            //         padding-top:50px;
            //         margin-left:30px;
            //         font-size:40px;
            //         margin-right:60px;
            //     }
            //     .SeocndPara{
            //       padding-top:50px;
            //       margin-left:30px;
            //       font-size:40px;
            //       margin-right:60px;
            //     }
            //   }
              @media only screen and (max-width: 767px) {
                  .breakPointInText{
                      display:none;
                  }
                .vlSecond {
                    border-left: 11px solid #ffbd00;
                  //padding-bottom:2px;
                    margin-left: 05px;
                    margin-bottom: 60px;
                    font-family: GothamBook;
                  }
                  .CareerImageGalleryheading{
                      font-family:GothamBold;
                      font-size:27px;
                      padding-top:20px;
                      margin-left:20px;
                      margin-right:5%;
                  }
                  .firstPara{
                      padding-top:40px;
                      margin-left:20px;
                      font-size:16px;
                      margin-right:11px;
                  }
                  .SeocndPara{
                    padding-top:30px;
                    margin-left:20px;
                    font-size:16px;
                    margin-right:11px;
                  }   
                  .secondSectionOFGallery{
                    padding:0px 10px;
                    padding-top:-5px;
                } 
                .firstImageSet{
                    padding:0px 10px;
                }               
            }
              @media only screen and (max-width: 1715px) and (min-width: 1420px) {
                .firstPara{
                    padding-top:30px;
                    margin-left:45px;
                    font-size:35px;
                    margin-right:70px;
                }
                .SeocndPara{
                  padding-top:30px;
                  margin-left:45px;
                  font-size:35px;
                  margin-right:70px;
                }   
                .CareerImageGalleryheading{
                    margin-right:40%;
                }
            }
            @media only screen and (max-width: 1419px) and (min-width: 1201px) {
                .firstPara{
                    padding-top:30px;
                    margin-left:45px;
                    font-size:30px;
                    margin-right:30px;
                }
                .SeocndPara{
                  padding-top:30px;
                  margin-left:45px;
                  font-size:35px;
                  margin-right:30px;
                } 
                .CareerImageGalleryheading{
                    margin-right:30%;
                } 
            }
            @media only screen and (max-width: 1200px) and (min-width: 981px) {

                .vlSecond {
                    border-left: 10px solid #ffbd00;
                  //padding-bottom:5px;
                    margin-left: 5px;
                    margin-bottom: 60px;
                    font-family: GothamBook;
                  }
                .firstPara{
                    padding-top:10px;
                    margin-left:10px;
                    font-size:30px;
                    margin-right:0px;
                }
                .SeocndPara{
                  padding-top:10px;
                  margin-left:10px;
                  font-size:30px;
                  margin-right:0px;
                }  
                .CareerImageGalleryheading{
                    margin-right:28%;
                } 
        }
        @media only screen and (max-width: 980px) and (min-width: 768px) {
            .vlSecond {
                border-left: 10px solid #ffbd00;
              //padding-bottom:5px;
                margin-left: 5px;
                margin-bottom: 60px;
                font-family: GothamBook;
              }
            .firstPara{
                padding-top:10px;
                margin-left:30px;
                font-size:23px;
                 margin-right:0px;
            }
            .SeocndPara{
              padding-top:05px;
              margin-left:30px;
              font-size:23px;
              margin-right:0px;
            } 
            .CareerImageGalleryheading{
                margin-left:30px;
                margin-right:13%;
            } 
        }
        
        `}</style>
        </>
    )
}


function ImageDemo({ imageSource }) {
    return (
        <>
            <div className="imageChecker">
                <img src={`https://admin-qanvus.iiinigence.io${imageSource.url}`}
                    style={{ width: "100%", height: "100%", objectPosition: "center", objectFit: "cover" }} alt="Image" />
            </div>
            <style jsx>{`
                .imageChecker{
                   height:400px !important;
                   background-color:#d3d2d2;
                   width:100% !important;
                   margin-top:10px;
                 //margin-left:2px;
            }
            @media only screen and  (max-width: 1200px) and (min-width: 768px)  {
                .imageChecker{
                    height:400px !important;
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


export default AuditImagesBox;
