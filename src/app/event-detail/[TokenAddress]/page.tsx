

export default function Page({ params }: { params: { TokenAddress: string } }) {
  return (
    <div>My Post: {params.TokenAddress}</div>
  )
}