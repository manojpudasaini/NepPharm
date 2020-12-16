import Header from './Components/Header';
import Body from './Components/Route';
import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
     <Header/>
     <Body/>
    </BrowserRouter>
   
  );
}

export default App;
