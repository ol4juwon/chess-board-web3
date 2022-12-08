import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { providers, Contract, ethers } from "ethers";
import { GAME_CONTRACT_ADDRESS, abi} from '../../../../constants/'
import Web3Modal from "web3modal";
import WalletLink from "walletlink";
import { useDispatch } from 'react-redux';
import { addGame } from '../../../redux/reducers/games/gamesByIdSlice';
import { addGameId } from '../../../redux/reducers/games/allGamesSlice';
type GameProviderProps = {
    games?: any;
    createGame: any;
    getGames: any;
}
interface Props {
    children(_: GameProviderProps): ReactNode;
  }
const GameProvider = ({ children }: Props) => {
    const dispatch = useDispatch();
    const providerOptions = {
        "custom-walletlink": {
          display: {
            logo: "https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0",
            name: "Coinbase",
            description: "Connect to Coinbase Wallet (not Coinbase App)",
          },
          options: {
            appName: "Coinbase", // Your app name
            networkUrl: `https://mainnet.infura.io/v3/`,
            chainId: 1,
          },
          package: WalletLink,
          connector: async (_: any, options: any) => {
            const { appName, networkUrl, chainId } = options;
            const walletLink = new WalletLink({
              appName,
            });
            const provider = walletLink.makeWeb3Provider(networkUrl, chainId);
            await provider.enable();
            return provider;
          },
        },
      };
    let web3Modal: Web3Modal;
    if (typeof window !== "undefined") {
        web3Modal = new Web3Modal({
          network: "mainnet", // optional
          cacheProvider: true,
          providerOptions, // required
        });
      }
    const [games, setGames] = useState();
    const [walletConnected, setWalletConnected] = useState<boolean>();
    const web3ModalRef = useRef();
    const getProviderOrSigner = async (needSigner = false) => {
        const provider = await web3Modal.connect();
        const web3Provider = new providers.Web3Provider(provider);
    
        // If user is not connected to the Rinkeby network, let them know and throw an error
        const x = await web3Provider.getNetwork();
        console.log("chain ids",x, provider.state);
        if (x.chainId !== 5) {
          window.alert("Change the network to Rinkeby");
          throw new Error("Change network to Rinkeby");
        }
        if (needSigner) {
          const signer = web3Provider.getSigner();
          console.log("signer",signer)
          return signer;
        }
        return web3Provider;
      }
    const createGame = async (payload: any) => {
        const provider = await getProviderOrSigner(true);
        // We connect to the Contract using a Provider, so we will only
        // have read-only access to the Contract
        console.log(provider)
        const gameContract = new Contract(
          GAME_CONTRACT_ADDRESS,
          abi,
          provider
        );
        const games = await gameContract.CreateGame(false, "BTC", 12000);
        games.wait();

    }
    const getGames = async () => {
        try {
            // Get the provider from web3Modal, which in our case is MetaMask
            // No need for the Signer here, as we are only reading state from the blockchain
            const provider = await getProviderOrSigner(true);
            // We connect to the Contract using a Provider, so we will only
            // have read-only access to the Contract
            console.log(provider)
            const gameContract = new Contract(
              GAME_CONTRACT_ADDRESS,
              abi,
              provider
            );
            // call the numAddressesWhitelisted from the contract
            console.log(gameContract);
            try{
                const games = await gameContract.getGames();
                const inactive = await gameContract.getInactiveGames();
                console.log('ss',games)
                // console.log("gamess",ethers.utils.formatEther(games[0].entryFee))
                // console.log("gamess",new Date(games[0].created_on.toNumber()))
                // setGames(games);
                // games.push(inactive);
                games.forEach((item :any) => {
                    const creta = `${new Date(item.created_on.toNumber()).getDay()}/${new Date(
                        item.created_on.toNumber()
                      ).getMonth()}/${new Date(item.created_on.toNumber()).getUTCFullYear()}`;
                    const data = {
                        id: Number(ethers.utils.formatEther(item.gameId)),
                        ended: item.hasEnded,
                        limit: 2,
                        currency: item.currency,
                        entryFee: parseFloat(ethers.utils.formatEther(item.entryFee)),
                        privacy: item.privacy,
                        created_on: creta,
                      };
                    dispatch(addGame(data));
                    dispatch(addGameId(data))
                })
               
                //   console.log("adding 55" , data )
            }catch(e:any){
                console.log(e.message)
            }
            
          } catch (err) {
            console.error(err);
          }
    }
    const getEndedGames = async () => {

    }

    const connectWallet = async () => {
        try {
          // Get the provider from web3Modal, which in our case is MetaMask
          // When used for the first time, it prompts the user to connect their wallet
          await getProviderOrSigner();
          setWalletConnected(true);
  
        } catch (err) {
          console.error(err);
        }
      };
    useEffect(() => {
        if (walletConnected) {
            getGames();
// get gamess
// wallet connected

        }
      }, [walletConnected]);
      useEffect(() => {
        console.log('get ge', games)
            if(!games)
            getGames();
      },[games])
      useEffect(() => {
        if(games) 
        console.debug(games);
      },[games])
    return (
        <>
          {children({
            games,
            createGame,
            getGames
          })}
        </>
      );
}

export default GameProvider;