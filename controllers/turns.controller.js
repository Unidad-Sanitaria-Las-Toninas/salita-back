import pool from "../database.js";


export const getTurns = async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM turns");
    res.status(200).json(rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener los turnos" });
  }
};

export const getTurn = async (req, res) => {
  const { dni } = req.params;
  try {
    console.log(dni)
    const  row  = await pool.query("SELECT * FROM turnos WHERE dni = $1", [dni]);
    console.log(row)
    res.status(200).json(row);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener el turno" });
  }
}

export const createTurn = async (req, res) => {
  const { body } = req;
  const { paciente, profesion, fecha, dni } = body;
  try {
    const newTurn = await pool.query(
      "INSERT INTO turnos (paciente, profesion, fecha, dni) VALUES ($1, $2, $3, $4) RETURNING *",
      [paciente, profesion, fecha, dni]
    );
    res.status(200).json(newTurn.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al crear un turno" });
  }
};

export const deleteTurn = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTurn = await pool.query("DELETE FROM turnos WHERE id = $1 RETURNING *", [id]);
    res.status(200).json(deletedTurn.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al eliminar el turno" });
  }
};

export const updateTurn = async (req, res) => {
  const { id } = req.params;
  const { paciente, profesion, fecha, dni } = req.body;
  try {
    const updatedTurn = await pool.query(
      "UPDATE turnos SET paciente = $1, profesion = $2, fecha = $3, dni = $4 WHERE id = $5 RETURNING *",
      [paciente, profesion, fecha, dni, id]
    );
    res.status(200).json(updatedTurn.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al actualizar el turno" });
  }
};
  
