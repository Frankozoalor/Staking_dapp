import styles from "../styles/Home.module.css";
import React from "react";

export default function StakingData() {
  return (
    <>
      <section className={styles.stakingDataContainer}>
        <section className={styles.stakingData}>
          <span>Total Staked Tokens</span>
          <span className={styles.StakingData_value}> $9,237,907</span>
        </section>

        <section className={styles.stakingData}>
          <span>Total Renewal Paid</span>
          <span className={styles.StakingData_value}> $1,637,907</span>
        </section>

        <section className={styles.stakingData}>
          <span>Stakers</span>
          <span className={styles.stakingData_value}> $92,237</span>
        </section>
      </section>
    </>
  );
}
