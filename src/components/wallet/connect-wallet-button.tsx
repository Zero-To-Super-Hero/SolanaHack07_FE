"use client"
import dynamic from "next/dynamic"
import { PropsWithChildren } from "react"

const WalletMultiButtonDynamic = dynamic(
    async () => (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
    { ssr: false }
)

export default function ConnectWalletButton({ children }: PropsWithChildren) {
    return (
        <div className="outline-primary text-xs">
            <WalletMultiButtonDynamic className="text-whitespace-nowrap p-0 m-0">{children}</WalletMultiButtonDynamic>
        </div>
    )
}