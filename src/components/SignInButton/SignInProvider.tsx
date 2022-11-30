import { ReactNode, SetStateAction, useRef, useState } from "react";
import { providers, Contract } from "ethers";
import { GAME_CONTRACT_ADDRESS, abi} from '../../../constants/'
import WalletLink from "walletlink";
import Web3Modal from "web3modal";
export type SignInProviderProps = {
    user: any,
    setUser: any;
    walletConnected: boolean;
    setWalletConnected: SetStateAction<any>;
}

interface Props {
    children(_: SignInProviderProps): ReactNode;
  }
const SignInProvider = ({ children }: Props) => {
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
const [user, setUser] = useState({address: '', balance: -1});
const [walletConnected, setWalletConnected] = useState<boolean>(false);
const [isLoading, setIsLoading] = useState<boolean>(false);

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
const connectWallet = async () => {
    try {
      // Get the provider from web3Modal, which in our case is MetaMask
      // When used for the first time, it prompts the user to connect their wallet
     const x =  await getProviderOrSigner();
     console.log("addressss",(await x.getBalance(user.address)).toNumber());
      setWalletConnected(true);

      // checkIfAddressInWhitelist();
      // getNumberOfWhitelisted();
    } catch (err) {
      console.error(err);
    }
  };



//   useEffect(() => {
//     // if wallet is not connected, create a new instance of Web3Modal and connect the MetaMask wallet
//     if (!walletConnected) {
//       // Assign the Web3Modal class to the reference object by setting it's `current` value
//       // The `current` value is persisted throughout as long as this page is open
//       web3Modal = new Web3Modal({
//         network: "goerli",
//         providerOptions: {},
//         disableInjectedProvider: false,
//       });
//       connectWallet();
//     }
//   }, [walletConnected]);

    return (
        <>
          {children({
            user,
            setUser,
            walletConnected,
            setWalletConnected,
          })}
        </>
      );
}
export default SignInProvider;