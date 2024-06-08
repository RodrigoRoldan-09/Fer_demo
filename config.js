const PORT = process.env.PORT || 2010
const MYSQLHOST = process.env.MYSQLHOST || 'localhost'
const MYSQLUSER = process.env.MYSQLUSER || 'root'
const MYSQL_ROOT_PASSWORD = process.env.MYSQL_ROOT_PASSWORD || '-RoDs0919_'
const MYSQLDATABASE = process.env.MYSQLDATABASE || 'prueba'
const MYSQLPORT = process.env.MYSQLPORT || 3306

module.exports = {PORT, MYSQLHOST, MYSQLUSER, MYSQL_ROOT_PASSWORD, MYSQLDATABASE, MYSQLPORT};