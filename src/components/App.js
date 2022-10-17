import '../styles/App.scss';
import Navigation from "./Navigation";
import Sidebar from "./Sidebar"
import Cards from './Cards';


function App() {
    return (
    <div className="App">
        <Navigation/>
        <main>
            <div className="container">
                <Cards />
                <Sidebar />
            </div>
        </main>
        </div>
    
    
    )

}

export default App;
