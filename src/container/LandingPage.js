import React, { Component } from 'react';
import { connect } from 'react-redux';


import MyList from '../components/MyList/MyList';
import Recommendations from '../components/Recommendations/Recommendations';
import './LandingPage.css'

class LandingPage extends Component{
    
    render(){
        return(
            <div>
                <MyList />
                <Recommendations />
                <div className="listContainer">
                    <div className="listTitle">
                        <p>My list:</p>
                    </div>
                    <ul>
                        {this.props.myList.map( ele => 
                            <li key={ele.id} className="listItem" variant="info">{ele.title}</li>
                        )}
                    </ul>  
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        myList: state.mylist
    }
}



export default connect(mapStateToProps)(LandingPage);
