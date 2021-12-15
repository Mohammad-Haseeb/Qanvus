import "antd/dist/antd.css";

const FirstImageBoxCrousel = ({ ImageUrl, info }) => {

  return (
    <>
      <div className="test2Crousel" style={{ backgroundImage: `url(https://admin-qanvus.iiinigence.io${ImageUrl.url})` }}>
        <div>
          <div style={{ display: "flex" }}>
            <div className="vlCrousel">
              <p className="headingCrousel testing">
                {info[0]["First-Line"]}<br />
                {info[1]["Second-Line"]}
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .test2Crousel {
          width: 100%;
          // font-family: Gotham Bold Italic;
          min-height: 800px;
          max-height: auto;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
        }

        .test2Crousel div:first-child {
          color: #fff;
          width: 90%;
          position: absolute;
          top: 10%;
          left: 1%;
        }
        .vlCrousel {
          border-left: 8px solid #c12f2a;
          height: auto;
          margin-top:05%;
          padding-bottom:30px;
        }
        p.headingCrousel {
          margin-top: 30px;
          margin-left: 30px;
          font-size: 50px;
          font-family:GothamBold;
           width:70%;
          font-weight: bold;
        }
      
        @media only screen and (max-width: 767px) {
          .test2Crousel{
          height: 600px;
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
            border-left: 6px solid #c12f2a;
            height: auto;
            padding-bottom:30px;
          }   
          p.headingCrousel {
            margin-top: 30px;
            margin-left: 30px;
            font-size: 25px !important;
            font-family:GothamBold ;
             width:100%;
            font-weight: bold;
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
            font-family:Gotham Book Italic;
             width:100%;
            font-weight: bold;
          }
          .vlCrousel {
            border-left: 8px solid #c12f2a;
            height: auto;
            padding-bottom:10px;
          }
        
        }
      `}</style>
    </>
  );
};

export default FirstImageBoxCrousel;
