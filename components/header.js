import { useEffect, useState } from "react";

import styles from "../styles/Home.module.css";
import { useAccount, useConnect, useDisconnect } from "wagmi";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    if (!isConnected) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isConnected]);

  return (
    <section className={styles.header}>
      <section className={styles.header_logoSection}>
        <h1 className={styles.title}>Ethereum Staking </h1>
      </section>
      <section className={styles.header_btn}>
        {!isLoggedIn ? (
          <button className={styles.connectBtn} onClick={disconnect}>
            DISCONNECT WALLET
          </button>
        ) : (
          <>
            {connectors.map((connector) => (
              <button
                disabled={!connector.ready}
                key={connector.id}
                onClick={() => connect({ connector })}
                className={styles.connectBtn}>
                CONNECT WALLET
              </button>
            ))}
          </>
        )}
      </section>
    </section>
  );
}
