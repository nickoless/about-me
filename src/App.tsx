import { Route, useLocation } from 'wouter';

import About from 'routes/About';
import Contact from 'routes/Contact';
import Home from 'routes/Home';
import Work from 'routes/Work';
import NavBar from 'components/NavBar';
import Cursor from 'components/Cursor';

const App = () => {
    const location = useLocation();

    return (
        <div>
            <Cursor />
            <NavBar />
            <Route path="" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />
            <Route path="/contact" component={Contact} />
        </div>
    );
};

export default App;
