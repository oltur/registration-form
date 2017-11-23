import React from 'react';
import { Link } from 'react-router-dom';
import { footer } from '../styles/footer.scss';
import Routes from '../routes';

const App = () =>
    <div>
        { Routes }
        <footer className={footer}>
            <Link to="/about">About</Link>
            <Link to="/step1">Registration form</Link>
        </footer>
    </div>;

export default App;
