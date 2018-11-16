import React, {Component} from 'react';
import './Navbar.css';
import {Link} from '@reach/router'
import * as api from '../../Api'

class Navbar extends Component {
    state ={
        topics :[]
    }
    render(){
    
    return (
        <nav>
            <div className="navbar">
            <Link to = '/' onClick = {this.handleHome} className='home'>Home</Link>
  {/* <a href="#home">Home</a>
  <a href="#news">News</a> */}
  <div className="dropdown">
    <button className="dropbtn">Topics 
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content" >
    {this.state.topics.map(topic => <Link to={`/${topic.slug}`} key ={topic._id} value ={topic.slug} onClick = {() => this.handleClick(topic.slug)}>{topic.title} </Link>)}
    </div>
  </div> 
</div>
        </nav>
    )
}
componentDidMount =() => {
    this.fetchTopics()
}
fetchTopics =() => {
api.getTopics()
.then(topics => {
    this.setState({
        topics
    })
})
}
handleClick =(topic) => {
    this.props.setTopic(topic)
}
handleHome = () => {
    this.props.getHome()
}
}

export default Navbar