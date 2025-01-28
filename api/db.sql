CREATE DATABASE crud;
USE crud;

CREATE TABLE tb_usuarios(
	id_usuario int primary key auto_increment not null,
    nome_usuario varchar(255) not null,
    email_usuario varchar(255) not null,
    fone_usuario varchar(45) not null,
    nascimento_usuario varchar(255) not null
);

INSERT INTO tb_usuarios VALUES
(default, 'guilherme', 'gui.henriquess13@gmail.com', '(13) 99788-2799', '2007-01-13');