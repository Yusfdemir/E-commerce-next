import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'

interface AdminSidebarItem{
    selected:boolean
    name:string
    icon:IconType
    url:string
}
const AdminSidebarItem:React.FC<AdminSidebarItem> = ({selected ,name,icon:Icon,url}) => {
  return (
    <Link className={`flex items-center gap-2 cursor-pointer ${selected ? "text-black font-bold" : "text-white font-medium"}`} href={url}>
        <Icon size={25}/>
        <div>{name}</div>
    </Link>
  )
}

export default AdminSidebarItem