var pool = require('./bd');

async function getNovedades() {
    var query = 'select * from novedades';
    var rows = await pool.query (query);
    return rows;
}

async function insertNovedad(obj) {
    try {
        var query = "insert into novedades set ?";
        var rows = await pool.query(query, [obj])
        return rows;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteNovedadesById(Id) {
    var query = 'delete from novedades where id = ?';
    var rows = await pool.query(query, [Id]);
    return rows;
}

async function getNovedadById(Id) {
    var query = 'select * from novedades where Id = ?';
    var rows = await pool.query(query, [Id]);
    return rows[0];
}

async function modificarNovedadById(obj, Id) {
    try {
        var query = 'update novedades set ? where Id = ?';
        var rows = await pool.query(query, [obj, Id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = { getNovedades, insertNovedad, 
    deleteNovedadesById, getNovedadById, modificarNovedadById };