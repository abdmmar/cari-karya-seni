import React, {useState, useEffect} from 'react';

import Art from './components/art';

const API_KEY = `&apikey=${process.env.REACT_APP_API_KEY}`;

const GET_ALL_CLASSS = `https://api.harvardartmuseums.org/classification?size=59${API_KEY}`
const GET_OBJECT = 'https://api.harvardartmuseums.org/object?'

function App() {
  const [art, setArt] = useState([]);
  const [worksCount, setWorksCount] = useState(0);

  useEffect(() => {
    fetch(`${GET_OBJECT}classification=26&size=50${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setArt(data.records);
      setWorksCount(data.info.totalrecords);
    });
    
  }, []);

  return (
    <main>
      <p className="workCount">Showing {worksCount} Works</p>
      <div className="art-container">
        {art.map(art => 
          art.primaryimageurl &&
          <Art key={art.id} id ={art.id} data={art} />
        )}
      </div>
    </main>
  );
}

export default App;
