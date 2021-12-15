const InfoBoxCards = ({ imagesSource, data }) => {

    return (
        <>
            <div className="mainContainer">
                <div className="cardsWrapper">
                    <div >
                        <div className="cardImageWrapper ">
                            <div>
                                <img className="FirstCardImage" src={`https://admin-qanvus.iiinigence.io${imagesSource[0].url}`} alt="Image" />
                            </div>
                            <h1 style={{ textAlign: 'center', paddingTop: "30px", color: "white" }}>
                                {data.First_Card_Title}
                            </h1>
                            <p className="para">
                                {data.First_Card_Description}
                            </p>
                        </div>
                    </div>
                    <div >
                        <div className="cardImageWrapper">
                            <div>
                                <img className="FirstCardImage" src={`https://admin-qanvus.iiinigence.io${imagesSource[1].url}`} alt="Image" />
                            </div>
                            <h1 style={{ textAlign: 'center', paddingTop: "30px", color: "white" }}>
                                {data.Second_Card_Title}
                            </h1>
                            <p className="para">
                                {data.Second_Card_Description}
                            </p>
                        </div>
                    </div>
                    <div >
                        <div className="cardImageWrapper">
                            <div >
                                <img className="FirstCardImage" src={`https://admin-qanvus.iiinigence.io${imagesSource[2].url}`} alt="Image" />
                            </div>
                            <h1 style={{ textAlign: 'center', paddingTop: "30px", color: "white" }}>
                                {data.Third_Card_Title}
                            </h1>
                            <p className="para">
                                {data.Third_Card_Description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
        .mainContainer{
        background-color:#0076c8;
        padding:40px 0px;// removeable at the end
        margin-top:260px;
        }
        .cardsWrapper{
            display:flex;
            flex-wrap:wrap;
            justify-content: space-between;
            margin-top:-250px;
        }
         .cardsWrapper div{
             flex-basis: 31%;
         }
         .para{
             text-align:center;
             font-size:25px;
             color:white;
             padding:0px 90px;
         }    
        img{
            width:100%;
            height:500px;
            object-fit:cover
        }
        @media only screen and (max-width: 768px) {
            .cardsWrapper{
                display:flex;
                flex-wrap:wrap;
                flex-direction:column;
                justify-content: center;
                margin-top:200px;   
            }
            .cardImageWrapper{
                display:flex;
                justfiy-content:center;
                flex-direction:column;
                align-items:center;
                padding-top:10px;
                width:100%;
            }       
            .cardImageWrapper div{
               width:80%;
            }
            .FirstCardImage{
                margin-top:0px;
                padding-left:10px;
                padding-right:10px;
            }
            .mainContainer{
                padding:0px 0px;// removeable at the end
                margin-top:100px;
                }
                .para{                  
                padding:0px 16px;
                font-size:16px;

                }
        }        
        @media only screen and (max-width: 400px) {
            .cardImageWrapper div{
                width:100%;
             }
        }
        @media only screen and (max-width: 1200px) and (min-width: 768px) {
            .para{
                text-align:center;
                font-size:21px;
                color:white;
                padding:0px 10px;
            }   
        }
        `}</style>

        </>
    )
}

export default InfoBoxCards;

