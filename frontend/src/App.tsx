import React from 'react';
import Header from './components/Header';

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <h2>Bienvenue sur mon projet !</h2>
                <p>Commencez à développer votre application ici.</p>
            </main>
        </div>
    );
};

export default App;
