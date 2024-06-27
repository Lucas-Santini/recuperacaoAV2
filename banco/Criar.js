import * as SQLite from 'expo-sqlite';

export const create = async () => {
    try {
        db = await SQLite.openDatabaseAsync('nomeDoBanco');
        result = await db.runAsync(`CREATE TABLE IF NOT EXISTS pesos (id INTEGER PRIMARY KEY NOT NULL, peso REAL NOT NULL, data TEXT NOT NULL);`);
        if (result.changes > 0)
            console.log("[LOG] Query executada");
        else
            console.log("[LOG] Resultado vazio da consulta");
    } catch (error) {
        console.log(error);
    }
    return db;
}
