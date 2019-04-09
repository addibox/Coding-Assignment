import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import './Recommendations.css'

class Recommendations extends Component{
    state = {
        isMouseInside: false,
        selectedId: null
    }

    mouseEnterHandler = (id) => {
        this.setState({isMouseInside: true, selectedId: id});
    }

    mouseLeaveHandler = () => {
        this.setState({isMouseInside: false});
    }

    render(){
        return(
            <div className="basicRow">
                {this.props.recomList.map( ele => 
                    <div key={ele.id} className="recomList-row" 
                            onMouseEnter={() => this.mouseEnterHandler(ele.id)}
                            onMouseLeave={this.mouseLeaveHandler}>
                        <h4>{ele.title}</h4>
                        <div>
                            <img src={ele.img} alt={ele.title}/>
                            <div className="button-container">
                            {this.state.isMouseInside && this.state.selectedId === ele.id 
                                ?<Button variant="primary" onClick={()=>this.props.onAddButton(ele.id, ele.title)}>Add</Button> : null}
                            </div>   
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        recomList: state.recommendations,
        myList : state.mylist
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddButton : (id, title) => dispatch({type: 'addItem', itemId: id, itemTitle: title})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recommendations);