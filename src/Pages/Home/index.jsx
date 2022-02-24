import './style.css';
import Header from '../../Components/header';
import CheckList from '../../Components/checkList';
import Senha from '../../Components/senha';

function App() {
  return (
    <div >
      <Header />
      <div className='main_content'>
        <form action="POST">
          <h1>Dados do Cliente</h1>
          <input type="text" name="nome" id="nome" className='input_desc' placeholder='Nome do Cliente' />
          <input type="text" name="celular" id="celular" className='input_desc' placeholder='Telefone para Contato' />
          <input type="text" name="data" id="data" className='input_desc' placeholder='Entrada do aparelho (Dia/Hora)' />

          <h1 className='main_title'>Descrição do Problema</h1>

          <input type="text" name="modelo" id="modelo" className='input_desc' placeholder='Modelo do Aparelho' />
          <textarea name="Problems" id="Problems" cols="30" rows="10" placeholder='Descreva o estado do aparelho' className='input_problems'></textarea>

          <h2 className='main_title'>Senha (se o cliente lembrar)</h2>
          <input type="text" name="senha" id="senha" className='input_desc' placeholder='Senha do aparelho' />

          <Senha />

          <div className='checkList_Container'>
            <h2 className='main_title'>CkeckList de Entrada</h2>

            <CheckList />

          </div>

          <textarea name="Observacoes" id="Observacoes" cols="30" rows="10" placeholder='Observações' className='input_problems'></textarea>
          <br />
          <button type="submit" className='save_Btn'>Salvar</button>
        </form>

      </div>
    </div>
  );
}

export default App;
