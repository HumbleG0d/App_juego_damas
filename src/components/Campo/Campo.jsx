export default function Campo({ classNameLabel, classNameInput, htmlFor, name, type}) {
    
    const inputId = `${htmlFor}-input`

    return (
        <>
            <label className = {classNameLabel} htmlFor = {inputId} >{name}</label>
            <input className = {classNameInput} type = {type} id = {inputId}/>
        </>
    
    )
}