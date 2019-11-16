import React from 'react';
import './App.css';
import Forecast1Day from "./Forecast1Day/Forecast1Day";

class App extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            forecasts: []
        }
    }

    componentDidMount() {
        fetch("https://my-json-server.typicode.com/evyros/react-weather-app/forecast")
            .then(res => res.json())
            .then(forecasts => {
                this.setState({forecasts});
                console.log(forecasts);
            });
    }

    render() {
        return (
            <div className="Weather">
                {this.state.forecasts.map(forecastFor1Day => {
                    return <div key={forecastFor1Day.day}>
                            <Forecast1Day
                            day={forecastFor1Day.day}
                            icon={forecastFor1Day.icon}
                            temperature={forecastFor1Day.temperature}
                            description={forecastFor1Day.description}/>
                        </div>
            })}
            </div>
        );
    }

}

export default App;
