module.exports = (sequelize, Sequelize) => {

    return sequelize.define("transacoes", {
        tipo: {
            type: Sequelize.STRING
        },
        data: {
            type: "DATETIME"
        },
        produto: {
            type: Sequelize.STRING
        },
        valor: {
            type: Sequelize.STRING
        },
        vendedor: {
            type: Sequelize.STRING
        },
        createdAt: {
            type: "DATETIME",
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
        },
        updatedAt: {
            type: "DATETIME",
            allowNull: true
        }
    });
};
