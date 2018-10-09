import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Receiver extends Component {
  render() {
    let category_name = null
    let disabledAttr = null
    let hasBalance = null
    const category_class = "tile-record-header-"+this.props.category;

    if( "beneficient" === (this.props.category) ){
        category_name = "Beneficient"
        hasBalance = false;
        disabledAttr = "disabled"

        return (
          <div className='tile-record'>
            <div className={category_class}>
              {category_name}:
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
              <input className='balance' readOnly value="Not Available" />
              <button
                    className='balance-refresh-disabled'
                    onClick={this.props.updateBalance}
                    disabled
                    >Refresh</button>
            </div>
            <button className='btn'  onClick={this.props.handleClick} >Send Thank You</button>
          </div>
          </div>
        );

    }else{
        category_name = "Vendor"
        hasBalance = true;
        disabledAttr = ""
        return (
          <div className='tile-record'>
            <div className={category_class}>
              {category_name}:
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
              Get Payment for #1
            </button>
            <button
              className='btn'
              onClick={ ()=>this.props.handleClick(this.props.addr,1) }>
              Get Payment for #2
            </button>
          </div>
          </div>
        );

    }

  }

}

Receiver.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  addr: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired,
  updateBalance: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
};


export default Receiver;
