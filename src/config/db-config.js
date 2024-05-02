module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "form_steps",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };