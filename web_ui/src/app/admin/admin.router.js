import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ADHomeMain from "./components/home/main";
const AdminRouter = () => {
    return (
        <Switch>
            <Route exact path="/admin" component={ADHomeMain} />
        </Switch>
    );
}
export default AdminRouter;
