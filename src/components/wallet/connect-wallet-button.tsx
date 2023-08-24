"use client"
import dynamic from "next/dynamic"
import { PropsWithChildren } from "react"

const WalletMultiButtonDynamic = dynamic(
    async () => (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
    { ssr: false }
)

export default function ConnectWalletButton({ children }: PropsWithChildren) {
    return (
        <div className="">
            <WalletMultiButtonDynamic>{children}</WalletMultiButtonDynamic>
        </div>
    )
}