const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")

dotenv.config()

const PORT = process.env.PORT
const { sequelize } = require("./lib/sequelize")
const userController = require("./routes/user")
const categoryController = require("./routes/category")
const productController = require("./routes/product")
const unitController = require("./routes/unit")
const stockHistoryController = require("./routes/stockHistory")

const app = express()
app.use(bodyParser.urlencoded({extended: true}))

//command this code after making new model.
// sequelize.sync({ alter: true })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true  }))

app.use(cors())
app.use(express.json())

app.use("/user", userController)
app.use("/category", categoryController)
app.use("/product", productController)
app.use("/unit", unitController)
app.use("/history", stockHistoryController)

app.use("/category_img", express.static(`${__dirname}/public/category_img`))
app.use("/product_img", express.static(`${__dirname}/public/product_img`))

app.get("/", (req, res) => {
    res.send("API is running")
})

app.listen(PORT, ()=> {
    console.log("Server is running in port " + PORT)
})