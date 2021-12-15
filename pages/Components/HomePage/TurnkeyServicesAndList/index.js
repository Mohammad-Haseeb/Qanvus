import TurkeyServicesAndListItems from './list';
import CallScheduleBox from './callScheduleBox';
import EmailSenderBox from './emailSenderBox';
import ImageSlider from '../ImageSlider/index';
const TurkeyServicesAndList = ({ data }) => {

  return (
    <>
      <div className="mainStageMainCOntainer" style={{ marginTop: '30px' }}>
        <div className="vl">
          <p className="headingHome">
            {data.Turnkey_Services_Heading}
          </p>
          <p className="TurnkeyContent">
            {data.Turnkey_Services_Text_Info}
          </p>
        </div>
      </div>
      <TurkeyServicesAndListItems />
      <ImageSlider data={data["Image_Slider"]} />
      <CallScheduleBox heading={data.Schedule_Call_Heading} info={data.Schedule_Call_Info} />
      <EmailSenderBox data={data} />
      <style jsx>{`
        .vl {
            border-left:9px solid #00afab;
            // padding-bottom:2px;
            margin-left:80px;
            margin-bottom:60px;     
          }
          .headingHome{
             padding-top:10px;
             padding-left:3%;
             font-weight:bold;
             font-size:40px;
             padding-right:70%;
             width:96%;
           }
           .TurnkeyContent { 
            // background-color:green;
               font-size:30px;
               padding-right:50%;
               padding-left:3%;
               padding-bottom:50px !important;
           }
           .mainStageMainCOntainer{
                       margin-top:100px !important;
           }
           @media only screen and (max-width: 767px) {
            .mainStageMainCOntainer{
              margin-top:-100px !important;
  }
            .vl {
                border-left: 6px solid #00afab;
              //padding-bottom:2px;
                margin-left:10px;
                margin-bottom:60px;               
              }
            .TurnkeyContent { 
                // background-color:green;
                   font-size:20px;
                   padding-right:16px;
                   padding-left:3%;
                   padding-bottom:50px !important;
               }
               .headingHome{
                padding-top:10px;
                padding-left:3%;
                font-weight:bold;
                font-size:25px;
                padding-right:6px;
                width:100%;

              }
        }
        @media only screen and  (max-width: 1200px) and (min-width: 768px)  {
            .TurnkeyContent { 
                // background-color:green;
                   font-size:25px;
                   padding-right:09%;
                   padding-left:3%;
                   padding-bottom:50px !important;
               }
               .headingHome{
                padding-top:10px;
                padding-left:3%;
                font-weight:bold;
                font-size:60px;
                padding-right:05%;
             width:100%;

              }
              .vl {
                border-left: 12px solid #00afab;
              //padding-bottom:2px;
                margin-left:20px;
                margin-bottom:60px;               
              }        
        }
        `}</style>
    </>
  )
}

export default TurkeyServicesAndList;