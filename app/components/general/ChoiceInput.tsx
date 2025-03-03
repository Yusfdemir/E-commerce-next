import { IconType } from "react-icons"

interface ChoiceInputProps{
    text:string
    icon:IconType
    onClick:(value:string)=> void
    selected?:boolean
}

const ChoiceInput:React.FC<ChoiceInputProps> = ({text,icon:Icon,onClick,selected}) => {
  return (
    <div onClick={()=>onClick(text)} 
        className={`flex items-center justify-center h-16 gap-2 px-4 py-2 my-2 rounded-md cursor-pointer border ${selected ? "border-black" : "border-gray-200"}`}>
        <Icon/>
        <span className="text-slate-700 text-lg">{text}</span>
    </div>
  )
}

export default ChoiceInput