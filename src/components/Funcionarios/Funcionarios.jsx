import { useEffect } from "react";
import { useState } from "react";

import  GetFuncionarios  from "./GetFuncionarios/GetFuncionarios";
import  PostFuncionarios  from "./PostFuncionarios/PostFuncionarios";
import  DeleteFuncionarios  from "./DeleteFuncionarios/DeleteFuncionarios";
import  PutFuncionarios from "./PutFuncionarios/PutFuncionarios";

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