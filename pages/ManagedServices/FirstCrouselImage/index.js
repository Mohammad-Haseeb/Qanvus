import "antd/dist/antd.css";

const ManagedServicesFirstImageCrouselBox = ({ mainImage, title, quote }) => {
  return (
    <>
      <div className="test2Crousel dummy_class" style={{ backgroundImage: `url(https://admin-qanvus.iiinigence.io${mainImage.url})` }}>
        <div>
          <div style={{ display: "flex" }}>
            <div className="vlCrousel">
              <p className="headingCrousel testing">
                {title[0]["First-Line"]}
                <br />
                {title[1]["Second-Line"]} <span className="breakDisplay"><br /></span>
                {title[2]["Third-Line"]}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="managedQuote" style={{ paddingTop: "120px", backgroundColor: "#c12f2a", paddingBottom: "100px" }}>
        <p style={{ color: "white", fontSize: "27px", fontFamily: "GothamBook", textAlign: "center" }}>
          {quote}
        </p>
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
        }
        .dummy_class:before {
            position: absolute;
            content: '';
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            // background: linear-gradient(rgba(255,0,0,.3) , rgba(0,0,0,.7) , rgba(0,0,255,.3));
             background: rgba(0,0,0,.3); 
            z-index: 0;
        }

        .test2Crousel div:first-child {
          color: #fff;
          width: 90%;
          position: absolute;
          top: 20%;
          left: 1%;
        }
        .vlCrousel {
          border-left: 13px solid #c12f2a;
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
        .managedQuote{
          padding:110px 25%;
          background-color:  #c12f2a;
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
            border-left: 10px solid #c12f2a;
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
          .managedQuote{
            padding:30px 5%;
          }       
          .managedQuote  p{
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
            border-left: 10px solid #c12f2a;
            height: auto;
            padding-bottom:10px;
          }
          .breakDisplay{
            display:none;
        } 
        .managedQuote{
          padding:110px 15%;
        }
        
        }
      `}</style>
    </>
  );
};



export default ManagedServicesFirstImageCrouselBox;
