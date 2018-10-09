import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Project extends Component {
  render() {
    return (
      <div className='tile-record'>
        <div className='tile-record-header-project'>
          Project:
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
          <button className='balance-refresh'  onClick={this.props.updateBalance} >Refresh</button>
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
/*
<button className='btn'>Init</button>
<button className='btn'>Ship</button>
<button className='btn'>Payment</button>
<button className='btn'>Close</button>
*/
Project.propTypes = {
  name: PropTypes.string.isRequired,
  addr: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired,
  updateBalance: PropTypes.func.isRequired,
  actionSet: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired
};


export default Project;
