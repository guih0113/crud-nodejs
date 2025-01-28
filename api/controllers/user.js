import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM tb_usuarios";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addUser = (req, res) => {
    const q = "INSERT INTO tb_usuarios(`nome_usuario`, `email_usuario`, `fone_usuario`, `nascimento_usuario`) VALUES(?)";

    const values = [
        req.body.nome_usuario,
        req.body.email_usuario,
        req.body.fone_usuario,
        req.body.nascimento_usuario,
    ];

    db.query(q, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Usuário criado com sucesso!");
    });
};

export const updateUser = (req, res) => {
    const q = "UPDATE tb_usuarios SET `nome_usuario` = ?, `email_usuario` = ?, `fone_usuario` = ?, `nascimento_usuario` = ? WHERE `id_usuario` = ?";

    const values = [
        req.body.nome_usuario,
        req.body.email_usuario,
        req.body.fone_usuario,
        req.body.nascimento_usuario,
    ];

    db.query(q, [...values, req.params.id_usuario], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Usuário atualizado com sucesso!");
    });
};

export const deleteUser = (req, res) => {
    const q = "DELETE FROM tb_usuarios WHERE `id_usuario` = ?";

    db.query(q, [req.params.id_usuario], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Usuário deletado com sucesso!");
    });
};

