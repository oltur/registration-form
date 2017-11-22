import React from 'react';
import { Link } from 'react-router-dom';
import { footer } from '../styles/footer.scss';
import Routes from '../routes';

const App = () =>
    <div>
        { Routes }
        <footer className={footer}>
            <Link to="/">Filterable Table</Link>
            <Link to="/about">About</Link>
            <Link to="/step1">Step #1</Link>
            <Link to="/step2">Step #2</Link>
            <Link to="/step3">Step #3</Link>
        </footer>
    </div>;

export default App;
