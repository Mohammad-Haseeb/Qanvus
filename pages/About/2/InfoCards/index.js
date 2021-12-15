
const PersonInfoTwoPageCardDetails = ({ data }) => {
    return (
        <>
            <div className="PersonInfoTwoPageCardDetailsSection" style={{ marginTop: "170px" }}>
                <div className="CareerMainCard">
                    <div className="CareerFirstCard">
                        <div className="CareerImageCardWrapper">
                            <img src={`https://admin-qanvus.iiinigence.io${data["Page_2_First_Card_Image"].url}`}
                                style={{ width: "100%", height: "100%", objectPosition: "center", objectFit: "cover" }}
                                alt="Image" />
                        </div>
                        <h1 className="careerMainCardHeading"
                            style={{ marginBottom: data["Page_2_First_Card_Title"][1]["Second-Name"] == "" ? "75px" : "20px" }}>
                            {data["Page_2_First_Card_Title"][0]["First-Name"]} <br />{data["Page_2_First_Card_Title"][1]["Second-Name"]}
                        </h1>
                        <div className="careerMainCardInfo">
                            {data["Page_2_First_Card_Info"]}
                        </div>
                    </div>
                    <div className="CareerSecondCard">
                        <div className="CareerImageCardWrapper">
                            <img src={`https://admin-qanvus.iiinigence.io${data["Page_2_Second_Card_Image"].url}`}
                                style={{ width: "100%", height: "100%", objectPosition: "center", objectFit: "cover" }}
                                alt="Image" />
                        </div>
                        <h1 className="careerMainCardHeading"
                            style={{ marginBottom: data["Page_2_Second_Card_Title"][1]["Second-Name"] == "" ? "75px" : "20px" }}>
                            {data["Page_2_Second_Card_Title"][0]["First-Name"]} <br />{data["Page_2_Second_Card_Title"][1]["Second-Name"]}
                        </h1>
                        <div className="careerMainCardInfo">
                            {data["Page_2_Second_Card_Info"]}
                        </div>
                    </div>
                    <div className="CareerThirdCard">
                        <div className="CareerImageCardWrapper">
                            <img src={`https://admin-qanvus.iiinigence.io${data["Page_2_Third_Card_Image"].url}`}
                                style={{ width: "100%", height: "100%", objectPosition: "center", objectFit: "cover" }}
                                alt="Image" />
                        </div>
                        <h1 className="careerMainCardHeading"
                            style={{ marginBottom: data["Page_2_Third_Card_Title"][1]["Second-Name"] == "" ? "75px" : "20px" }}>
                            {data["Page_2_Third_Card_Title"][0]["First-Name"]} <br />{data["Page_2_Third_Card_Title"][1]["Second-Name"]}
                        </h1>
                        <div className="careerMainCardInfo">
                            {data["Page_2_Third_Card_Info"]}
                        </div>
                    </div>
                </div>
            </div>

            {/* second row */}
            <div style={{ marginTop: "60px" }}>
                <div className="CareerMainCard">
                    <div className="CareerFirstCard">
                        <div className="CareerImageCardWrapper">
                            <img src={`https://admin-qanvus.iiinigence.io${data["Page_2_Fourth_Card_image"].url}`}
                                style={{ width: "100%", height: "100%", objectPosition: "center", objectFit: "cover" }}
                                alt="Image" />
                        </div>
                        <h1 className="careerMainCardHeading lastHeading"
                            style={{ marginBottom: data["Page_2_Fourth_Card_Title"][1]["Second-Name"] == "" ? "75px" : "15px" }}>
                            {data["Page_2_Fourth_Card_Title"][0]["First-Name"]} <br />{data["Page_2_Fourth_Card_Title"][1]["Second-Name"]}
                        </h1>
                        <div className="careerMainCardInfo">
                            {data["Page_2_Fourth_Card_info"]}
                        </div>
                    </div>
                    <div className="CareerSecondCard">
                        <div className="CareerImageCardWrapper">
                            <img src={`https://admin-qanvus.iiinigence.io${data["Page_2_Fifth_Card_image"].url}`}
                                style={{ width: "100%", height: "100%", objectPosition: "center", objectFit: "cover" }}
                                alt="Image" />
                        </div>
                        <h1 className="careerMainCardHeading lastHeading"
                            style={{ marginBottom: data["Page_2_Fifth_Card_Title"][1]["Second-Name"] == "" ? "75px" : "15px" }} >
                            {data["Page_2_Fifth_Card_Title"][0]["First-Name"]} <br />{data["Page_2_Fifth_Card_Title"][1]["Second-Name"]}
                        </h1>
                        <div className="careerMainCardInfo">
                            {data["Page_2_Fifth_Card_info"]}
                        </div>
                    </div>
                    <div className="CareerThirdCard">
                        <div className="CareerImageCardWrapper">
                            <img src={`https://admin-qanvus.iiinigence.io${data["Page_2_Sixth_Card_image"].url}`}
                                style={{ width: "100%", height: "100%", objectPosition: "center", objectFit: "cover" }}
                                alt="Image" />
                        </div>
                        <h1 className="careerMainCardHeading lastHeading"
                            style={{ marginBottom: data["Page_2_Sixth_Card_Title"][1]["Second-Name"] == "" ? "75px" : "15px" }} >
                            {data["Page_2_Sixth_Card_Title"][0]["First-Name"]} <br /><span>{data["Page_2_Sixth_Card_Title"][1]["Second-Name"]} </span>
                        </h1>
                        <div className="careerMainCardInfo">
                            {data["Page_2_Sixth_Card_info"]}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .CareerMainCard{
                    display:flex;
                    justify-content:space-around;
                    flex-wrap:wrap;
                }
                .CareerFirstCard{
                    flex-basis:31%;
                    // color:white;
                }
                .CareerSecondCard{
                    flex-basis:31%;
                    // color:green;
                }
                .CareerThirdCard{
                    flex-basis:31%;
                    // color:yellow;
                }
                .CareerImageCardWrapper{
                    background-color:#d3d2d2;
                    //  padding-left:5%;
                    width:100%;
                    height:600px;   
                }
                .careerMainCardHeading{
                    font-size:40px;
                    font-family:GothamBold;
                }
                .careerMainCardInfo{
                    font-size:30px;
                    // padding-right:3%;
                    width:90%;
                }
                @media only screen and (max-width: 767px){
                    .CareerMainCard{
                        display:flex;
                        justify-content:center;
                        flex-wrap:wrap;
                    } 
                    .CareerFirstCard{
                        flex-basis:90%;
                        margin-top:30px;
                    }
                    .CareerSecondCard{
                        flex-basis:90%;
                        margin-top:30px;
                    }
                    .CareerThirdCard{
                        flex-basis:90%;
                        margin-top:30px;
                    } 
                    .PersonInfoTwoPageCardDetailsSection{
                        margin-top:10px !important;
                    }
                    .careerMainCardHeading{
                        font-size:30px;
                    }
                    .careerMainCardInfo{
                        font-size:19px;
                        // padding-right:3%;
                        width:98%;
                    }
                    .lastHeading{
                        margin-bottom:30px !important;
                    }
                }
                @media only screen and  (max-width: 1200px) and (min-width: 768px)  {  
                    .CareerMainCard{
                        display:flex;
                        justify-content:space-around;
                        flex-wrap:wrap;
                    } 
                    .CareerFirstCard{
                        flex-basis:45%;                    
                    }
                    .CareerSecondCard{
                        flex-basis:45%;
                    }
                    .CareerThirdCard{
                        flex-basis:45%;
                        margin-top:30px;
                    }  
                }
                
                `}</style>
        </>
    );
}

export default PersonInfoTwoPageCardDetails;