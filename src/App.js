import './App.css';
import Search from './Components/Search';
import Profile from './Components/Profile';
import { GitProviderContext } from './Context/Contextdata';

function App() {
  return (
    <div className="App" >
      <GitProviderContext>
        <Search />
        <Profile />
      </GitProviderContext>

    </div>
  );
}

export default App;
