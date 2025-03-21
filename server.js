const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;

const userRouter = jsonServer.router("user.json");
const loanRouter = jsonServer.router("loan.json");

// Merging multiple JSON files into a single router
const db = {
  users: require("./user.json").users,  // Adjust key based on JSON structure
  loans: require("./loan.json").loans,  // Adjust key based on JSON structure
};

const router = jsonServer.router(db); 

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
