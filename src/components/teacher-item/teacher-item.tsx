import React from "react"
import "./styles.css"

import whatsappIcon from "../../assets/images/icons/whatsapp.svg"
function TeacherItem(){
    return(
    <article className="teacher-item">
        <header>
            <img src="https://avatars3.githubusercontent.com/u/54904851?s=460&u=a67d2633504f8d3ec936fa84574f6e46c5ea4dbf&v=4" alt="Thales Brederodes"/>
            <div>
                <strong>Thales Brederodes</strong>
                <span>React.JS</span>
            </div>
        </header>
        <p>
            Estudante do CIN-UFPE em SI.
            <br/><br/>
            Vai te colocar em outro nível no React.JS
        </p>
        <footer>
            <p>
                Preço/hora
                <strong>R$ 33,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>

    </article>
    )
}
export default TeacherItem;