import { Row, Col } from 'antd';


const GalleryAndInfo = ({ Image_Gallery, heading, firstInfo, SecondInfo }) => {
    return (
        <>
            <div style={{ marginTop: "50px" }}>
                <Row display="flex" >
                    <Col md={{ span: 12 }} xl={{ span: 10 }} sm={{ span: 24 }} xs={{ span: 24 }} >
                        <Row display="flex" justify="space-between">
                            {Image_Gallery.map((object, index) => {
                                return (
                                    <Col key={index} md={{ span: 12 }} xl={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 12 }} style={{ paddingRight: "10px" }}>
                                        <ImageDemo mainImage={object["url"]} />
                                    </Col>)
                            })}
                        </Row>
                    </Col>
                    <Col md={{ span: 11, push: 1 }} xl={{ span: 11, push: 1 }} sm={{ span: 24 }} xs={{ span: 24 }} style={{ marginTop: "10px" }}>
                        <div className="Aboutheading">
                            {heading}
                        </div>
                        <div className="aboutGalleryInfo">
                            <p>{firstInfo}</p>
                        </div>
                        <div className="aboutGalleryInfo">
                            <p>{SecondInfo}</p>
                        </div>
                    </Col>
                </Row>
            </div>
            <style jsx>{`
            .Aboutheading{
                font-family:GothamBold;
                line-height:normal;
                font-size:75px;
            }
            .aboutGalleryInfo{
                margin-top:35px;
                font-size:30px;
                line-height:normal;
            }
            @media only screen and  (min-width:1702px){
                .aboutGalleryInfo{
                margin-top:35px;
                font-size:31px;
                line-height:normal;
            }
            }
            @media only screen and  (max-width: 1702px) and (min-width: 1300px)  {
                .Aboutheading{
                    font-size:50px;
                }
                .aboutGalleryInfo{
                    margin-top:10px;
                    font-size:30px;
                    line-height:normal;
                }
            }
            @media only screen and  (max-width: 1299px) and (min-width: 967px)  {
                .Aboutheading{
                    font-size:40px;
                }
                .aboutGalleryInfo{
                    margin-top:8px;
                    font-size:22px;
                    line-height:normal;
                }
            }
            @media only screen and  (max-width: 967px) and (min-width: 768px)  {
                .Aboutheading{
                    font-size:30px;
                }
                .aboutGalleryInfo{
                    margin-top:6px;
                    font-size:21px;
                    line-height:normal;
                }
            }
            @media only screen and (max-width: 767px){
                .Aboutheading{
                    margin-left:5%;
                    font-size:30px;
                    margin-right:16px !important;
                    margin-top:10px;
                }
                .aboutGalleryInfo{
                    margin-left:5%;
                    font-size:21px;
                    margin-right:16px !important;
                }            
            }
            `}</style>
        </>
    )
}

export default GalleryAndInfo;

function ImageDemo({ mainImage }) {
    return (
        <>
            <div className="imageChecker">
                <img src={`https://admin-qanvus.iiinigence.io${mainImage}`}
                    style={{ width: "100%", height: "100%", objectPosition: "center", objectFit: "cover" }}
                    alt="Image" />
            </div>
            <style jsx>{`
     .imageChecker{
         height:350px !important;
         background-color:#d3d2d2;
         width:100% !important;
         margin-top:10px;
        //  margin-left:2px;
     }
            @media only screen and  (max-width: 1200px) and (min-width: 768px)  {
                .imageChecker{
                    height:250px !important;
                }
            }           
            @media only screen and (max-width: 767px) {
                .imageChecker{
                    height:220px !important;
                    margin:0px 5px;
                    margin-top:10px;
                }
            }           
     `}</style>
        </>

    )
}