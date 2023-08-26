

export default function Page({ params }: { params: { TokenAddress: string } }) {
  return (
    <div className="container">
      <div className="grid grid-cols-12 items-center justify-between">
        <div className="col-span-12 md:col-span-6">
          
        </div>
        <div className="col-span-12 md:col-span-6"></div>
      </div>
      My Post: {params.TokenAddress}

    </div>
  )
}