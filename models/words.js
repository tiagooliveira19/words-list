module.exports = (sequelize, Sequelize) => {

    return sequelize.define("words", {
        word: {
            type: Sequelize.STRING
        },
        phonetic: {
            type: Sequelize.STRING
        },
        meanings: {
            type: Sequelize.STRING
        },
        favorite: {
            type: Sequelize.INTEGER
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