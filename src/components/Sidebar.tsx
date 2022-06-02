import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { truncate } from '../utils';

function Sidebar(){

    const {active,account,deactivate} = useWeb3React();


    async function disconnect(){
      try {
          deactivate();
      }catch (exc){
          console.log(exc);
      }
  }

    const html = <div className="bg-black" id="sidebar-wrapper">
  <div className="sidebar-heading bg-black">ABC PROJECT</div>
  <div className="sidebar-footer bg-black">
    <a className="btn btn-lg btn-outline" href="#!"><span className="fa fa-user icon" />{active ? truncate(account) : "0x0"}</a>
    <a className="btn btn-lg btn-sidebar active" href="#!"><span className="fa fa-wallet icon" />Transaction</a>
    <a className="btn btn-lg btn-sidebar" href="#!"><span className="fa fa-sync icon" />Swap</a>
    <a className="btn btn-lg btn-sidebar" href="#!"><span className="fa fa-coins icon" />Liquidity</a>
    <a className="btn btn-lg btn-sidebar" href="#!"><span className="fa fa-seedling icon" />Farm</a>
    <a className="btn btn-lg btn-sidebar" href="#!"><span className="fa fa-link icon" />Bridge</a>
    <a className="btn btn-lg btn-sidebar" href="#!"><span className="fa fa-piggy-bank icon" />Staking</a>
    {active ? <a onClick={disconnect} className="btn btn-lg btn-logout bottom-position"><span className="fa fa-sign-out-alt icon"  />Logout</a> : ''}
  </div>
</div>
;


    return html;



}


export default Sidebar;