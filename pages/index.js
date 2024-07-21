import Header from "../components/Header";
import PotCard from "../components/PotCard";
import Table from "../components/Table";
import style from "../styles/Home.module.css";

import { useMemo } from "react";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets"
import { WalletModal, WalletModalProvider } from "@solana/wallet-adapter-react-ui";
require("@solana/wallet-adapter-react-ui/styles.css")


export default function Home() {
  const endpoint = "https://solana-devnet.g.alchemy.com/v2/6paDJ6PzSs-OtjyBR9HiaCLG5ae7rvSq"

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
    ],
    []
  )
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div className={style.wrapper}>
            <Header />
            <PotCard />
            <Table />
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
