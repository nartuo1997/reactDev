import React, { Component } from 'react';
import axios from '../../axios';
import { Route } from 'react-router-dom';

import Post from '../../Component/PostContent/Post'
import './PostCard.css'

class PostsCard extends Component {
    state = {
        posts: [],
        error: false
    } //create a state for post

    componentDidMount() {
        console.log(this.props);
        axios.get('/posts/')    // get HTTP request
            .then(response => {
                const posts = response.data.slice(0, 3);
                const postData = posts.map(post => {
                    return {
                        ...post
                    }

                });
                this.setState({     // save data from API
                    posts: postData
                })
            }).catch(e => {
                console.error(e);
                this.setState({ error: true })
            })
    }

    render() {
        let post = {};
        if (!this.state.error) {
            post = this.state.posts.map(data => {
                return (
                    <Post
                        key={data.id}
                        title={data.title}
                        body={data.body}

                    />

                )
            })
        }


        return (
            <div>
                <section className="Posts">
                    {post}
                </section>
                <Route path={this.props.match.url + '/:id'} />
            </div>
        );
    }
}

export default PostsCard