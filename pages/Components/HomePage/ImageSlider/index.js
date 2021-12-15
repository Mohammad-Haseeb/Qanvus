import { Row, Col, Button } from 'antd';


const ImageSlider = ({ data }) => {
  return (
    <>
      <Row style={{ marginTop: "30px" }}>
        <Col xs={{ span: 22 }} sm={{ span: 22 }} md={{ span: 20 }} lg={{ span: 20 }} xl={{ span: 21 }} style={{ paddingTop: "20px" }} align="center" >
          <Col span="24" style={{ fontSize: "35px", fontFamily: "GothamBold", marginBottom: "20px" }}>
            <p className="sliderHeading">Real Businesses.<span className="breakInSLiderHeading"><br /></span> Real Challenges. <span className="breakInSLiderHeading"><br /></span>Real Results.
            </p>
          </Col>
          <Col span="24"  ><SliderComponent data={data} /> </Col>
          <Col span="24" > <div className="sliderButton">
            <Button size="large"
              style={{
                marginTop: "35px",
                width: "auto",
                height: "70px",
                border: "3px solid black",
                color: "black",
                fontFamily: "GothamBold", fontSize: "18px"
              }}
              shape="round">EXPLORE CASE STUDIES </Button>
          </div> </Col>
        </Col>
        <Col xs={{ span: 2 }} sm={{ span: 2 }} md={{ span: 4 }} lg={{ span: 4 }} xl={{ span: 3 }} align="center" >
          <div className="vl">
          </div>
        </Col>
      </Row>
      <style jsx>{`
       .vl {
        border-left: 12px solid #0076c8;
        height: 100%;
        margin-left:50%;
      }
      .breakInSLiderHeading{
          display:none;
      }
    
      @media only screen and (max-width: 767px) {
        .vl {
            border-left: 10px solid #0076c8;
            height: 100%;
            margin-left:30%;
          }
          .breakInSLiderHeading{
              display:unset;
          }
        //   .sliderButton{
        //       margin-top:40px !important;
        //   }
        .sliderHeading{
          font-size:22px;
        }
       
      }
      `}</style>
    </>
  )
}


const SliderComponent = ({ data }) => {
  return (
    <>
      <div>
        <section id="slider">
          <input type="radio" name="slider" id="s1" defaultChecked />
          <input type="radio" name="slider" id="s2" />
          <input type="radio" name="slider" id="s3" />
          <input type="radio" name="slider" id="s4" />
          <input type="radio" name="slider" id="s5" />
          <label htmlFor="s1" id="slide1">
            <img src={`https://admin-qanvus.iiinigence.io${data[0].url}`} style={{ width: "100%", height: "100%", objectPosition: "center", objectFit: "cover" }} alt="Image" />
          </label>
          <label htmlFor="s2" id="slide2">
            <img src={`https://admin-qanvus.iiinigence.io${data[1].url}`} style={{ width: "100%", height: "100%", objectPosition: "center", objectFit: "cover" }} alt="Image" />
          </label>
          <label htmlFor="s3" id="slide3">
            <img src={`https://admin-qanvus.iiinigence.io${data[2].url}`} style={{ width: "100%", height: "100%", objectPosition: "center", objectFit: "cover" }} alt="Image" />
          </label>
          <label htmlFor="s4" id="slide4">
            <img src={`https://admin-qanvus.iiinigence.io${data[3].url}`} style={{ width: "100%", height: "100%", objectPosition: "center", objectFit: "cover" }} alt="Image" />
          </label>
          <label htmlFor="s5" id="slide5">
            <img src={`https://admin-qanvus.iiinigence.io${data[4].url}`} style={{ width: "100%", height: "100%", objectPosition: "center", objectFit: "cover" }} alt="Image" />
          </label>
        </section>
      </div>
      <style jsx>{`
    
  #slider {
    position: relative;
    width: 50%;
    height: 30vw;
    margin: 100px auto;
    margin-top:0px;
    
    font-family: 'Helvetica Neue', sans-serif;
    perspective: 1400px;
    transform-style: preserve-3d;
  }
  
  input[type=radio] {
    position: relative;
    top: 108%;
    left: 50%;
    width: 18px;
    height: 18px;
    margin: 0 15px 0 0;
    opacity: 0.4;
    transform: translateX(-83px);
    cursor: pointer;
    display: none;
  }
  
  
  input[type=radio]:nth-child(5) {
    margin-right: 0px;
  }
  /* 
  input[type=radio]:checked {
    opacity: 1;
  }
  
  
   */
  
  #slider label {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    color: white;
    font-size: 70px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 400ms ease;
  }
  
  #slide1 , #slide2 , #slide3 , #slide4 , #slide5 {
    background: #d3d2d2;
  }
  
  
  
  /* Slider Functionality */
  
  /* Active Slide */
  #s1:checked ~ #slide1, #s2:checked ~ #slide2, #s3:checked ~ #slide3, #s4:checked ~ #slide4, #s5:checked ~ #slide5 {
    box-shadow: 0 13px 26px rgba(0,0,0, 0.3), 0 12px 6px rgba(0,0,0, 0.2);
    transform: translate3d(0%, 0, 0px);
  }
  
  /* Next Slide */
  #s1:checked ~ #slide2, #s2:checked ~ #slide3, #s3:checked ~ #slide4, #s4:checked ~ #slide5, #s5:checked ~ #slide1 {
    box-shadow: 0 6px 10px rgba(0,0,0, 0.3), 0 2px 2px rgba(0,0,0, 0.2);
    transform: translate3d(15%, 0, -100px);
  }
  
  
  /* Next to Next Slide */
  #s1:checked ~ #slide3, #s2:checked ~ #slide4, #s3:checked ~ #slide5, #s4:checked ~ #slide1, #s5:checked ~ #slide2 {
    box-shadow: 0 1px 4px rgba(0,0,0, 0.4);
    transform: translate3d(30%, 0, -250px);
  }
  
  /* Previous to Previous Slide */
  #s1:checked ~ #slide4, #s2:checked ~ #slide5, #s3:checked ~ #slide1, #s4:checked ~ #slide2, #s5:checked ~ #slide3 {
    box-shadow: 0 1px 4px rgba(0,0,0, 0.4);
    transform: translate3d(-30%, 0, -250px);
  }
  
  /* Previous Slide */
  #s1:checked ~ #slide5, #s2:checked ~ #slide1, #s3:checked ~ #slide2, #s4:checked ~ #slide3, #s5:checked ~ #slide4 {
    box-shadow: 0 6px 10px rgba(0,0,0, 0.3), 0 2px 2px rgba(0,0,0, 0.2);
    transform: translate3d(-15%, 0, -100px);
  }
  
  @media only screen and (max-width:767px){
      
  #slider label {
    position: absolute;
    width: 90%;
    height: 310px;
    left: 0;
    top: 0;
    color: white;
    font-size: 70px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 400ms ease;
  }
  #slider {
    position: relative;
    width: 70%;
    height: 30vw;
    margin: 230px auto;
    margin-top:0px;
    
    font-family: 'Helvetica Neue', sans-serif;
    perspective: 1400px;
    transform-style: preserve-3d;
  }
  

  }
    
    `}</style>
    </>

  )
}

export default ImageSlider;