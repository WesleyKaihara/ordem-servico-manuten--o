import { useState } from 'react';
import './style.css';

export default function Senha() {

  let senhaOrdem = []
  const [senhaC, setSenha] = useState([0])

  const getSenha = (item) => {
    verificaSenha(item.target.id)

  }

  const filterInt = function (value) {
    return Number(value);
  }

  function verificaSenha(senha) {
    const password = filterInt(senha)
    const existe = senhaOrdem.find((item) => item === password)
    console.log(existe)
    if (existe === undefined) {
      senhaOrdem.push(password)
      console.log(senhaOrdem)
      setSenha(senhaC + "/" + senhaOrdem)
      return
    }
  }

  return (
    <div>
      <div className='senha'>
        <div className="campo" id='1' onClick={getSenha}></div>
        <div className="campo" id='2' onClick={getSenha}></div>
        <div className="campo" id='3' onClick={getSenha}></div>
        <div className="campo" id='4' onClick={getSenha}></div>
        <div className="campo" id='5' onClick={getSenha}></div>
        <div className="campo" id='6' onClick={getSenha}></div>
        <div className="campo" id='7' onClick={getSenha}></div>
        <div className="campo" id='8' onClick={getSenha}></div>
        <div className="campo" id='9' onClick={getSenha}></div>
      </div>
      <h1>Senha: <p>{senhaC}</p></h1>
    </div>

  )
}