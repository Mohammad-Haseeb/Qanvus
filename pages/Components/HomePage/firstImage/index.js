import { Button } from "antd";
import "antd/dist/antd.css";

const FirstImageWIthOverlayText = ({ title, CrouselImage }) => {
  return (
    <>
      <div className="test2 dummy_class" style={{ backgroundImage: `url(${`https://admin-qanvus.iiinigence.io${CrouselImage.url}`})` }}>
        <div>
          <div style={{ display: "flex" }}>
            <div className="vl">
              <p className="heading">
                {title}
              </p>
              <div className="btnComponent">
                <Button
                  type="default"
                  size="large"
                  style={{
                    // marginLeft: "30px",
                    marginTop: "30px",
                    width: "250px",
                    height: "70px",
                    fontSize: "25px",
                    fontFamily: "GothamBold",
                    border: "3px solid white",
                  }}
                  shape="round"
                  ghost>
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`    
        .test2 {
          width: 100%;
          height: 820px;
          min-height: 680px;
          max-height: auto;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
        }
        .dummy_class:before {
          position: absolute;
          content: '';
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          // background: linear-gradient(rgba(255,0,0,.3) , rgba(0,0,0,.7) , rgba(0,0,255,.3));
           background: rgba(0,0,0,.3); */
          z-index: 0;
      }
        .test2 div:first-child {
          // background-color: rgba(0,0,0,0.6);        
          // display: inline;
             color: #fff;
          // font-family: Gotham Bold;
          // text-align: center;
          // text-transform:capit:capitalize;
          width: 90%;
          position: absolute;
          top: 08%;
          left: 2%;
          // transform: translate(-50%, -50%);
        }
        .vl {
          border-left: 10px solid #c12f2a;
          height: auto;
          padding-bottom:20px;
        }
        p.heading {
          margin-top: 30px;
          margin-left: 30px;
          font-size: 65px;
          font-family:Gotham Book Italic;
           width:70%;
          font-weight: bold;
        }
        .btnComponent{
          margin-left:30px;
        }
        @media only screen and (max-width: 767px) {
          .test2{
          height: 600px;
          }
          .test2 div:first-child {
            // background-color: rgba(0,0,0,0.6);
            color: black;
            // display: inline;
            color: #fff;
            // font-family: sans-serif;
            // text-align: center;
            text-transform: uppercase;
            width: 250px;
            position: absolute;
            top: 10%;
            left: 2%;
            // transform: translate(-50%, -50%);
          }
          .vl {
            border-left: 10px solid #c12f2a;
            height: auto;
            padding-bottom:30px;
          }         
          p.heading {
            margin-top: 30px;
            margin-left: 30px;
            font-size: 27px;
            font-family:Gotham Book Italic;
             width:100%;
            font-weight: bold;
          }
          .btnComponent{
            margin-left: 20px !important;
          }
        }
         @media only screen and  (max-width: 1300px) and (min-width: 768px)  {
          .test2{
            height: 650px;
            }
          p.heading {
            margin-top: 15px;
            margin-left: 30px;
            font-size: 55px;
            font-family:Gotham Book Italic;
             width:100%;
            font-weight: bold;
          }
          .vl {
            border-left: 10px solid #c12f2a;
            height: auto;
            padding-bottom:10px;
          }    
        }
      `}</style>
    </>
  );
};

export default FirstImageWIthOverlayText;
