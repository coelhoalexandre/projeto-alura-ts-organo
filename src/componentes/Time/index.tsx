import IColaborador from '../../compartilhado/interfaces/IColabrador';
import Colaborador from '../Colaborador'
import './Time.css'

interface TimeProps {
    nome: string;
    corPrimaria: string;
    corSecundaria: string;
    colaboradores: IColaborador[];
}
const Time = ({ nome, corPrimaria, corSecundaria, colaboradores } :TimeProps) => {
    const css = { backgroundColor: corSecundaria }

    return (
        (colaboradores.length > 0) 
        
        ? <section className='time' style={css}>
            <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map( colaborador => 
                <Colaborador 
                    corDeFundo={corPrimaria} 
                    key={colaborador.nome} 
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem}
                    data={colaborador.data}
                /> )}
            </div>
        </section> 

        : <></>
    )
}

export default Time