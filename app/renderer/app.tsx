import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
// import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import Title from './title/index'

function App(){
    return (
        <Router />
        // <Router>
        //     <Switch>
        //         <Route path="/">
        //             <Title text="sssss"></Title>
        //             <div>可视化简历平台</div>
        //             <div>这是Electron + React </div>
        //         </Route>
        //     </Switch>
        // </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));