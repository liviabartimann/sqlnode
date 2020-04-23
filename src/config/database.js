module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "postgres",
  database: "aulasqlnode",
  define: {
    timestamps: true, //created_at (quando foi criado) e updated_at (ultima vez q o registro foi atualizado)
    underscored: true,
  },
};
