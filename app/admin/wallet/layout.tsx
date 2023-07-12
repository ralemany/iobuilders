import "./wallet-layout.scss"

function TransactionLayout({children}: {children: React.ReactNode}) {
  return (
    <div className='wallet-layout'>{children}</div>
  )
}

export default TransactionLayout
