npm init
npm express
    -app = express()
    -app.set('view engine', 'ejs')
    -app.use(express.static('public'))
    -app.use(express.json())
    -app.use(express.urlencoded({extended: false}))
npm ejs