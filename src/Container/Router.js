import React, { Component } from 'react';

import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import './Router.css'
import PostCard from './Posts/PostCard';
import asyncComponent from '../async/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Router extends Component {
    state = {
        auth: true
    }

    render() {
        return (
            <div className="router">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'bold'
                                }}>Posts</NavLink>
                            </li>
                            <li>
                                <NavLink to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }}
                                >New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                    <Route path="/posts" component={PostCard} />
                    <Route render={() => <h1>Welcome to homepage</h1>} />
                </Switch>
            </div>
        )
    };
}
export default Router