import { getCurrentUser } from '@/app/actions/getCurrentUser'
import CreateForm from '@/app/components/admin/CreateForm'
import AuthContainer from '@/app/components/containers/AuthContainer'
import WarningText from '@/app/components/WarningText'
import React from 'react'

const CreateProduct = async() => {
  const currentUser = await getCurrentUser()
  if(!currentUser || currentUser.role !== "ADMIN"){
     return <WarningText text={"Giriş yetkiniz yok !!!"} />
  }
  return (
    <AuthContainer>
       <CreateForm/>
    </AuthContainer>
  )
}

export default CreateProduct