import { useEffect, useRef, useState } from "react";
import { Beans } from "@web3uikit/icons";
import styles from "../styles/Home.module.css";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import React from "react";
import Web3Modal from "web3modal";
import { providers } from "ethers";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const [walletConnected, setWalletConnected] = useState(false);
  const web3ModalRef = useRef<any>();

  const getProviderOrSigner = async (needSigner = true) => {
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 11155111) {
      window.alert("Change network to sepolia");
      throw new Error("change network to sepolia");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }

    return web3Provider;
  };

  const connectWallet = async () => {
    try {
      await getProviderOrSigner(true);
      setWalletConnected(true);
    } catch (err) {
      console.log(err);
    }
  };
  const renderButton = () => {
    if (walletConnected) {
      return <button className={styles.connectBtn}> CONNECTED</button>;
    } else {
      return (
        <button onClick={connectWallet} className={styles.connectBtn}>
          CONNECT WALLET
        </button>
      );
    }
  };
  useEffect(() => {
    if (!walletConnected) {
      web3ModalRef.current = new Web3Modal({
        network: "sepolia",
        providerOptions: {},
        disableInjectedProvider: false,
      });
      connectWallet();
    } else {
    }
  }, [connectWallet]);

  return (
    <section className={styles.header}>
      <section className={styles.header_logoSection}>
        <h1 className={styles.title}> Ethereum Staking app </h1>
        <Beans fontSize="20px" className={styles.beans} />
      </section>
      <section className={styles.header_btn}>{renderButton()}</section>
    </section>
  );
}
