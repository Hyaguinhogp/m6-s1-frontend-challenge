import { useState } from "react"
import { FormContainer, HomeContainer, HomeContent, ResponseContainer } from "./styles"

import * as yup from 'yup'
import { FieldValues, useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import api from "../../services/api"

const Home = () => {
    const [day1, setDay1] = useState("0")
    const [day15, setDay15] = useState("0")
    const [day30, setDay30] = useState("0")
    const [day90, setDay90] = useState("0")

    const formSchema = yup.object().shape({
        amount: yup.number().required("Valor obrigatório").min(1000),
        installments: yup.number().required("Parcelas obrigatórias"),
        mdr: yup.number().required("MDR obrigatório"),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema)
    })

    const onSubmitFunction = (data: FieldValues) => {
        api.post("", data)
            .then((res) => {
                setDay1(res.data[1])
                setDay15(res.data[15])
                setDay30(res.data[30])
                setDay90(res.data[90])
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

                    </div>

                    <div className="input_container">
                        <label htmlFor="installments">Em quantas parcelas *</label>
                        <input
                            type="number"
                            {...register("installments")}
                        />
                        <span>Máximo de 12 parcelas</span>
                    </div>

                    <div className="input_container">
                        <label htmlFor="mdr">Informe o percentual de MDR *</label>
                        <input
                            type="number"
                            {...register("mdr")}
                        />
                    </div>
                    <input type="submit" hidden />
                </FormContainer>
                <ResponseContainer>
                    <h2>VOCÊ RECEBERÁ:</h2>
                    <h3>Amanhã: <span>R$ {day1},00</span></h3>
                    <h3>Em 15 dias: <span>R$ {day15},00</span></h3>
                    <h3>Em 30 dias: <span>R$ {day30},00</span></h3>
                    <h3>Em 90 dias: <span>R$ {day90},00</span></h3>
                </ResponseContainer>
            </HomeContent>
        </HomeContainer>
    )
}

export default Home