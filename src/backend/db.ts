import Loki from "lokijs";

const db = new Loki("myDatabase");
export type Users = {
    name: string;
    owner: string;
    maker: string;
  }

const users = db.addCollection<Users>("users");
const aUsers = [];
for (let i = 1; i < 10; i++) {
  aUsers.push({
    name: "mjolnir " + i,
    owner: "thor" + i,
    maker: "dwarves" + i,
  });
}

users.insert(aUsers);

export default db;
