"use client"

import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import Heading from "../general/Heading"
import Input from "../general/Input"
import Checkbox from "../general/Checkbox"
import {FaComputer} from "react-icons/fa6"
import {GiBallerinaShoes} from "react-icons/gi"
import {FaTabletAlt} from "react-icons/fa"
import {CiMicrophoneOn} from "react-icons/ci"
import ChoiceInput from "../general/ChoiceInput"
import Button from "../general/Button"

const CreateForm = () => {
  const categoryList = [
    {
      name:"Bilgisayar",
      icon:FaComputer
    },
    {
      name:"Ayakkabı",
      icon:GiBallerinaShoes
    },
    {
      name:"Tablet",
      icon:FaTabletAlt
    },
    {
      name:"Mikrofon",
      icon:CiMicrophoneOn
    },
    {
      name:"Bilgisayar1",
      icon:FaComputer
    },
    {
      name:"Bilgisayar2",
      icon:FaComputer
    },
    
  ]
    const {
            register,
            handleSubmit,
            setValue,
            watch,
            formState: { errors },
          } = useForm<FieldValues>({
            defaultValues:{
                name:"",
                description:"",
                brand:"",
                category:"",
                price:"",
                image:"",
                inStock:false
            }
        })
    const onSubmit: SubmitHandler<FieldValues> = (data) =>{
        console.log(data)
    }
    const category = watch("category")
    const setCustomValue = (id:string,value:any)=>{
      setValue(id,value,{
        shouldDirty:true,
        shouldTouch:true,
        shouldValidate:true
      })
    }
  return (
    <div>
        <Heading text="Ürün Oluştur" center/>
        <Input placeholder="Ad" type="text" id="name" register={register} errors={errors} required/>
        <Input placeholder="Açıklama" type="text" id="description" register={register} errors={errors} required/>
        <Input placeholder="Marka" type="text" id="brand" register={register} errors={errors} required/>
        <Input placeholder="Fiyat" type="number" id="price" register={register} errors={errors} required/>
        <Checkbox id="inStock" label="Ürün Stokta Mevcut mu ?" register={register}/>
        <div className="flex flex-wrap gap-3">
          {
             categoryList.map((cat,i)=>(
               <ChoiceInput 
                key={i}
                icon={cat.icon} 
                text={cat.name} 
                onClick={(category)=>{setCustomValue("category",category)}}
                selected={category == cat.name}
               />
             ))
          }
        </div>
        <Button text="Ürün Oluştur" onClick={handleSubmit(onSubmit)}/>
    </div>
  )
}

export default CreateForm