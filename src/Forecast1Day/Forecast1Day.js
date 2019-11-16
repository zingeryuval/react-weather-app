import React, {Component} from 'react';
import './Forecast1Day.css';

class Forecast1Day extends Component {
    weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    render() {
        return (
            <div className="Forecast1Day">
                <h1>{this.weekDays[this.props.day]}</h1>
                <img src={require(`../icons/${this.props.icon}.png`)} alt={this.props.description + ' image'}/>
                <p>{this.props.temperature + ' ° ' + this.props.description}</p>
            </div>
        );
    }
}

export default Forecast1Day;