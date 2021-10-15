const db = require("../../data/dbConfig");

function getAll() {
  return db("users")
}

function getById(user_id) {
  return db("users").where("user_id", user_id).first();
}

async function add(user) {
  const [id] = await db("users").insert(user, "id");
  return getById(id);
}


module.exports = {
  getAll,
  getById,
  add,
};
