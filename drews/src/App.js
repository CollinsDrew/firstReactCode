// import logo from './logo.svg';
import './App.css';
import Card from './Card';
const App = () => {

const movies = [
  {
    movieName: "Human Centipede",
    duration: "1 hr 30 mins",
    Director: "some wierdo",
    Cast: ["Main Wierdo","Girl Wierdo", "Poor Wierdo","Poor attached wierdo"]
  },

  {
    movieName: "How to fly your dragon",
    duration: "2 hr 10 mins",
    Director: "Dragon man",
    Cast: ["Dragon kid","Tribe dad", "Dragon girl","Fat dragon"]
  }
]
  
  return (


    <div className="container">

      <div className="header">
          <h1 className="main-text"> My First React page 29/09/2022</h1>
      </div>

      <div className="cards-container">

       {movies.map( (value) => {
        return (
          <Card data={value}/>
        )
       })}
      
          
      </div>

      

      <div className="footer">

      </div>
          
    </div>
  );   
}

export default App;
