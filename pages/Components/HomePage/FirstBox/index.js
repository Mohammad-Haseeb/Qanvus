import { Button } from "antd";
const FirstBox = ({ First_Session_with_Image, Second_Session_with_Image, heading_One, info_One, heading_Two, info_Two }) => {
    return (
        <>
            <div className="mainContainer">
                <div className="ImagesBox" >
                    <img className="imageSettting" src={`https://admin-qanvus.iiinigence.io${First_Session_with_Image.url}`} />
                </div>
                <div className="secondBox">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div>
                            <p className="firstHeading">
                                {heading_One}
                            </p>
                        </div>
                        <div>
                            <p className="secondHeading">
                                {info_One}
                            </p>
                        </div>
                        <div className="btn">
                            <Button
                                size="large"
                                style={{
                                    width: "230px",
                                    height: "70px",
                                    border: "2px solid black",
                                    fontFamily: "GothamBold",
                                    color: "black",
                                }}
                                shape="round">
                                LEARN MORE
                            </Button>
                        </div>
                    </div>
                    <div className="lineHeight">
                        <div className="exactLine" style={{ width: "10px", height: "100%", backgroundColor: "#ff8c2b" }}>
                        </div>
                    </div>
                </div>
            </div>
            <SecondBox Second_Session_with_Image={Second_Session_with_Image} heading={heading_Two} info={info_Two} />
            <style jsx>{`
        .mainContainer {
                margin-top: 50px;
                display: flex;
              //flex-wrap: wrap;
        }
        .ImagesBox {
                flex-basis: 50%;
                height:auto;                
        }
        .secondBox {
                flex-basis: 50%;
                display: flex;
                justify-content:space-around;
                padding:30px;
        }
        .imageSettting{
                width:100%;
                object-fit:cover;
        }
        .firstHeading{
                margin-left:70px;
                margin-right:40px;
                text-weight: bold;
                line-height:63px !important;
                font-size:60px;
                font-weight: bolder;
        }
        .secondHeading{
                margin-left:70px;
                margin-right:10px !important;
             // text-weight: bold;
                font-size:30px;
             // font-weight: bolder;
        }
        .btn{
                 margin-left:70px;
        }
        .lineHeight{
                margin-top:10px;
                margin-right:40px;
        }
        .exactLine{           
        }
        @media only screen and (max-width: 767px) {
            .secondLine{
                height:100% !important;
            }
            .mainContainer {
                 margin-top: 0px;
                 display: flex;
                 flex-direction: column;
              }
              .ImagesBox {
                flex-basis: 50%;
                min-height:600px !important;
                max-height:auto;
              }
              .secondBox {
                flex-basis: 50%;
                display: flex;
                justify-content:space-around;
                padding:10px;
              }             
              .firstHeading{
               margin-left:10px;
               margin-right:10px;
               font-size:25px;
               font-family:GothamBold;
               line-height:37px !important;
            //    font-weight: bold;
              }
              .secondHeading{
               margin-left:05px;
               margin-right:20px !important;
             //text-weight: bold;
               font-size:25px;
             //font-weight: bolder;
              }
              .btn{
                margin-left:10px;
              }
              .lineHeight{
                margin-top:10px;
                margin-right:0px;
                padding:px;
              }
              .imageSettting{
                width:100%;
                 height:600px;
                object-fit:cover;
              }
              .exactLine{
                  margin-right:10px;            
            }
        }
        @media only screen and  (max-width: 1800px) and (min-width: 1200px)  {
            .firstHeading{
                margin-left:60px;
                margin-right:20px;
                text-weight: bold;
                font-size:45px;
                font-family:GothamBold;
                font-weight: bolder;
                line-height: normal;
            }
           .secondHeading{
                margin-left:60px;
            margin-top:40px;

                margin-right:50px !important;
              //text-weight: bold;
                font-size:30px;
              //font-weight: bolder;
                line-height: normal;
           }
           .ImagesBox{
                 height:auto !important;
           }
           .imageSettting{
                width:100%;
                padding-top:10px;
                height: 100%;
                object-fit:cover;
                object-position:center;
              }
           .btn{
               margin-left:60px;
           }
           .lineHeight{
                margin-top:10px;
                margin-right:40px;
                margin-bottom:0px;
        }
        .secondLine{
            margin-top:50px;
               height:60% !important;
        }        
        }
        @media only screen and  (max-width: 1200px) and (min-width: 768px)  {
            .lineHeight{
                margin-top:10px;
                margin-right:10px;
                margin-bottom:0px;
        }
            .secondLine{
                height:100% !important;
            }
            .firstHeading{
                margin-left:30px;
                margin-right:20px;
                text-weight: bold;
                font-size:30px;
                font-weight: bolder;
                line-height: normal;
            }
            .ImagesBox{
                height:auto !important;    
               }
               .secondHeading{
                    margin-left:30px;
               }
               .imageSettting{
                width:100%;
                padding-top:10px;
                height: 100%;
                object-fit:cover;
                object-position:center;
                  }
        }
       s
          .btn{
              margin-left:70px;
          }      
      `}</style>
        </>
    );
};


const SecondBox = ({ Second_Session_with_Image, heading, info }) => {
    return (
        <>
            <div className="LeafMainContainer">
                <div className="LeafInnerFirstBox">
                    <div className="LeafLine">
                        <h1 className="leafHeading">
                            {heading}
                        </h1>
                        <p className="leafInfo">
                            {info}
                        </p>
                    </div>
                </div>
                <div className="LeafInnerSecondBox">
                    <img src={`https://admin-qanvus.iiinigence.io${Second_Session_with_Image.url}`} className="LeafImage" alt="Garden Image" />
                </div>
            </div>
            <style jsx>{`
        .LeafMainContainer{
            display: flex;
            margin-top:10px;     
        }
        .LeafInnerFirstBox{
            flex-basis: 50%;
            // background-color:yellow;
        }
        .LeafInnerSecondBox{
            flex-basis: 50%;
            // background-color:green;
        }
        .LeafImageWrapper{
            width:100%;
            // heigth:100%;
            object-fit:cover;
            object-position:center;        
        }
        .LeafImage{
            width:100%;
            height:100%;     
         object-position: center;
         object-fit:cover;
        }
        .LeafLine{
            margin-top:15%;
            border-left:10px solid #ff8c2b;
            margin-left:8%;
            margin-right:15%;
        }
        .leafHeading{
            font-size:40px;
            font-family:GothamBold;
            margin-left:20px;
        }
        .leafInfo{
            font-size:30px;
            margin-left:20px;
        }
        @media only screen and (max-width: 767px) {
            .LeafMainContainer{
                flex-direction:column-reverse;
            }
            .LeafLine{
                margin-top:15%;
                border-left:10px solid #ff8c2b;
                margin-left:4%;
                margin-right:0%;
            } 
            .leafHeading{
                font-size:25px;
                font-family:GothamBold;
                margin-left:10px;
                margin-right:10px;
            }  
            .leafInfo{
                font-size:22px;
                margin-left:10px;
                margin-right:10px;
            }       
        }
        `}</style>
        </>
    )
}

export default FirstBox;