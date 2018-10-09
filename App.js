import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
//import Web3 from './Web3';
import getWeb3 from './js/getWeb3'


//import AppHeader from './AppHeader';
import Donors from './Donors';
import Projects from './Projects';
import Auditors from './Auditors';
import Receivers from './Receivers';

const contract = require('truffle-contract')

function AppHeader(props){
  return(
    <div className='AppHeader'>
      {props.title}
    </div>
  );
}

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      donors: [],
      web3: null,
      accounts: [],
      projects : [],
      auditors : [],
      receivers : [],
    }

    this.connectAccountsCallback = this.connectAccounts.bind(this)

  }



componentDidMount() {
  // inititalize web3 interface
  getWeb3
  .then(results => {
    this.setState({
      web3: results.web3,
      accounts: results.accounts
    })

    // Instantiate contract once web3 provided.
    //const addr = this.state.web3.eth.accounts;
    //console.log('Web3 instance loaded.'+addr)

    console.log("before callback")
    this.connectAccountsCallback()

  })
  .catch((e) => {
    console.log('Error finding web3.'+e)
  })
}

componentWillMount(){
}

connectAccounts(){

  console.log("executing callback")

  this.state.web3.eth.getAccounts((error, accounts) => {
      let web3Accounts = []
      var n = accounts.length
      for( var i=0; i<n; i++ ){
          //console.log("Obtained Account #"+i+":: "+accounts[i])
          web3Accounts.push(accounts[i])
      }
      return( web3Accounts )

  }).then((accounts)=>{

  let newState = this.state;

  newState.donors = [
    {
      name: "Marty",
      addr: "0x0" /*"0x7e168622b974cbd63a95523c5ea047e6a22a1098"*/,
      balance: "100.000000000"
    },
    {
      name: "Karel",
      addr: "0x0" /* "0x7bd5e42b82d810c1ffde3d5955e86191b05ce1898"*/,
      balance: "100.000000000"
    },
    {
      name: "Ferdinand",
      addr: "0x0", //"0x91b6ac277261085eac5c5f7639d8f5c0c2e677548",
      balance: "100.000000000"
    }
  ];

  newState.projects = [
  {
    name: "Enmergency Food Dispatch",
    addr: "0x0",
    balance: "0.000000000",
    projects: [0,1]
  },
  {
    name: "One Laptop per Child",
    addr: "0x0",
    balance: "0.000000000",
    projects: [0]
  }
  ];

  newState.receivers = [
        {
          name: "Village School",
          type: "beneficient",
          addr: "Not Applicable",
          balance: "0.000000000"
        },
        {
          name: "Refugee Camp",
          type: "beneficient",
          addr: "Not Applicable",
          balance: "0.000000000"
        },
        {
          name: "A&A Bakery",
          type: "vendor",
          addr: "0x0",
          balance: "0.000000000",
          projects: [0,1]
        },
        {
          name: "Comenius Publishing",
          type: "vendor",
          addr: "0x0",
          balance: "0.000000000",
          projects: [0]
        },
        {
          name: "Kohn Trucking",
          type: "vendor",
          addr: "0x0",
          balance: "0.000000000",
          projects: [0,1]
        },

      ];


  newState.auditors = [
    {
      name: "Inspector Smith",
      addr: "0x0",
      balance: "10.000000000"
    },
    {
      name: "Mr. Dewan (Principal)",
      addr: "0x0",
      balance: "10.000000000"
    },
  ];

  for( var i=0; i<3; i++ ){
      const addr = accounts[i];
      if( typeof addr === "undefined" ) addr = "Awaiting..."
      console.log("Loading donor "+i+" @ "+addr);
      newState.donors[i].addr = addr;
  }

  let j=0;
  for( var i=3; i<5; i++ ){
      const addr = accounts[i];
      if( typeof addr === "undefined" ) addr = "Awaiting..."
      console.log("Loading project "+i+" @ "+addr);
      newState.projects[j++].addr = addr;
  }

  j=0;
  for( var i=5; i<7; i++ ){
      const addr = accounts[i];
      if( typeof addr === "undefined" ) addr = "Awaiting..."
      console.log("Loading auditor "+i+" @ "+addr);
      newState.auditors[j++].addr = addr;
  }

  j=2;
  for( var i=7; i<10; i++ ){
      const addr = accounts[i];
      if( typeof addr === "undefined" ) addr = "Awaiting..."
      console.log("Loading vendor "+i+" @ "+addr);
      newState.receivers[j++].addr = addr;
  }

  this.setState( newState );
});

}



// ==== MAIN SCREEN STATE CHANGES =====================================
updateBalance( objectType, key ){
  if( objectType === "donor" ){
    const addr = this.state.donors[key].addr;
    this.state.web3.eth.getBalance(addr,(error, currentBalance) => {
      this.state.donors[key].balance = this.state.web3.utils.fromWei(currentBalance,"ether").toString();
      this.setState( this.state );
    })
  }//if

  if( objectType === "project" ){
    const addr = this.state.projects[key].addr;
    this.state.web3.eth.getBalance(addr,(error, currentBalance) => {
      this.state.projects[key].balance = this.state.web3.utils.fromWei(currentBalance,"ether").toString();
      this.setState( this.state );
    })
  }//if

  if( objectType === "auditor" ){
    const addr = this.state.auditors[key].addr;
    this.state.web3.eth.getBalance(addr,(error, currentBalance) => {
      this.state.auditors[key].balance = this.state.web3.utils.fromWei(currentBalance,"ether").toString();
      this.setState( this.state );
    })
  }//if

  if( objectType === "receiver" ){
    const addr = this.state.receivers[key].addr;
    this.state.web3.eth.getBalance(addr,(error, currentBalance) => {
      this.state.receivers[key].balance = this.state.web3.utils.fromWei(currentBalance,"ether").toString();
      this.setState( this.state );
    })
  }//if

}

  updateBalanceOfDonors( object, key ){
    const newBal = this.state.donors[key].balance*1.0+1;
      //alert("Updating balance for "+key + " to " + newBal);
      this.state.donors[key].balance = newBal.toString();
      this.setState( this.state );
  }

  updateBalanceOfSmartContract( key ){
      const newBal = this.state.projects[key].balance*1.0+1;
      //alert("Updating balance for Contract #"+key + " to " + newBal);
      this.state.projects[key].balance = newBal;
      this.setState( this.state );
  }

  updateBalanceOfAuditors( object, key ){
    const newBal = this.state.auditors[key].balance*1.0+1;
      //alert("Updating balance for "+key + " to " + newBal);
      this.state.auditors[key].balance = newBal.toString();
      this.setState( this.state );
  }

  updateBalanceOfReceivers( object, key ){
    const newBal = this.state.receivers[key].balance*1.0+1;
      //alert("Updating balance for "+key + " to " + newBal);
      this.state.receivers[key].balance = newBal.toString();
      this.setState( this.state );
  }

  handleDonate(addr,index){
      console.log("Donating 100000 from "+addr+" to project #"+index);
      this.sendAmount( addr, this.state.projects[index].addr, 100000 )
  }

  handleAudit(addr,index){
      console.log("Auditor "+addr+" confirmed project #"+index+" receives reward of 1000");
      this.sendAmount( this.state.projects[index].addr, addr, 1000 )
  }

  handlePayment(addr,index){
      console.log("Vendor "+addr+" received payment of 190000 for project "+index);
      this.sendAmount( this.state.projects[index].addr, addr, 190000)
  }

  handleSmartContractEvent(addr,event){
      console.log("Smart contract at "+addr+" triggered event "+event);
      //this.sendAmount( addr, this.state.projects[event].addr, 1 )
}

// ===== Transactions to Interract with Ethereum ======================

sendAmount( fromAddr, toAddr, amount ){

      var tx = this.state.web3.eth.sendTransaction({
              from: fromAddr,
              to: toAddr,
              value: amount,
          }, function(err, transactionHash) {
              if (err){
                  console.log("Sedning transaction error "+err)
              }else{
                  console.log("Transaction completed!</br/>Hash= "+transactionHash+"<br/>Amount of "+amount+" sent from "+fromAddr+" to "+toAddr )
              }
          })
}


/* Examples to interract with Smart Contracts


initContract = function() {
    $.getJSON('LeaderBoard.json', function(data) {
        // Get the necessary contract artifact file and instantiate it with truffle-contract
        var LeaderBoardArtifact = data;
        contracts.LeaderBoard = TruffleContract(LeaderBoardArtifact);

        // Set the provider for our contract
        contracts.LeaderBoard.setProvider(web3Provider);
        contracts.LeaderBoard.deployed().then(function(instance) {
            leaderBoardInstance = instance;
            console.log(leaderBoardInstance.address);
            bindLogs();
            // Use our contract to retrieve and mark the adopted pets
            loadList();
        });

    });
}

_getUserBal = function (addr, idx) {
      leaderBoardInstance.balanceOf.call(addr).then(function (amount) {
          amount = amount.toNumber();
          _display_text(idx, "balance", web3.fromWei(amount + "", "ether") + " ETH");
      });

      leaderBoardInstance.sloganOf.call(addr).then(function (str) {
          _display_text(idx, "slogan", b64decode(str));
      });


      lst.push(leaderBoardInstance.board.call(i).then(function (addr) {
              _get_item_callback(10-i, addr);
          }));

          loadList = function() {
                let lst = [];
                for (let i = 9; i > -1 ; i--) {
                    lst.push(leaderBoardInstance.board.call(i).then(function (addr) {
                        _get_item_callback(10-i, addr);
                    }));
                }

                Promise.all(lst).then(function() {
                    if (!is_user_on_board) {
                        loadUserCard();
                    } else {
                         $('#user-acct-container').hide();
                    }
                })
            }

//=====================================================================================

const contract = require('truffle-contract')
const weightWagers = contract(WeightWagers)
weightWagers.setProvider(this.state.web3.currentProvider)

// Declaring this for later so we can chain functions on SimpleStorage.
var weightWagersInstance;
var _this = this;

this.state.web3.eth.getAccounts((error, accounts) => {
    weightWagers.deployed().then((instance) => {
      weightWagersInstance = instance
      return weightWagersInstance.getWagers({from: accounts[0]});
    }).then((result, err) => {
      //Returning an array of arrays in the best way
      //Solidity can return all the user's wagers, so
      //lets transform the data into a useful format
      const wagers = this.transformWagers(result);
      _this.setState({
        wagers: wagers,
        weightWagersInstance: weightWagersInstance,
        account: accounts[0],
      });
      if (accounts[0] === this.owner) {
        return weightWagersInstance.getAdminStuff.call({from: accounts[0]})
      }
    }).then((result, err) => {
      if (result) {
        _this.setState({
          stopped: result[0],
          rewardMultiplier: result[1].toNumber(),
        });
      }
    });
  });
}



*/


// ===== RENDERING ====================================================
  render() {
    return (
      <div className='canvas'>
        <AppHeader title='COLB - Charity Blockchain POC (version 0.1)'/>
        <Donors
              recordSet={this.state.donors}
              updateBalance={this.updateBalance.bind(this)}
              handleClick={this.handleDonate.bind(this)}
        />
        <div className='tile-container'>
        <div className='tile-container-inside'>
          <Projects
              recordSet={this.state.projects}
              updateBalance={this.updateBalance.bind(this)}
              handleClick={this.handleSmartContractEvent.bind(this)}
          />
          <Auditors
            recordSet={this.state.auditors}
            updateBalance={this.updateBalance.bind(this)}
            handleClick={this.handleAudit.bind(this)}
          />
        </div>
        </div>
        <Receivers
          recordSet={this.state.receivers}
          updateBalance={this.updateBalance.bind(this)}
          handleClick={this.handlePayment.bind(this)}
        />
      </div>
    );
  }
}


export default App;
