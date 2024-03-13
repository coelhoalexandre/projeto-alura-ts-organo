import './CampoTexto.css'

interface CampoTextoProps {
    placeholder: string;
    aoAlterado: (valor: string) => void;
    label: string;
    valor: string;
    tipo?: 'text' | 'password' | 'date' | 'email' | 'number' | 'color'
    obrigatorio?: boolean;
}

const CampoTexto = ({ placeholder, aoAlterado, label, valor, tipo = "text", obrigatorio = false }:CampoTextoProps) => {

    const placeholderModificada = `${placeholder}...` 

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input 
                type={tipo}
                value={valor} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto