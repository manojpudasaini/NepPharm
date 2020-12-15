import Header from './Components/Header';
import Body from './Components/Body';
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
