import * as admin from "firebase-admin";
const serviceAccount = require("./serviceAccountKey.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL:
      "https://sklady-skori-default-rtdb.europe-west1.firebasedatabase.app",
    app: "sklady-skori",
  });
}

const db = admin.database();
export { db };
