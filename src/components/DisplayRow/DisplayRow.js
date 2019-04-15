import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import './DisplayRow.css';
import * as actionCreators from '../../store/actions/actions';

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
        let itemsRow = <p>Loading..</p>;
        
        if(this.props.myList && this.props.type === "myList" ){
            itemsRow = 
                this.props.myList.map( ele => 
                    <div key={ele.id} className="item-row"
                            onMouseEnter={()=>this.mouseEnterHandler(ele.id)}
                            onMouseLeave={()=>this.mouseLeaveHandler} >
                        <div>
                            <h6>{ele.title}</h6>
                            <img src={ele.img} alt={ele.title}/>
                            <div className="button-container">
                                { this.state.isMouseInside && ele.id === this.state.selectedId
                                    ? <Button variant="danger" onClick={()=>this.props.onRemoveButton(ele.id, ele.title)}>Remove</Button> 
                                    : null }
                            </div>
                        </div>
                    </div>
            );
        };

        if(this.props.recommendations && this.props.type === "recommendations"){
            itemsRow = 
                this.props.recommendations.map( ele => 
                    <div key={ele.id} className="item-row" 
                            onMouseEnter={() => this.mouseEnterHandler(ele.id)}
                            onMouseLeave={this.mouseLeaveHandler}>
                        <div>
                            <h6>{ele.title}</h6>
                            <img src={ele.img} alt={ele.title}/>
                            <div className="button-container">
                            {this.state.isMouseInside && this.state.selectedId === ele.id 
                                ? <Button variant="primary" onClick={()=>this.props.onAddButton(ele.id, ele.title)}>Add</Button> : null}
                            </div>   
                        </div>
                    </div>
            );
        };

        return(
            <div className="basicRow">
                {itemsRow}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        myList: state.myList,
        recommendations: state.recommendations
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRemoveButton : (id, title) => dispatch(actionCreators.removeItem(id, title)),
        onAddButton : (id, title) => dispatch(actionCreators.addItem(id, title))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(MyList);