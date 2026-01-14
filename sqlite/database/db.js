import * as SQLite from 'expo-sqlite';

let db;

async function getDB() {
  if (!db) {
    db = await SQLite.openDatabaseAsync('loja.db');
  }
  return db;
}

export async function criarTabela() {
  const db = await getDB();
   
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS produtos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      preco REAL NOT NULL
    );
  `);
}

export async function listar() {
  const db = await getDB();
  return await db.getAllAsync('SELECT * FROM produtos;');
}

export async function inserir(nome, preco) {
  const db = await getDB();
  const result = await db.runAsync(
    'INSERT INTO produtos (nome, preco) VALUES (?, ?);',
    [nome, preco]
  );
  console.log('INSERT ID:', result.lastInsertRowId);
}

export async function atualizar(id, nome, preco) {
  const db = await getDB();

  await db.runAsync(
    'UPDATE produtos SET nome = ?, preco = ? WHERE id = ?;',
    [nome, preco, id]
  );
}

export async function excluir(id) {
  const db = await getDB();

  await db.runAsync(
    'DELETE FROM produtos WHERE id = ?;',
    [id]
  );
}

