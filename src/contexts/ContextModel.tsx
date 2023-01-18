import { createContext, ReactNode } from "react"

interface IModelProviderData { }

interface IModelProps {
    children: ReactNode
}

export const modelContext = createContext<IModelProviderData>({} as IModelProviderData)

export const ModelProvider = ({ children }: IModelProps) => {
    return (
        <modelContext.Provider value={{}}>
            {children}
        </modelContext.Provider>
    )
}