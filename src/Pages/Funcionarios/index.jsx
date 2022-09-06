
import { useState } from "react";

import  GetFuncionarios  from "../../components/Funcionarios/GetFuncionarios/GetFuncionarios";
import  PostFuncionarios  from "../../components/Funcionarios/PostFuncionarios/PostFuncionarios";
import  DeleteFuncionarios  from "../../components/Funcionarios/DeleteFuncionarios/DeleteFuncionarios";
import  PutFuncionarios from "../../components/Funcionarios/PutFuncionarios/PutFuncionarios";

import style from "./funcionarios.module.css"

function Funcionarios() {
    const [methodForm, setMethodForm] = useState();
    
    
    return (
        <>
        {methodForm == "get" ? (
            <GetFuncionarios />
        ) : methodForm == "post" ? (
            <PostFuncionarios /> 
        ) : methodForm == "put" ? (
            <PutFuncionarios />
        ) : methodForm == "delete" ? (
            <DeleteFuncionarios /> 
        ) : (
            <>
            <label htmlFor="select">O que deseja fazer?</label>
            <br />
            <select
                name="select"
                id="what"
                onChange={(e) => setMethodForm(e.target.value)}
            >
                <option value=""></option>
                <option value="get">Listar funcionários</option>
                <option value="post">Registrar novo funcionário</option>
            <option value="put">Atualizar dados de funcionários</option>
            <option value="delete">Deletar registro de funcionários</option>
            </select>
            
            </>

        )}
        </>
    );
}

export default Funcionarios;

// import style from "./funcionarios.module.css"

// function Funcionarios() {
//     return (
//         <div className={style.container}>
//             <div className={style.title}>
//                 <h2>Funcionários</h2>
//             </div>
//             <div className={style.search}>
//                 <button type="button" className={style.buttonCreate}>Registrar funcionários</button>
//                 <input type={"text"} placeholder="Buscar" />
//             </div>


//             <div className={style.containerTable}>
//                 <table className={style.table}>
//                     <thead className={style.thead}>
//                         <tr>
//                             <th scope="col" className={style.th}>
//                                 INSERIR COLUNA
//                             </th>
//                             <th scope="col" className={style.th}>
//                                 INSERIR COLUNA
//                             </th>
//                             <th scope="col" className={style.th}>
//                                 INSERIR COLUNA
//                             </th>
//                             <th scope="col" className={style.th}>
//                                 INSERIR COLUNA
//                             </th>
//                             <th scope="col" className={style.th}>
//                                 INSERIR COLUNA
//                             </th>
//                             <th scope="col" className={style.th}>
//                                 INSERIR COLUNA
//                             </th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr className={style.body}>
//                             <td scope="row" className={style.linhas}>
//                                 INSERIR LINHA
//                             </td>
//                             <td ClassName={style.linhas}>
//                                 INSERIR LINHA
//                             </td>
//                             <td ClassName={style.linhas}>
//                                 INSERIR LINHA
//                             </td>
//                             <td ClassName={style.linhas}>
//                                 INSERIR LINHA
//                             </td>
//                             <td ClassName={style.linhas}>
//                                 INSERIR LINHA
//                             </td>
//                             <td ClassName={style.linhas}>
//                                 <div className={style.icons}>
//                                     <img src="./view.png" />
//                                     <img src="./lapis.png" />
//                                     <img src="./lixeira.png" />
//                                 </div>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>

//         </div >
//     )
// }

// export default Funcionarios