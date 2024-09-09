// import
const express =require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

// Listener
app.listen(
    PORT,
    () => console.log(`Server ready at http://localhost:${PORT}`) 
);
// Endpoint GET
app.get('/' , (req,res) => {
    res.status(200).send({
        product: "T-Shirt",
        size: "L",
        prize: 10.00,
        hasLogo: false
    })
});
