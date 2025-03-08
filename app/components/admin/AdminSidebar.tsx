"use client"
import React from 'react'
import AdminSidebarItem from './AdminSidebarItem'
import { MdDashboard,MdBorderOuter,MdOutlineCreate } from 'react-icons/md'
import { usePathname } from 'next/navigation'

const AdminSidebar = () => {
    const pathname = usePathname()
    const adminPanel = [
        {
            name:"Özetler",
            url:"/admin",
            icon:MdDashboard
        },
        {
            name:"Ürün oluştur",
            url:"/admin/create",
            icon:MdOutlineCreate
        },
        {
            name: "Ürünleri Yönet",
            icon: MdOutlineCreate,
            url: "/admin/manage"
        },
        {
            name:"Siparişlerim",
            url:"/admin/order",
            icon:MdBorderOuter
        }
    ]
  return (
    <div className='w-1/5 border-r h-screen p-4 bg-orange-600'>
        <div className='space-y-4'> 
            {adminPanel.map((admin,i)=>(
                    <AdminSidebarItem key={i} selected={pathname == admin.url} name={admin.name} icon={admin.icon} url={admin.url}/>
                )
            )
            }
        </div>
    </div>
  )
}

export default AdminSidebar