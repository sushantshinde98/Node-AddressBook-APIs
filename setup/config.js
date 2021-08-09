const myconfig={
    mongoURL:`mongodb+srv://${process.env.mDB_USER}:${process.env.mDB_PASS}@addressbook.mvxhm.mongodb.net/${process.env.mDB_NAME}?retryWrites=true&w=majority`,
    nodePort:3000,
    hostname:'0.0.0.0'
}

module.exports=myconfig;