import React, { Component } from "react";

import "./Detail.css";


var CurrencyFormat = require('react-currency-format');
class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }

  render() {
    const data = this.props.value;

    return (
      <div className={this.props.show ? "modal display-block" : "modal display-none"}>
        <div className="modal-main">
          <tbody>
            <tr>
              <td><b>Name</b></td>
              <td>
                <td>{data.name}</td>
              </td>
            </tr>
            <tr>
              <td><b>Climate</b></td>
              <td>
                <td>{data.climate}</td>
              </td>
            </tr>
            <tr>
              <td><b>Diameter</b></td>
              <td>
                <td>{data.diameter}</td>
              </td>
            </tr>
            <tr>
              <td><b>Orbital Period</b></td>
              <td>
                <td>{data.orbital_period}</td>
              </td>
            </tr>

            <tr>
              <td><b>Population</b></td>
              <td>
                <td><CurrencyFormat value={data.population} displayType={'text'} prefix={''} thousandSeparator={true} /></td>
              </td>
            </tr>
            <tr>
              <td><b>Rotation Period</b></td>
              <td>
                <td>{data.rotation_period}</td>
              </td>
            </tr>
            <tr>
              <td><b>Surface Water</b></td>
              <td>
                <td>{data.surface_water}</td>
              </td>
            </tr>
            <tr>
              <td><b>Terrain</b></td>
              <td>
                <td>{data.terrain}</td>
              </td>
            </tr>
            <tr>
              <td><b>Url</b></td>
              <td>
                <td><a href={data.url}>{data.url}</a></td>
              </td>
            </tr>
          </tbody>

          <div align="right" style={{ marginTop: 10 }} >
            <button style={{ width: 100 }} onClick={this.props.handleClose}>Close</button>
          </div>
        </div>

      </div>
    );
  }


}

export default Detail;