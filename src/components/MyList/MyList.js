import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import './MyList.css';

class MyList extends Component{
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
                {this.props.myList.map( ele => 
                    <div key={ele.id} className="mylist-row"
                            onMouseEnter={()=>this.mouseEnterHandler(ele.id)}
                            onMouseLeave={()=>this.mouseLeaveHandler}>
                        <h4>{ele.title}</h4>
                        <div>
                            <img src={ele.img} alt={ele.title}/>
                            <div className="button-container">
                                { this.state.isMouseInside && ele.id === this.state.selectedId
                                    ? <Button variant="danger" onClick={()=>this.props.onRemoveButton(ele.id, ele.title)}>Remove</Button> : null }
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
        myList: state.mylist
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRemoveButton : (id, title) => dispatch({type: 'removeItem', itemId: id, itemTitle: title})
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(MyList);