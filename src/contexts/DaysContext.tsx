import { createContext, ReactNode, useState } from "react"

interface IDaysProviderData {
    days: Array<number>
    addDay: (day: number) => void
    removeDay: (day: number) => void
}

interface IDaysProps {
    children: ReactNode
}

export const daysContext = createContext<IDaysProviderData>({} as IDaysProviderData)

export const DaysProvider = ({ children }: IDaysProps) => {

    const [days, setDays] = useState<Array<number>>([1, 15, 30, 90])

    const addDay = (day: number) => {
        if (days.find((value) => value === day) || day < 1) {
            return
        }
        const newDays = [...days]
        newDays.push(day)
        setDays(newDays.sort((a, b) => a - b))
    }

    const removeDay = (day: number) => {
        let newDays = days.filter((value) => value !== day)
        setDays(newDays)
    }

    return (
        <daysContext.Provider value={{ days, addDay, removeDay }}>
            {children}
        </daysContext.Provider>
    )
}