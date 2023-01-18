import { useContext, useState } from "react"
import { daysContext } from "../../contexts/DaysContext"
import { DaysContainer, DaysSelectContainer, InputPlusButton } from "./styles"

const DaysSelect = () => {

    const [day, setDay] = useState(1)
    const { days, addDay, removeDay } = useContext(daysContext)

    return (
        <DaysSelectContainer>
            <label htmlFor="days">Informe os dias(opcional)</label>
            <InputPlusButton>
                <input
                    name="days"
                    type="number"
                    min={0}
                    value={day}
                    onChange={(input) => {
                        input.preventDefault()
                        setDay(parseInt(input.target.value))
                    }}
                />
                <button
                    onClick={(event) => {
                        event.preventDefault()
                        addDay(day)
                    }}
                >Adicionar</button>
            </InputPlusButton>

            <DaysContainer>
                {
                    days.map((day) => {
                        return (
                            <button
                                key={day}
                                onClick={() => removeDay(day)}
                            >{day}</button>
                        )
                    })
                }
            </DaysContainer>
        </DaysSelectContainer>
    )
}

export default DaysSelect