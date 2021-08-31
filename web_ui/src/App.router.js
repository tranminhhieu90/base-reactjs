import React from 'react';
import { Route, Switch } from 'react-router-dom';
import User from "./app/user/user.index";
import Admin from "./app/admin/admin.index";
export default function Router({ store, history }) {
    return (
        <Switch>
            <Route path="/admin" component={Admin} />
            <Route path="/" component={User} />
        </Switch>
    );
}
