import "antd/dist/antd.css";

const BPOFirstCrouselImage = ({ mainImage, title, quote }) => {

  return (
    <>
      <div className="test2Crousel" style={{ backgroundImage: `url(https://admin-qanvus.iiinigence.io${mainImage.url})` }}>
        <div>
          <div style={{ display: "flex" }}>
            <div className="vlCrousel">
              <p className="headingCrousel testing">
                {title[0]["First-Line"]}
                <br />
                {title[1]["Second-Line"]} <span className="breakDisplay"><br /></span>{title[2]["Third-Line"]}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="BPOQuote" >
        <p style={{ color: "white", fontSize: "27px", fontFamily: "GothamBook", textAlign: "center" }}>
          {quote}
        </p>
      </div>
      <style jsx>{`
        .test2Crousel {
          width: 100%;
          // font-family: Gotham Bold Italic;
          min-height: 1100px;
          max-height: auto;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
        }
        .test2Crousel div:first-child {
          color: #fff;
          width: 90%;
          position: absolute;
          top: 20%;
          left: 1%;
        }
        .vlCrousel {
          border-left: 13px solid #ff8c2b;
          height: auto;
          margin-top:05%;
          padding-bottom:30px;
        }
        p.headingCrousel {
          margin-top: 30px;
          margin-left: 50px;
          font-size: 60px;
          font-family:GothamBold;
           width:80%;
          font-weight: bold;
        }
        .BPOQuote{
          padding:110px 25%;
          background-color: #ff8c2b;
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
            border-left: 10px solid #ff8c2b;
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
          .BPOQuote{
            padding:30px 5%;  
          }    
          .BPOQuote p{
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
            border-left: 10px solid #ff8c2b;
            height: auto;
            padding-bottom:10px;
          }
          .breakDisplay{
            display:none;
        } 
        .BPOQuote{
          padding:110px 15%;
        } 
        
        }
      `}</style>
    </>
  );
};



export default BPOFirstCrouselImage;
