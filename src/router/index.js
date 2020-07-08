import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom';
import Borrow  from '../components/borrow';
import  Test from '../components/Test';
import  Lend from '../components/lend';
import Vault from "../components/Vault";
import Deposit from '../components/Deposit';
import Loan from '../components/Loan'

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Borrow}/>
            <Route exact path="/test" component={Test}/>
            <Route exact path="/lend" component={Lend}/>
            <Route exact path="/valut" component={Vault}/>
            <Route exact path="/deposit" component={Deposit}/>
            <Route exact path="/loan" component={Loan}/>
        </Switch>
    </HashRouter>
);

export default BasicRoute;