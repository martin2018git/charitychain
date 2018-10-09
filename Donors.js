import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Donor from './Donor';

class Donors extends Component {

/*  state = {
    donors: [
      {
        name: "Martin",
        addr: "0x7e168622b974cbd63a95523c5ea047e6a22a1098",
        balance: "100.000000000"
      },
      {
        name: "Karel",
        addr: "0x7bd5e42b82d810c1ffde3d5955e86191b05ce1898",
        balance: "100.000000000"
      },
      {
        name: "Ferdinand",
        addr: "0x91b6ac277261085eac5c5f7639d8f5c0c2e677548",
        balance: "100.000000000"
      }

    ]
  }
*/

/*
  updateBalance( key ){
      const newBal = this.props.recordSet[key].balance*1.0+1;
      //alert("Updating balance for "+key + " to " + newBal);
      this.props.recordSet.balance = newBal;
      this.props.updateBalance( key );
  }
*/

  render() {
    return (
      <div id='Donors' className='tile'>
        <div className='tile-header'>Donors</div>

        {this.props.recordSet
          .map((donor, index) =>
            <Donor
                  key={index}
                  name={donor.name+" ("+index+")"}
                  addr={donor.addr}
                  balance={donor.balance}
                  updateBalance={ ()=>this.props.updateBalance("donor",index) }
                  actionSet={ [
                          {key: 1, name:"Donate to #1"},
                          {key: 2, name:"Donate to #2"}
                          ]}
                  handleClick={this.props.handleClick}
            />
          )}

          <div className='tile-record-add'>
            <button className='btn-add'>Register New Donor</button>
          </div>
      </div>
    );
  }
}

Donors.propTypes = {
  recordSet: PropTypes.array.isRequired,
  updateBalance: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Donors;
