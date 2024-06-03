module.exports = (sequelize, Sequelize) => {

    return sequelize.define("historic", {
        word: {
            type: Sequelize.STRING
        },
        user: {
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