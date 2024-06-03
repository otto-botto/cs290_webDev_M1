import racquetPic from './assets/racquet.jpeg'

function Card(){
    
    
    return(
        <div className="card">
            <img className="card-image" src={racquetPic} alt="picture of a tennis racquet"></img>
            <h2 className="card-title">Lora Dushanova</h2>
            <p className = "card-text">I am a financial analyst and play tennis.</p>


        </div>

    );
}

export default Card