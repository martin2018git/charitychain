import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Auditor from './Auditor';

class Auditors extends Component {

/*
  state = {
    auditors: [
      {
        name: "Inspector Smith",
        addr: "0x0852622b974cbd63a95523c5ea047e6a22a1098",
        balance: "10.000000000"
      },
      {
        name: "Mr. Dewan (Principal)",
        addr: "0xab7e42b82d810c1ffde3d5955e86191b05ce1fe1",
        balance: "10.000000000"
      },

    ]
  }
*/
/*  render() {
    return (
      <div id='Auditors' className='tile'>
        <div className='tile-header'>Auditors</div>
        {this.props.recordSet
          .map((auditor, index) =>
                <Auditor
                        key={index}
                        name={auditor.name+" ("+index+")"}
                        addr={auditor.addr}
                        balance={auditor.balance}
                        updateBalance={ ()=>this.props.updateBalance("auditor",index) }
                        actionSet={ [
                                {key: 1, name:"Confirm"},
                                {key: 2, name:"Reject"}
                                ]}
                        handleClick={this.props.handleClick}
                  />
                )}

                <div className='tile-record-add'>
                  <button className='btn-add-disabled'>Register New Auditor</button>
                </div>
            </div>
          );
        }
      }
*/
      render() {
        return (
          <div id='Auditors' className='tile'>
            <div className='tile-header'>Auditors</div>
            {this.props.recordSet
              .map((auditor, index) =>
                    <Auditor
                            key={index}
                            name={auditor.name+" ("+index+")"}
                            addr={auditor.addr}
                            balance={auditor.balance}
                            updateBalance={ ()=>this.props.updateBalance("auditor",index) }
                            projectSet={auditor.projects}
                            handleClick={this.props.handleClick}
                      />
                    )}

                    <div className='tile-record-add'>
                      <button className='btn-add-disabled'>Register New Auditor</button>
                    </div>
                </div>
              );
            }
          }

Auditors.propTypes = {
        recordSet: PropTypes.array.isRequired,
        updateBalance: PropTypes.func.isRequired,
        handleClick: PropTypes.func.isRequired
      };


export default Auditors;
