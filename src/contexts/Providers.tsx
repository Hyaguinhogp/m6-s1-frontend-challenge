import { ReactNode } from "react"
import { DaysProvider } from "./DaysContext"

interface IProvidersProps {
    children: ReactNode
}

const Providers = ({ children }: IProvidersProps) => {
    return (
        <DaysProvider>
            {children}
        </DaysProvider>
    )
}

export default Providers