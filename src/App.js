import logo from './logo.svg';
import './App.css';
import Popup from 'reactjs-popup';
import React from 'react';
import Wallet from './Wallet';

export default function App() {
  return (

    <div className="App">
      <head>
        <img src={logo} className="App-logo" alt="logo" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&amp;display=swap"
          rel="stylesheet"
        />
      </head>
      <div id="root">
        <canvas></canvas>
        <div className="Toastify"></div>
        <div className="z-0 flex flex-col w-full md:flex-row md:min-h-screen">
          <div className="flex md:hidden">
            <div className="relative flex items-center justify-between w-full px-4 py-4 bg-white shadow-2xl md:px-8">
              <a
                className="ml-auto text-lg font-medium tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
                href="#/"
              >
                <img
                  className="w-28"
                  src="https://i.postimg.cc/c17RWyR0/logo.jpg"
                  alt="solminter logo"
                />
              </a>
              <button className="absolute flex items-center justify-center p-2 overflow-hidden rounded-full left-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-Width="0"
                  viewBox="0 0 1024 1024"
                  className="text-xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="fixed inset-0 flex flex-col flex-shrink-0 w-full h-full text-gray-700 bg-white md:left-0 md:inset-y-0 md:w-72 dark-mode:text-gray-200 dark-mode:bg-gray-800">
              <div className="relative flex flex-row items-center justify-between flex-shrink-0 px-4 py-4 md:px-8">
                <button className="absolute flex items-center justify-center p-2 overflow-hidden rounded-full md:hidden left-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-Width="0"
                    viewBox="0 0 1024 1024"
                    className="text-xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                  </svg>
                </button>
                <a
                  className="ml-auto text-lg font-medium tracking-widest text-gray-900 uppercase rounded-lg md:m-auto dark-mode:text-white focus:outline-none focus:shadow-outline"
                  href="#/"
                >
                  <img
                    className="w-28"
                    src="https://i.postimg.cc/c17RWyR0/logo.jpg"
                    alt="solminter logo"
                  />
                </a>
              </div>
              <div className="px-5 mt-3 text-center">
                <Popup trigger={<button className="w-full px-3 py-2 m-auto overflow-hidden text-sm font-bold tracking-wide text-white uppercase border-4 rounded-full bg-interpurp-700 border-interpurp">
                  Connect Wallet
                </button>} position=" right">
                <Wallet />
                </Popup>

              </div>
              <nav className="flex-grow px-5 pb-4 md:block md:pb-0">
                <div className="pt-4 pb-4 border-gray-100 ">
                  <a
                    target="_self"
                    className="group menu-section"
                    href="#/token-management"
                  >
                    <img
                      className="mr-3"
                      src="https://i.postimg.cc/vZBstyYz/tkn.jpg"
                      alt="icon"
                    />
                    <span className="text-sm">Token management</span>
                  </a>
                  <a
                    target="_self"
                    className="group menu-section"
                    href="#/apply-for-ido"
                  >
                    <img
                      className="mr-3"
                      src="https://i.postimg.cc/xdD6TG4z/ido.jpg"
                      alt="icon"
                    />
                    <span className="text-sm">Apply for IDO</span>
                  </a>
                  <a target="_self" className="group menu-section" href="#/art">
                    <img
                      className="mr-3"
                      src="https://i.postimg.cc/Sx8G52xN/nft.jpg"
                      alt="icon"
                    />
                    <span className="text-sm">NFT</span>
                  </a>
                  <a
                    className="group menu-section"
                    href="https://docs.solminter.com/"
                    target="_blank"
                  >
                    <img
                      className="mr-3"
                      src="https://i.postimg.cc/x10CrB0J/doc.jpg"
                      alt="icon"
                    />
                    <span className="text-sm">Documentation</span>
                  </a>
                </div>
              </nav>
              <div className="text-center">
                <p className="mb-3 text-tiny">Connect with us</p>
                <div className="flex justify-center mb-5">
                  <a
                    href="https://twitter.com/solminter"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="p-3 mr-3 rounded-full cursor-pointer bg-labelbg"
                      src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-white-circle-png-images-23.png"
                      width="45"
                      alt="twitter"
                    />
                  </a>
                  <a
                    href="https://t.me/solminter"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="p-3 rounded-full cursor-pointer bg-labelbg"
                      src="https://www.freepnglogos.com/uploads/telegram-logo-16.png"
                      width="45"
                      alt="telegram"
                    />
                  </a>
                </div>
                <div className="flex items-center justify-between p-3 border-t border-gray-100 text-tiny ">
                  <img
                    className=""
                    src="https://solminter.com/static/media/builtOn.1297d358.svg"
                    alt="solana"
                  />
                  <p>© Solminter 2021</p>
                </div>
              </div>
            </div>
          </div>
          <main className="w-full px-4 py-6 md:px-8 md:ml-72 bg-imbg">
            <div className="flex flex-wrap items-center justify-center w-full h-full">
              Please connect your wallet.
            </div>
          </main>
        </div>
      </div >
    </div >
  );
};
