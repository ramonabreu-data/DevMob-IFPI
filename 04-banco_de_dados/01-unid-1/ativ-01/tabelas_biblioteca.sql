
/* criar tabelas*/

CREATE TABLE Usuario (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(50),
    Email VARCHAR(100)
);

CREATE TABLE Livro (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Titulo VARCHAR(100),
    Autor VARCHAR(50)
);

CREATE TABLE Emprestimo (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    ID_Usuario INT,
    ID_Livro INT,
    Data_Emprestimo DATE,
    Data_Devolucao DATE,
    FOREIGN KEY (ID_Usuario) REFERENCES Usuario(ID),
    FOREIGN KEY (ID_Livro) REFERENCES Livro(ID)
);

/* inserir  dados */

INSERT INTO Usuario (Nome, Email)
VALUES
  ('Ana Lima', 'ana@example.com'),
  ('Pedro Santos', 'pedro@example.com'),
  ('Mariana Oliveira', 'mariana@example.com'),
  ('Carlos Silva', 'carlos@example.com'),
  ('Luiza Fernandes', 'luiza@example.com');
 
 
 INSERT INTO Livro (Titulo, Autor)
VALUES
  ('Aventuras Incríveis', 'Carlos Lima'),
  ('O Mistério do Enigma', 'Ana Ferreira'),
  ('O Tesouro Perdido', 'Paulo Rodrigues'),
  ('Viagem ao Centro da Terra', 'Júlio Verne'),
  ('Histórias de Fantasia', 'Maria Souza');
 
 
 INSERT INTO Emprestimo (ID_Usuario, ID_Livro, Data_Emprestimo, Data_Devolucao)
VALUES
  (1, 1, '2023-09-01', '2023-09-08'),
  (2, 2, '2023-09-02', '2023-09-09'),
  (3, 3, '2023-09-03', '2023-09-10'),
  (4, 4, '2023-09-04', '2023-09-11'),
  (5, 5, '2023-09-05', '2023-09-12');

 /* select tabela usuario */
 
 SELECT * FROM Usuario 
 
 /* select do id usuario , livro e datas */
  
SELECT e.ID, u.Nome AS NomeUsuario, l.Titulo AS TituloLivro, e.Data_Emprestimo, e.Data_Devolucao
FROM Emprestimo e
JOIN Usuario u ON e.ID_Usuario = u.ID
JOIN Livro l ON e.ID_Livro = l.ID;



