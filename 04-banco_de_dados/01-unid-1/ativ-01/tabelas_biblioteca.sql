--tabela usuario
CREATE TABLE Usuario (
    ID INT PRIMARY KEY,
    Nome VARCHAR(50),
    Email VARCHAR(100)
);
--tabela livrp
CREATE TABLE Livro (
    ID INT PRIMARY KEY,
    Titulo VARCHAR(100),
    Autor VARCHAR(50)
);
--Tabeela emprestimo
CREATE TABLE Emprestimo (
    ID INT PRIMARY KEY,
    ID_Usuario INT,
    ID_Livro INT,
    Data_Emprestimo DATE,
    Data_Devolucao DATE,
    FOREIGN KEY (ID_Usuario) REFERENCES Usuario(ID),
    FOREIGN KEY (ID_Livro) REFERENCES Livro(ID)
);

--Consulta tabela Usuario
SELECT * FROM Usuario;

--consulta tabela Livro
SELECT * FROM Livro;


--consulta tabela Emprestimo
SELECT * FROM Emprestimo;
