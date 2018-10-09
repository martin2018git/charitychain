import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Donor extends Component {

  render() {
    return (
      <div className='tile-record'>
        <div className='tile-record-header'>
          Donor:
          <a href='lookup'>{this.props.name}</a>
        </div>
        <div className='tile-record-body'>
        <div className='field-name'>
          Address:
        </div>
        <input className='addr' readOnly value={this.props.addr} />
        <div className='field-name'>
          Balance:
        </div>
        <div className='bal-block'>
          <input className='balance' readOnly value={this.props.balance} />
          <button className='balance-refresh' onClick={this.props.updateBalance} >Refresh</button>
        </div>
        {this.props.actionSet
          .map((action, index) =>
              <button className='btn'
                key={index}
                onClick={ ()=>this.props.handleClick(this.props.addr,index) }>
                  {action.name}
            </button>
        )}

      </div>
      </div>
    );
  }

}

Donor.propTypes = {
  name: PropTypes.string.isRequired,
  addr: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired,
  updateBalance: PropTypes.func.isRequired,
  actionSet: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired
};


export default Donor;
