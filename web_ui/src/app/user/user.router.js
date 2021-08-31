import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeMain from "./components/home/main";
const UserRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomeMain} />
            <Route path='*' exact component={HomeMain} />
        </Switch>
    );
}
export default UserRouter;
