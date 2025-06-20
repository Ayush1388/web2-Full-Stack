export const Button = ({
    disabled,
    children,
    onClick,
    type
}) => {
    return <span onClick = {onclick} ClassName = {`rounded-2xl text-4xl
 px-32 py-8 text-white cursor-pinter ${disabled ? "bg-blue-200" : "bg-green-400"}`}>
    <input type = {type} placeholder ={placeholder}></input>
 </span>
}