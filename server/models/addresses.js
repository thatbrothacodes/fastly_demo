export default (sequelize, types) => {
    return sequelize.define('addresses', {
        email: {
            type: types.STRING
        },
        visible: {
            type: types.STRING
        }
    })
}
