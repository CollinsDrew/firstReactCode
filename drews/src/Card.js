import './App.css';

const Card = (props) => {

    const movieName = props.data.movieName;
    const duration  = props.data.duration;
    const Director  = props.data.Director;
    const Cast      = props.data.Cast;

    return (

        /* Card Div Starts */
        <div className = "card">

            <h1>{movieName}</h1>
            <h3>{duration}</h3>
            <h4>{Director}</h4>
            {Cast.map((actor)=>{
                return (
                    <p>{actor}</p>
                )
            })}
            
        </div>
        /* Card Div Ends */
    )
    

}

export default Card;