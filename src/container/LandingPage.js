import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, ListGroup } from 'react-bootstrap';

import DisplayRow from '../components/DisplayRow/DisplayRow';
import './LandingPage.css';
import * as actionCreators from '../store/actions/actions';


class LandingPage extends Component{
    componentDidMount(){
        this.props.dispatch(actionCreators.fetchData()); 
    };
    componentDidUpdate(){
        // console.log(Object.keys(this.props.data)[0]);
    }
    
    render(){
        let myListTitle;
        if(this.props.myList){
            myListTitle = this.props.myList.map( ele => {
                return (
                    <p>{ele.title}</p>
                )
            });
        };
        return(
            
            <div>
                {/* Navigation bar*/}
                <Navbar bg="dark">
                    <Navbar.Brand href="#home">
                        <img src="/Netflix_logo.png"
                        width="85" height="60"
                        className="d-inline-block align-top"
                        alt="Netflix logo"/>
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="/" style={{color: 'white'}}>My List</Nav.Link>
                    <Nav.Link href="/" style={{color: 'white'}}>Recommendations</Nav.Link>
                    </Nav>
                </Navbar>

                {/* Display items*/}
                <div className="row-container">
                    <div className="row-title">
                        <p>Your List</p>
                    </div>
                    <DisplayRow type="myList"/>
                </div>
                <div className="row-container">
                    <div className="row-title">
                        <p>Recommendations</p>
                    </div>
                    <DisplayRow type="recommendations" /> 
                </div>

                <div className="title-list" >
                    <h5>Your List:</h5>
                    {myListTitle}
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.data,
        myList: state.myList,
        recommendations: state.recommendations
    }
}


export default connect(mapStateToProps)(LandingPage);
