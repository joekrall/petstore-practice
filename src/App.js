import { useEffect, useState } from 'react';
import PetDisplay from './components/petDisplay'
import SearchContainer from './components/searchContainer';
import { getAllAvailablePets } from './utilities';
import './App.css';

const App = () => {

  const [pets, setPets] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {

    let componentMounted = true;
    getAllAvailablePets()
      .then((data) => {
        if(componentMounted) {
          setPets(data);
        }
      })

  }, []);

  return (
    <div className="App">
      <header className="App-header">
          Pet Store
      </header>
      {/* <SearchContainer searchTerm={searchTerm} setSearchTerm={setSearchTerm}/> */}
      <PetDisplay pets={pets} 
      // searchTerm={searchTerm}
      />
    </div>
  );
}

export default App;
