import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Auditor extends Component {
  render() {
    return (
      <div className='tile-record'>
        <div className='tile-record-header-auditor'>
          Auditor:
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
          <button
                className='balance-refresh'
                onClick={this.props.updateBalance}
          >Refresh</button>
        </div>
        <button
          className='btn'
          onClick={ ()=>this.props.handleClick(this.props.addr,0) }>
          Confirm #1
        </button>
        <button
          className='btn'
          onClick={ ()=>this.props.handleClick(this.props.addr,1) }>
          Confirm #2
        </button>
      </div>
      </div>
    );
  }

}

/*
{this.props.projectSet
  .map((index,key) =>
        <button
          key={key}
          className='btn'
          onClick={ ()=>this.props.handleClick(index) }>
          Confirm #{(index+1)}
        </button>
      )
}
*/

Auditor.propTypes = {
  name: PropTypes.string.isRequired,
  addr: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired,
  projectSet: PropTypes.array.isRequired,
  updateBalance: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
};


export default Auditor;
