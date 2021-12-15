import "antd/dist/antd.css";

const AuditFirstImageCrouselBox = ({ mainImage, title, quote }) => {
  return (
    <>
      <div className="test2Crousel dummy_class" style={{ backgroundImage: `url(https://admin-qanvus.iiinigence.io${mainImage.url})` }}>
        <div>
          <div style={{ display: "flex" }}>
            <div className="vlCrousel">
              <p className="headingCrousel testing">
                {title[0]["First-Line"]}<br />
                {title[1]["Second-Line"]}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="auditQuote">
        <p style={{ color: "white", fontSize: "29px", fontFamily: "GothamBook", textAlign: "center" }}>
          {quote}</p>
      </div>
      <style jsx>{`
        .test2Crousel {
          width: 100%;
          // font-family: Gotham Bold Italic;
          min-height: 1000px;
          max-height: auto;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
          background-color:rgba(0,0,0,0.5) !important;
          z-index:1; 

        }
        .dummy_class:before {
          position: absolute;
          content: '';
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          // background: linear-gradient(rgba(255,0,0,.3) , rgba(0,0,0,.7) , rgba(0,0,255,.3));
           background: rgba(0,0,0,.5); */
          z-index: 0;
      }
        // test2Crousel:before {
        //   position: absolute;
        //   top: 0;
        //   left: 0;
        //   width: 100%;
        //   height: 100%;
        //   background: rgba(0,0,0,.1);
        //   z-index: 1;
        //   content: '';
        // }

        .test2Crousel div:first-child {
          color: #ffffff;
    width: 90%;
    position: absolute;
    top: 20%;
    left: 1%;
    z-index: 5;
    // background-color:rgba(0,0,0,0.1); 
        }
        .vlCrousel {
          border-left: 10px solid #ffbd00;
          height: auto;
          margin-top:05%;
          padding-bottom:30px;
        }
        p.headingCrousel {
          margin-top: 30px;
          margin-left: 50px;
          font-size: 50px;
          font-family:GothamBold;
           width:80%;
          font-weight: bold;
        }
      .auditQuote{
        padding:110px 25%;
          background-color: #ffbd00;
      }
        @media only screen and (max-width: 767px) {
          .test2Crousel{
          min-height: 600px;
          }
          .test2Crousel div:first-child {
            color: black;
            color: #fff;     
            text-transform: uppercase;
            width: 95%;
            position: absolute;
            top: 20%;
            left: 1%;
          }
          .vlCrousel {
            border-left: 6px solid #ffbd00;
            height: auto;
            padding-bottom:30px;
          }   
          p.headingCrousel {
            margin-top: 30px;
            margin-left: 30px;
            font-size: 25px;
            font-family:GothamBold;
             width:100%;
            font-weight: bold;
          }  
          .breakDisplay{
              display:none;
          } 
          .auditQuote{
            padding:30px 5%;
          }      
          .auditQuote p{
            font-size:16px !important;
          }
        }
         @media only screen and  (max-width: 1300px) and (min-width: 768px)  {
          .test2Crousel{
            height: 650px;

            }
          p.headingCrousel {
            margin-top: 15px;
            margin-left: 30px;
            font-size: 55px;
            font-family:GothamBold;
             width:100%;
            font-weight: bold;
          }
          .vlCrousel {
            border-left: 8px solid #ffbd00;
            height: auto;
            padding-bottom:10px;
          }
          .breakDisplay{
            display:none;
        } 
        .auditQuote{
          padding:110px 15%;
           
        }
        
        }
      `}</style>
    </>
  );
};



export default AuditFirstImageCrouselBox;
