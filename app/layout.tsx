import './globals.scss'
import { Roboto } from 'next/font/google'

import { ReduxProvider } from "../store/reduxProvider";
import { LayoutProps } from './models';


const roboto = Roboto({
  weight: ['400', '700'],
  style: ['italic', 'normal'],
  subsets: ['latin'],
  display: 'optional',
  variable: '--font-roboto'
})

export const metadata = {
  title: 'The Wallet APP',
  description: 'Simple wallet APP',
}

function RootLayout({
  children,
}: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={roboto.className}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
export default RootLayout;
