import { useWeb3React } from '@web3-react/core';
import React , {useState} from 'react';
import { Modal } from 'react-bootstrap';
import { injected , walletconnect } from '../wallet/connectors';



function ModalConnect({show,setShow}:any){

    const {active , account , library , connector,activate,deactivate} = useWeb3React();
    
    
 
    async function connectInjected(){
        try{
            await activate(injected);
            setShow(false);
        }catch (exc){
            console.log(exc);
        }
    }

    async function connectWalletConnect(){
      try{
        await activate(walletconnect);
        setShow(false);
    }catch (exc){
        console.log(exc);
    
    }}

    const html = (


        <Modal  show={show} onHide={setShow}>
              <Modal.Header className="bg-black">
              <h4 className="modal-title" id="exampleModalLabel">Select Wallet</h4>
                {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button> */}
              </Modal.Header>
              <Modal.Body className="bg-black">
              <ul className="list-group connectors-list">
                  <li onClick = {connectInjected} className="
                      list-group-item
                      d-flex
                      justify-content-between
                      align-items-center
                      wallet-list
                    ">
                    Metamask
                    <img className='wallet-logo' src="assets/img/metamask.png" />
                  </li>
                  <li onClick = {connectWalletConnect} className="
                      list-group-item
                      d-flex
                      justify-content-between
                      align-items-center
                      wallet-list
                    ">
                    WalletConnect
                    <img className="wallet-logo" src="assets/img/walletconnect.svg" />
                  </li>
                </ul>
              </Modal.Body>
        </Modal>

        );
    return html;


}


export default ModalConnect;

{/* <div className="modal fade" id="ConnectModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content bg-black">
              <div className="modal-header">
                <h4 className="modal-title" id="exampleModalLabel">Select Wallet</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <p>
                  Connect to the site below with one of our available wallet
                  providers.
                </p>
                <ul className="list-group">
                  <li onClick = {connect} className="
                      list-group-item
                      d-flex
                      justify-content-between
                      align-items-center
                      wallet-list
                    ">
                    Metamask
                    <img src="assets/img/metamask.png" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}