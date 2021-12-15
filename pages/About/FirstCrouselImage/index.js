import "antd/dist/antd.css";

const FirstImageCrouselBox = ({ First_Carousel_Image, FirstLine, SecondLine, quote }) => {
  return (
    <>
      <div className="test2Crousel" style={{ backgroundImage: `url(https://admin-qanvus.iiinigence.io${First_Carousel_Image.url})` }}>
        <div>
          <p className="firstLine">
            {FirstLine}
          </p>
          <p className="SecondLine">
            {SecondLine}
          </p>
        </div>
      </div>
      <div>
        <p className="aboutInfoText" style={{ marginTop: "40px" }}>
          {quote[1]["Para"]}
        </p>
        {quote.map((object, index) => {
          return (
            index > 0 ? <p className="aboutInfoText" key={index}>{object["Para"]}</p> : <span key={index}></span>
          )
        })}
      </div>
      <style jsx>{`
        .test2Crousel {
          width: 100%;
          // font-family: Gotham Bold Italic;
          min-height: 600px;
          max-height: auto;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
        }
          .firstLine{
              text-align: center;
              padding-top:10%;
              padding-bottom:0px;
              font-weight: bold;
              font-size:90px;
              line-height:80px;
              color:white;
          }
          .SecondLine{
              text-align: center;
              font-weight: bold;
              font-size:40px;
              line-height:00px;
              padding-top:-100px;
              color:white;
          }
          .aboutInfoText{
              text-align: center;
              font-size:25px;
              padding:0px 19%;
          }     
        @media only screen and (max-width: 767px) {
          .test2Crousel{
          height: 700px;
          }
          .firstLine{
            text-align: center;
            padding-top:13%;
            padding-bottom:0px;
            font-weight: bold;
            font-size:36px;
            color:white;
            line-height:normal
        }
        .SecondLine{
            line-height:normal;
            font-size:30px;
        }
        .aboutInfoText{
          text-align: center;
          font-size:25px;
          padding:0px 05%;
      }   
      .aboutInfoText{
        text-align: center;
        font-size:16px;
        padding:0px 16px;
    } 
   }                
        }
         @media only screen and  (max-width: 1300px) and (min-width: 768px)  {
          .test2Crousel{
            height: 650px;
            }          
           .firstLine{
            text-align: center;
            padding-top:8%;
            padding-bottom:0px;
            font-weight: bold;
            font-size:50px;
            color:white;
            line-height:normal;
        }
            .SecondLine{
                padding-top:00px;
                line-height:normal;
            }
        }
      `}</style>
    </>
  );
};

export default FirstImageCrouselBox;
