
import React, { useState, useMemo } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";


import {
    ConnectionProvider,
    WalletProvider,
  } from "@solana/wallet-adapter-react";
  import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
  import {
    LedgerWalletAdapter,
    PhantomWalletAdapter,
    SlopeWalletAdapter,
    SolflareWalletAdapter,
    SolletExtensionWalletAdapter,
    SolletWalletAdapter,
    TorusWalletAdapter,
  } from "@solana/wallet-adapter-wallets";
  import {
    WalletModalProvider,
    WalletModal,
    WalletModalButton,
    WalletIcon,
  } from "@solana/wallet-adapter-react-ui";
  import { clusterApiUrl } from "@solana/web3.js";
  
  require("@solana/wallet-adapter-react-ui/styles.css");
  
  export default function Wallet() {
    const navigate = useNavigate();
  
    const [isOpen, setIsOpen] = useState(true);
  
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);
    const wallets = useMemo(
      () => [
        new PhantomWalletAdapter(),
        new SlopeWalletAdapter(),
        new SolflareWalletAdapter({ network }),
        new TorusWalletAdapter(),
        new LedgerWalletAdapter(),
        new SolletWalletAdapter({ network }),
        new SolletExtensionWalletAdapter({ network }),
      ],
      [network]
    );
      

    return(
        <div>
        <div className="main">Please Connect Your wallet</div>

      <Modal
        dialogClassName="modal-70w"
        show={isOpen}
        onHide={() => setIsOpen(false)}
      >
        <Modal.Header>
          <Modal.Title>Connect to a wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
              <WalletModalProvider>
                <WalletModal>
                  <WalletModalButton />
                  <WalletIcon />
                </WalletModal>
              </WalletModalProvider>
            </WalletProvider>
          </ConnectionProvider>
        </Modal.Body>
      </Modal>
    </div>

    )

}

