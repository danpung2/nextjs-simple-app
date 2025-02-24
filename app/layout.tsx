import { Metadata } from "next"
import Navigation from "../components/navigation"

export const metadata: Metadata = {
    title: {
        template: "%s | Next Simple App",
        default: "Loading...",
    },
    description: "The Simple App By NextJs"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
            <Navigation/>
            {children}
        </body>
    </html>
  )
}
