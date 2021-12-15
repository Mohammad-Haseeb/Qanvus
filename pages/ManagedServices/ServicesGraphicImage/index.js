import ServicesGraphicImage from '../../../public/ManagedServices/ServicesGraphic.png'

const ServicesGraphicImageComponent = () => {
    return (
        <>
            <div className="mainServicesGraphicImageContainer">
                <div className="mainServicesGraphicImageWrapper">
                    <img className="mainServicesGraphicImage" src={ServicesGraphicImage.src} alt="" />
                </div>
            </div>
            <style jsx>{`
              .mainServicesGraphicImageContainer{
                  display:flex;
                  justify-content:center;
                  margin-top:10px;
                  margin-bottom:130px;           
              }              
              .mainServicesGraphicImageWrapper{
                  flex-basis: 60%;                    
              }
              .mainServicesGraphicImage{
                  width:100%;
                  height:auto;
              }
              @media only screen and (max-width: 767px) {
                .mainServicesGraphicImageWrapper{
                    flex-basis: 100%;   
                    padding:16px; 
                }
              }
              @media screen and (max-width: 1200px) and (min-width: 768px) {
                .mainServicesGraphicImageWrapper{
                    flex-basis: 90%;      
                }
            }
              `}</style>
        </>

    )
}

export default ServicesGraphicImageComponent;