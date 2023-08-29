
import './App.css';
// import Header from './Header';
import Student from './component/Student';
import Header from './component/Header';
import Movie from './component/Movie';

import movies from "./movie.json"
import { element } from 'prop-types';


function App() {
  let name = "Setera"
  return (
    <div className='App'>
      <Header />

      <div className='main'>
        {
          movies.map((element) => {
        
            return(
              <Movie 
              poster = {element.Poster}
              title={element.Title}
              year = {element.Year}
              runtime = {element.Runtime}
              

              />
          )
            

          })
        }
        

      </div>
  
    </div>

  );
    }

export default App;













// function App() {
//   let name = "Setera "
//   return (
//     <div className='App'>
//       <Student name="Setera "/>
    
  
//     </div>

//   );
//     }

// export default App;
