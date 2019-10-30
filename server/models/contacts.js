export default (sequelize, types) => {
    return sequelize.define('contacts', {
        id: {
          type: types.STRING,
          primaryKey: true
        },
        status: {
            type: types.STRING
        },
        updated: {
            type: types.STRING
        },
        name : {
            type: types.STRING
        },
        phone: {
            type: types.STRING
        },
        url: {
            type: types.STRING
        },
        created: {
            type: types.STRING
        },
        net_id: {
            type: types.STRING
        },
        role: {
            type: types.STRING
        },
        birthday: {
            type: types.STRING
        },
        department: {
            type: types.STRING
        },
        title: {
            type: types.STRING
        },
        slack: {
            type: types.STRING
        },
        image: {
        
            type: types.STRING
        }
    },
    {
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false
    });
}
