import app from "./app";
import { authenticateDatabase as quotesDatabase } from "./app/services/user";

const PORT = process.env.PORT || 5000;

quotesDatabase();

app.listen(PORT, () => `We are rocking on port ${PORT}!`);
