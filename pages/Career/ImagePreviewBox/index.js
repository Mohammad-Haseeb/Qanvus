import { Row, Col } from "antd";

const CarrerImgePreviewAndInfoBox = ({ imageScource, info, headingTitle }) => {
  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <Row>
          <Col
            xl={{ span: "12" }}
            sm={{ span: "24" }}
            xs={{ span: "24" }}
            lg={{ span: "12" }}
          >
            <div className="vlSecond">
              <p className="headingSecond">
                {headingTitle}
              </p>
              <p className="TurnkeyContentSecond">
                {info[0]["First-Para"]}
              </p>
              <p className="TurnkeyContentSecond">
                {info[1]["Second-Para"]}
              </p>
              <p className="TurnkeyContentSecond">
                {info[2]["Third-Para"]}
              </p>
            </div>
          </Col>
          <Col
            xl={{ span: "12" }}
            sm={{ span: "24" }}
            xs={{ span: "24" }}
            lg={{ span: "12" }}
          >
            <ImageDemo imageSource={imageScource} />
          </Col>
        </Row>
      </div>
      <style jsx>{`
        .vlSecond {
          border-left: 11px solid green;
        //padding-bottom:2px;
          margin-left: 80px;
          margin-bottom: 60px;
          font-family: GothamBook;
        }
        .headingSecond {
          padding-top: 10px;
          padding-left: 7%;
          font-weight: bold;
          font-size: 50px;
          padding-right: 35%;
        }
        .TurnkeyContentSecond {
        //background-color:green;
          font-size: 37px;
          padding-right: 12%;
          padding-left: 7%;
          padding-bottom: 50px !important;
        }
        @media only screen and (max-width: 767px) {
                   .vlSecond {
                       border-left: 11px solid green;
                     //padding-bottom:2px;
                       margin-left: 30px;
                     margin-bottom: 60px;
                       font-family: GothamBook;
                   }
                     .headingSecond {
                       padding-top: 10px;
                       padding-left: 7%;
                       font-weight: bold;
                       font-size: 25px;
                       padding-right: 13%;
                     }
                     .TurnkeyContentSecond {
                     //background-color:green;
                       font-size: 22px;
                       padding-right: 6%;
                       padding-left: 7%;
                     padding-bottom: 50px !important;
                     }
                     .carrerImagePaadingSet{
                       padding:0px 10px;
                     }
                   }
                   @media only screen and (max-width: 1200px) and (min-width: 768px) {
                    .headingSecond {
                      padding-top: 10px;
                      padding-left: 7%;
                      font-weight: bold;
                      font-size: 40px;
                      padding-right: 13%;
                    }
                    .TurnkeyContentSecond {
                    //background-color:green;
                      font-size: 27px;
                      padding-right: 6%;
                      padding-left: 7%;
                    padding-bottom: 50px !important;
                    }
                  }
      `}</style>
    </>
  );
};
function ImageDemo({ imageSource }) {
  return (
    <>
      <div className="imageChecker">
        <img src={`https://admin-qanvus.iiinigence.io${imageSource.url}`} style={{ width: "100%", height: "100%", objectPosition: "center", objectFit: "cover" }} alt="Image" />
      </div>
      <style jsx>{`
        .imageChecker {
          height: 98% !important;
          background-color: #d3d2d2;
          width: 100% !important;
        }
        @media only screen and (max-width: 767px) {
          .imageChecker {
            height: 600px !important;
            padding:0px 16px;

          }
        }
        @media only screen and (max-width: 991px) and (min-width: 768px) {
          .imageChecker {
            height: 600px !important;
          }
        }
        @media only screen and (max-width: 1200px) and (min-width: 992px) {
          .imageChecker {
            height: 98% !important;
          }
        }
      `}</style>
    </>
  );
}

export default CarrerImgePreviewAndInfoBox;



