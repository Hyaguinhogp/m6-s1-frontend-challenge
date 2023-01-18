import { useContext, useState } from "react"
import { FormContainer, HomeContainer, HomeContent, ResponseContainer } from "./styles"

import { yupResolver } from '@hookform/resolvers/yup'
import { FieldValues, useForm } from "react-hook-form"
import * as yup from 'yup'
import api from "../../services/api"
import DaysSelect from "../../components/DaysSelect"
import { daysContext } from "../../contexts/DaysContext"

interface IRequest {
    amount: number
    installments: number
    mdr: number
}

const Home = () => {
    const { days } = useContext(daysContext)
    const [outputDays, setOutputDays] = useState(Object)

    const formSchema = yup.object().shape({
        amount: yup.number().typeError("Digite um valor válido").required("Valor obrigatório").min(1000),
        installments: yup.number().typeError("Digite um valor válido").required("Parcelas obrigatórias").min(1).max(12),
        mdr: yup.number().typeError("Digite um valor válido").required("MDR obrigatório").min(1).max(100),
    })

    const { register, handleSubmit, formState: { errors } } = useForm<IRequest>({
        resolver: yupResolver(formSchema)
    })

    const onSubmitFunction = (data: FieldValues) => {

        let requestData = { ...data }
        if (days.length !== 0) {
            requestData = { ...requestData, days: days }
        }

        api.post("", requestData)
            .then((res) => {
                setOutputDays(res.data)
            })
    }

    return (
        <HomeContainer>
            <HomeContent>
                <FormContainer onSubmit={handleSubmit(onSubmitFunction)}>
                    <h2>Simule sua Antecipação</h2>

                    <div className="input_container">
                        <label htmlFor="amount">Informe o valor da venda *</label>
                        <input
                            type="number"
                            {...register("amount")}
                        />
                        <span className="error">{errors.amount?.message}</span>
                    </div>

                    <div className="input_container">
                        <label htmlFor="installments">Em quantas parcelas *</label>
                        <input
                            type="number"
                            {...register("installments")}
                        />
                        <span className="error">{errors.installments?.message}</span>
                        <span>Máximo de 12 parcelas</span>
                    </div>

                    <div className="input_container">
                        <label htmlFor="mdr">Informe o percentual de MDR *</label>
                        <input
                            type="number"
                            {...register("mdr")}
                        />
                        <span className="error">{errors.mdr?.message}</span>
                    </div>

                    <DaysSelect />
                    <button type="submit" className="submit_button">Simular antecipação</button>
                </FormContainer>
                <ResponseContainer>
                    <h2>VOCÊ RECEBERÁ:</h2>

                    {
                        Object.keys(outputDays).map((key) => {
                            return <h3 key={key}>Em {key} dias: <span>R$ {outputDays[key]},00</span></h3>
                        })
                    }

                </ResponseContainer>
            </HomeContent>
        </HomeContainer>
    )
}

export default Home