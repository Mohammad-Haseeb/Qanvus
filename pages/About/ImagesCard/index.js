
const ImagesCards = ({ imagesList }) => {
    return (
        <>
            <div className="mainContainer">
                <div className="cardsWrapper">
                    {imagesList.map((object, index) => {

                        return (

                            <div key={index} >
                                <div className="cardImageWrapper">
                                    <div >
                                        {index == 0 ? <img className="FirstCardImage" src={`https://admin-qanvus.iiinigence.io${object.url}`} /> :
                                            <img className="FirstCardImage secondImage" src={`https://admin-qanvus.iiinigence.io${object.url}`} />

                                        }
                                    </div>
                                </div>
                            </div>)
                    })}
                </div>
            </div>
            <style jsx>{`
        .mainContainer{
        background-color:#0d1720;
        padding:60px 0px;// removeable at the end
        margin-top:160px;
        }
        .cardsWrapper{
            display:flex;
            flex-wrap:wrap;
            justify-content: space-between;
            margin-top:-160px;
        }
         .cardsWrapper div{
             flex-basis: 32%;
         }
         .para{
             text-align:center;
             font-size:25px;
             color:white;
             padding:0px 90px;
         }
         .cardImageWrapper{
            display:flex;
            justfiy-content:center;
            flex-direction:column;
            align-items:center;
            padding-top:10px;
            width:100%;
            // height:100px;
        }           
        img{
            width:100%;
            height:500px;
            object-fit:cover;
        }
        @media only screen and (max-width: 768px) {
            .cardsWrapper{
                display:flex;
                flex-wrap:wrap;
                flex-direction:column;
                justify-content: center;
                margin-top:40px;
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
                margin-top:-70px;
            }
            .mainContainer{
                padding:0px 0px;// removeable at the end
                margin-top:100px;
                }
                .para{                   
                    padding:0px 0px;
                }
                .secondImage{
                    margin-top:10px;
                }            
        }        
        @media only screen and (max-width: 400px) {
            .cardImageWrapper div{
                width:100%;
             }
        }
        `}</style>
        </>
    )
}

export default ImagesCards;







