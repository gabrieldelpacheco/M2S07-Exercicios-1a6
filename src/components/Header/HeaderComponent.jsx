import { useState } from 'react';
import './HeaderComponent.css';

const HeaderComponent = () => {
    const [name, setName] = useState('[Clique aqui]');

    function mudarNome() {
        let novoNome = prompt('Insira seu nome');
        if(novoNome) {
            setName(novoNome);
        } else {
            setName('[Clique aqui]');
        }
    }
    return(
        <nav className="navbar bg-primary text-center" data-bs-theme="dark">
            <a className="navbar-brand m-2" href="#" onClick={mudarNome}>
                Bem-vindo(a), {name}
            </a>
        </nav>
    )
}

export default HeaderComponent;