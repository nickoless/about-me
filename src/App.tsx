import { Route, useLocation } from 'wouter';

import Cursor from 'components/Cursor';
import NavBar from 'components/NavBar';
import SideBar from 'components/SideBar';
import About from 'routes/About';
import Contact from 'routes/Contact';
import Home from 'routes/Home';
import Work from 'routes/Work';

const App = () => {
    const location = useLocation();

    return (
        <div style={{ display: 'flex' }}>
            <Cursor />
            <SideBar />
            <div style={{ height: '100%', width: '100%' }}>
                <NavBar />
                <Route path="" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/work" component={Work} />
                <Route path="/contact" component={Contact} />
            </div>
        </div>
    );
};

export default App;
