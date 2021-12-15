const ColorLine = () => {
    return (
        <>
            <div className='mainContainer'>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((obj) => {
                    return (<div key={obj}></div>)
                })}
            </div>
            <style jsx>{`
               .mainContainer{
                   display:flex;
               }
               .mainContainer  div:first-child{
                   background-color: firebrick;
                   flex-basis:12.5%;         
               }
               .mainContainer  div:nth-child(2){
                background-color: coral;
                flex-basis:12.5%;           
            }
            .mainContainer  div:nth-child(3){
                background-color: orange;
                flex-basis:12.5%;                
            }
            .mainContainer  div:nth-child(4){
                background-color: limegreen;
                flex-basis:12.5%;           
            }
            .mainContainer  div:nth-child(5){
                background-color: lightseagreen;
                flex-basis:12.5%;                
            }
            .mainContainer  div:nth-child(6){
                background-color: #0076c8;
                flex-basis:12.5%;
                height:30px;               
            }
            .mainContainer  div:nth-child(7){
                background-color: darkslateblue;
                flex-basis:12.5%;                
            }
            .mainContainer  div:nth-child(8){
                background-color: gray;
                flex-basis:12.5%;                
            }
               
           `}</style>
        </>
    )

}

export default ColorLine;