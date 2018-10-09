import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Receiver from './Receiver';

class Receivers extends Component {

  /*state = {
    receivers: [
      {
        name: "Village School",
        type: "beneficient",
        addr: "0x0852622b974cbd63a95523c5ea047e6a22a1098",
        balance: "0.000000000"
      },
      {
        name: "Refugee Camp",
        type: "beneficient",
        addr: "0xab7e42b82d810c1ffde3d5955e86191b05ce1fe1",
        balance: "0.000000000"
      },
      {
        name: "A&A Bakery",
        type: "vendor",
        addr: "0xab7e42b82d810c1ffde3d5955e86191b05ce1fe1",
        balance: "0.000000000"
      },
      {
        name: "Comenius Publishing",
        type: "vendor",
        addr: "0xab7e42b82d810c1ffde3d5955e86191b05ce1fe1",
        balance: "0.000000000"
      },
      {
        name: "Kohn Trucking",
        type: "vendor",
        addr: "0xab7e42b82d810c1ffde3d5955e86191b05ce1fe1",
        balance: "0.000000000"
      },

    ]
  }
*/
  render() {
    return (
      <div id='Receivers' className='tile'>
        <div className='tile-header'>Receivers</div>

        {this.props.recordSet
          .map((receiver, index) =>
            <Receiver
                  key={index}
                  name={receiver.name}
                  category={receiver.type}
                  addr={receiver.addr}
                  balance={receiver.balance}
                  updateBalance={ ()=>this.props.updateBalance("receiver",index) }
                  handleClick={ this.props.handleClick }
            />
          )}

          <div className='tile-record-add'>
            <button className='btn-add-disabled'>Add New Beneficient</button>
            <button className='btn-add-disabled'>Add New Vendor</button>
          </div>
      </div>
    );
  }

}

Receivers.propTypes = {
  recordSet: PropTypes.array.isRequired,
  updateBalance: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
};


export default Receivers;
