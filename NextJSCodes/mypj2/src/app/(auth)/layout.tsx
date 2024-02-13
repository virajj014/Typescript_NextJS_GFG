import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export const metadata = {
    title: 'Auth routes',
    description: 'They are for auth  routes',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <h1>THIS IS A CUSTOM LAYOUT ELEMENT FOR COMMON AUTH PAGES</h1>
            {children}
        </div>
    )
}
