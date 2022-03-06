import React, { Component } from 'react'
import axios from 'axios'

export default class PostList extends Component {
    state={post : ""}
    componentDidMount() { 
    //     fetch('https://jsonplaceholder.typicode.com/1')
    // .then(response => response.json())
    // .then(data => 
    //     this.setState({post:data}))
    axios.get("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => this.setState({post:res.data}))   
}
  render() {
    return (
      <div>PostList
          <br/>
          {this.state.post.title}
      </div>
    )
  }
}
