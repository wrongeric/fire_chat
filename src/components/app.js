import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Chat from './chat';
import Lobby from './lobby';


const App = () => (
    <div className="container">
        <h1 className="center-align">Fire <img src="https://apps.timwhitlock.info/static/images/emoji/emoji-android/1f525.png" /> Chat</h1>
        <Lobby />
    </div>
);

export default App;
