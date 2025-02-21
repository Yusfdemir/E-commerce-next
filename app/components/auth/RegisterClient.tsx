"use client"
import React from 'react'
import AuthContainer from '../containers/AuthContainer'
import Heading from '../general/Heading'
import Input from '../general/Input'
import Button from '../general/Button'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { FaGoogle } from 'react-icons/fa'
import Link from 'next/link'

const RegisterClient = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<FieldValues>()
      const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data)
    }
  return (
    <AuthContainer>
        <div className='w-full md:w-[500px] p-3 shadow-lg rounded-md'>
            <Heading text='Register' center/>
            <Input placeholder='Ad' type='text' id='name' required register={register} errors={errors}/>
            <Input placeholder='Email' type='text' id='email' required register={register} errors={errors}/>
            <Input placeholder='Parola' type='password' id='password' required register={register} errors={errors}/>
            <Button text='Kayıt Ol' onClick={handleSubmit(onSubmit)}/>
            <div className='text-center text-sm my-2 text-red-500'>Daha önce kayıt olduysan <Link className='underline' href={"/login"}>buraya tıkla</Link></div>
            <div className='text-center my-2 font-bold text-lg'>OR</div>
            <Button text='Google ile Üye Ol' outline icon={FaGoogle} onClick={()=>{}}/>
            
        </div>
    </AuthContainer>
  )
}

export default RegisterClient