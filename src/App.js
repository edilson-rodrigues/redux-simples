import React from 'react';
import AppStyle from './AppStyle';
import Intervalo from './components/interval';
import Average from './components/Average';
import Sum from './components/Sum';
import Draw from './components/Draw';


const App = () => (
    <AppStyle>
        <AppStyle.Title>
            Exercises React-Redux (Basic)
        </AppStyle.Title>
        <AppStyle.Row>
            <Intervalo
            />
        </AppStyle.Row>
        <AppStyle.Row>
            <Average/>
            <Sum/>
            <Draw/>
        </AppStyle.Row>
    </AppStyle>
);


export default App;
