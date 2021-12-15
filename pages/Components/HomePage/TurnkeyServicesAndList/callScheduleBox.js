import { Row, Col, Button } from 'antd';

const CallScheduleBox = ({ heading, info }) => {

  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <Row>
          <Col align="left" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 16 }} lg={{ span: 16 }}>
            <div className="vlSecond">
              <p className="headingSecond" >
                {heading}
              </p>
              <p className="TurnkeyContentSecond">
                {info}
              </p>
            </div>
          </Col>
          <Col align="center" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 8 }}>
            <div className="Callbtn">
              <Button
                className="myBtn"
                size="large"
                style={{
                  height: "70px",
                  padding: "6.4px 4%",
                  border: "2px solid black",
                  color: "black",
                  fontSize: "23px",
                  fontFamily: "GothamBold",
                  fontWeight: "bold",
                  backgroundColor: "White"
                }}
                shape="round" >
                SCHEDULE A CALL
              </Button>
            </div>
          </Col>
        </Row>
      </div>
      <style jsx>{`
       .vlSecond {
         border-left: 9px solid  #6e328a;
       //padding-bottom:2px;
         margin-left:40px;
         margin-bottom:60px;
         font-family:GothamBook;
      }
      .headingSecond{
         padding-top:10px;
         padding-left:3%;
         font-weight:bold;
         font-size:40px;
        //  padding-right:55s%;
        width:50% !important;
       }
       
       .TurnkeyContentSecond { 
       //background-color:green;
         font-size:30px;
         padding-right:40%;
         padding-left:3%;
         padding-bottom:50px !important;
       }
       .ant-btn-round .ant-btn-lg {
        height: 40px;
        padding: 6.4px 30px;
        font-size: 16px;
        border-radius: 40px;
    }
       .Callbtn{
         padding-top:40%;
       }
       @media only screen and (max-width: 767px) {
       .Callbtn{
         padding-top:02%;
       }   
       .TurnkeyContentSecond { 
        //background-color:green;
          font-size:22px;
          padding-right:10px;
          padding-left:3%;
          padding-bottom:50px !important;
        }
        .vlSecond {
          
          margin-left:25px;
          margin-bottom:30px;
          font-family:GothamBook;   
         }
         .headingSecond{
         width:100% !important;
         font-size:25px;
        }
    }
    @media only screen and  (max-width: 1200px) and (min-width: 768px)  {
        .vlSecond {
           border-left: 9px solid #6e328a;
         //padding-bottom:2px;
           margin-left:35px;
           margin-bottom:60px;
           font-family:GothamBook;   
          }
          .headingSecond{
            padding-top:10px;
            padding-left:3%;
            font-weight:bold;
          //font-size:40px;
          //padding-right:40%;
            font-size:35px;
            padding-right:0%;
            width:60%;  
           }
           .TurnkeyContentSecond { 
           //background-color:green;
             font-size:30px;
             padding-right:0% ;
             padding-left:3%;
             padding-bottom:50px !important;
           }
           .Callbtn{
            padding-top:90%;
          }
    }

      `}</style>

    </>

  )


}

export default CallScheduleBox;