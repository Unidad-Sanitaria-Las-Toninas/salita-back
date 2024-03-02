import { Sequelize } from "sequelize"
export const sequelize = new Sequelize("Salita", "postgres", "santiago45",{
    host: "localhost",
    dialect:"postgres"
})

const Connection = async () =>{
    try {
        await sequelize.authenticate()
        console.log("conexion establecida")
    } catch (error) {
        console.log("sin conexion, error: ", error)
    }
}

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Modelo sincronizado con la base de datos");
  })
  .catch((error) => {
    console.error("Error al sincronizar el modelo:", error);
  });