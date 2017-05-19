/**
 * Created by Kyle on 5/19/17.
 */
import React, {Component} from 'react';

class FormInput extends Component{
    render(){
        let type = "text";
        if (this.props.type != null) {
            type = this.props.type;
        }
        return(

            <div className="form-group">
                <label>{this.props.label}</label>
                <input type={type} className="form-control" placeholder={this.props.placeholder} defaultValue={this.props.defaultValue} name={this.props.name}/>
            </div>
        )
    }
}

export default FormInput;