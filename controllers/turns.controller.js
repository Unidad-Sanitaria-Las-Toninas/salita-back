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

export const createTurn = async (req, res) => {
  const { body } = req;
  const { paciente, profesion, fecha } = body;
  try {
    const newTurn = await pool.query(
      "INSERT INTO turns (paciente, profesion, fecha) VALUES ($1, $2, $3) RETURNING *",
      [paciente, profesion, fecha]
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
    const deletedTurn = await pool.query("DELETE FROM turns WHERE id = $1 RETURNING *", [id]);
    res.status(200).json(deletedTurn.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al eliminar el turno" });
  }
};

export const updateTurn = async (req, res) => {
  const { id } = req.params;
  const { paciente, profesion, fecha } = req.body;
  try {
    const updatedTurn = await pool.query(
      "UPDATE turns SET paciente = $1, profesion = $2, fecha = $3 WHERE id = $4 RETURNING *",
      [paciente, profesion, fecha, id]
    );
    res.status(200).json(updatedTurn.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al actualizar el turno" });
  }
};
  
