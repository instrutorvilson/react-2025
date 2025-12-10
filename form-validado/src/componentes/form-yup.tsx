import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    nome: yup.string().required("O nome é obrigatório"),
    email: yup.string()
    .email("Email inválido")
    .required("O email é obrigatório"),
    idade: yup.number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .typeError("Informe um número válido")
    .positive("Idade deve ser positiva")
    .required("Idade é obrigatória")
});

export default function FormularioYup() {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    function onSubmit(data:any) {
      console.log("Dados válidos:", data);
    }

return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label>Nome</label>
            <input {...register("nome")} />
            <p style={{ color: "red" }}>{errors.nome?.message}</p>
        </div>
        <div>
            <label>Email</label>
            <input {...register("email")} />
            <p style={{ color: "red" }}>{errors.email?.message}</p>
        </div>
        <div>
            <label>Idade</label>
            <input type="number" {...register("idade",{ valueAsNumber: true })} />
            <p style={{ color: "red" }}>{errors.idade?.message}</p>
        </div>
        <button type="submit">Enviar</button>
    </form>
)
}