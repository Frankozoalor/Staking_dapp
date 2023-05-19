import styles from "../styles/Home.module.css";
import Staking from "./staking";
import StakingData from "./stakingData";
import React from "react";

export default function Main() {
  return (
    <section className={styles.container}>
      <Staking />
      <StakingData />
    </section>
  );
}
