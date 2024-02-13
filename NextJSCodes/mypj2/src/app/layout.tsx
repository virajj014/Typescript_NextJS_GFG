import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import ReduxProvider from "@/redux/provider"

export const metadata = {
  title: {
    default : "GeeksForGeeks",
    template : '%s | GeeksForGeeks'
  },
  description: 'welcome to 390 challenge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <ReduxProvider>
        <Navbar/>
        {children}
        <Footer/>
        </ReduxProvider>
      </body>
    </html>
  )
}
