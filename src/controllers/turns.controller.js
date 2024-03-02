import Turns from "../models/turns.js";

export const getTurns = async (req, res) => {
  try {
    const turns = await Turns.findAll();
    res.status(200).json(turns);
  } catch (error) {
    console.log(error);
  }
};

export const createTurn = async (req, res) => {
  const { body } = req;
  try {
    const newTurn = await Turns.create({
      paciente: body.paciente,
      profesion: body.profesion,
      fecha: body.fecha

    });
    res.status(200).json(newTurn);
  } catch (error) {}
};

export const deleteTurn = async (req, res) => {
  const { id } = req.params;
  try {
    const turn = await Turns.destroy({
      where: {
        id,
      },
    });
    res.json(turn);
  } catch (error) {
    console.log(error);
  }
};

export const updateTurn = async (req, res) => {
    const { id } = req.params;
    try {
      const turn = await Turns.update(req.body, {
        where: {
          id,
        },
      });
      console.log(turn)
      res.json(turn);
    } catch (error) {
      console.log(error);
    }
  };
  
