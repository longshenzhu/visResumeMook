import React from 'react';
import { ReactDOM } from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App(){
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <div>可视化简历平台</div>
                    <div>这是Electron + React </div>
                </Route>
            </Switch>
        </Router>
    );
}

ReactDom.render(<App />, document.getElementById('root'));