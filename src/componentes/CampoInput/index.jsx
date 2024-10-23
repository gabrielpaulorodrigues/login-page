const CampoInput = ({type, id, value, onChange, placeholder, required}) => {
    return(
        <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required} 
        />
    )
}

export default CampoInput


