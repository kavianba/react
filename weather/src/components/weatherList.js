import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from './chart';
import GoogleMap from './googleMap';

class WeatherList extends Component {
  renderList(cityData) {
    const name = cityData.city.name;
    const temperatureList = cityData.list.map(weather => weather.main.temp);
    const pressureList = cityData.list.map(weather => weather.main.pressure);
    const humidityList = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td>
          <GoogleMap lat={cityData.city.coord.lat} lon={cityData.city.coord.lon}/>
          <p>{name}</p>
        </td>
        <td>
          <Chart data={temperatureList} color="orange" units="K"></Chart>
        </td>
        <td>
          <Chart data={pressureList} color="blue" units="hPa"></Chart>
        </td>
        <td>
          <Chart data={humidityList} color="purple" units="%"></Chart>
        </td>
      </tr>
    )
  }

  render () {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderList)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps)(WeatherList);