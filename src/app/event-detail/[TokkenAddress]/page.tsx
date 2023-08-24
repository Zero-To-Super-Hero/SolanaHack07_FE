import { Events } from "@/shared/types"


export default function Page({ params }: { params: { TokkenAddress: string } }) {
  return (
    <div>My Post: {params.TokkenAddress}</div>
  )
}