import "../styles/globals.css";
import { configureChains, sepolia, WagmiConfig, createClient } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

export default function App({ Component, pageProps }) {
  const { provider, webSocketProvider } = configureChains(
    [sepolia],
    [publicProvider()]
  );

  // const { provider_ } = provider;
  // if (provider_ !== sepolia) {
  //   window.alert("Change the network to sepolia");
  //   throw new Error("Change the network to sepolia");
  // }
  const client = createClient({
    autoConnect: true,
    provider,
    webSocketProvider,
  });

  return (
    <WagmiConfig client={client}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
}
