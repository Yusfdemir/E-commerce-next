"use client"
import React, { useEffect } from 'react'
import AuthContainer from '../containers/AuthContainer'
import Heading from '../general/Heading'
import Input from '../general/Input'
import Button from '../general/Button'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { FaGoogle } from 'react-icons/fa'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { User } from '@prisma/client'
 
interface LoginClientProps{
  currentUser : User | null | undefined
 }
const LoginClient:React.FC<LoginClientProps> = ({currentUser}) => {
   const router = useRouter()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<FieldValues>()
      const onSubmit: SubmitHandler<FieldValues> = (data) => {
        signIn('credentials',{
          ...data,
          redirect:false
        }).then((callback)=>{
           if(callback?.ok){
             router.push("/cart")
             router.refresh()
             toast.success("Login işlemi başarılı")
           }
           if(callback?.error){
             toast.error(callback.error)
           }
        })
    }
    
    useEffect(() => {
      if(currentUser){
        router.push("/cart")
        router.refresh()
      } 
    }, [])
    
  return (
    <AuthContainer>
        <div className='w-full md:w-[500px] p-3 shadow-lg rounded-md'>
            <Heading text='Login' center/>
            <Input placeholder='Email' type='text' id='email' required register={register} errors={errors}/>
            <Input placeholder='Parola' type='password' id='password' required register={register} errors={errors}/>
            <Button text='Giriş Yap' onClick={handleSubmit(onSubmit)}/>
            <div className='text-center text-sm my-2 text-red-500'>Daha önce kayıt olmadıysa <Link className='underline' href={"/register"}>buraya tıkla</Link></div>
            <div className='text-center my-2 font-bold text-lg'>OR</div>
            <Button text='Google ile Giriş Yap' outline icon={FaGoogle} onClick={()=>{signIn('google')}}/>
            
        </div>
    </AuthContainer>
  )
}

export default LoginClient