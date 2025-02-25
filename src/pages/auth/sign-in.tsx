import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner"
import { Helmet } from "react-helmet-async";
import { useForm } from 'react-hook-form'
import { Link, useSearchParams } from "react-router-dom";
import {z} from 'zod'
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/api/sign-in";

const signInForm = z.object({
    email: z.string().email(),
})

type SignInForm = z.infer<typeof signInForm>


export function SignIn(){
    const [searchParams] = useSearchParams()
    const {register, handleSubmit, formState: {isSubmitting} } = useForm<SignInForm>({
        defaultValues: { 
            email: searchParams.get('email') ?? '', 
        }},
    )

    const {mutateAsync: authenticate} = useMutation({
        mutationFn: signIn, 
    })

    async function handleSignIn(data: SignInForm){

        try{ 
            await authenticate({email: data.email})
            toast.success('Enviamos um link de autentificação para o seu e-mail.', {
            action: { 
                label: 'Reenviar', 
                onClick: () => handleSignIn(data)
            },
       });
        } catch { 
            toast.error('Credenciais inválidas.')
        }     
    }

    return (
     <>
            <Helmet title="Login"></Helmet>
                <div className="p-8">
                    <Button variant="ghost" asChild className="absolute right-8 top-8">
                        {/* o que eu quero mover fica como absolute e o que fica parado relative */}
                        <Link to="/sign-up">
                            Novo estabelecimento
                        </Link>
                    </Button>
                    <div className="flex w-[350px] flex-col justify-center gap-6">
                        <div className="flex flex-col gap-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">Acessar painel</h1>
                            <p className="text-sm text-muted-foreground">Acompanhe suas vendas pelo painel do parceiro!</p>
                        </div>

                        <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Seu e-mail</Label>
                                <Input id="email" type="email" {...register('email')}></Input>
                            </div>
                            <Button disabled={isSubmitting} className="w-full" type="submit">Acessar painel</Button>
                        </form>
                    </div>
                </div>
         
   
     </> 

    )
}
// O que é Helmet e o que ele faz??
// O React Helmet é um componente reutilizável do React que permite controlar o cabeçalho de um documento.
//  Ele é usado para gerenciar meta tags, títulos e outros elementos de cabeçalho. 