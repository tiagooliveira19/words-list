module.exports = (sequelize, Sequelize) => {

    return sequelize.define("usuarios", {
        nome: {
            type: Sequelize.STRING
        },
        senha: {
            type: Sequelize.STRING
        },
        telefone: {
            type: Sequelize.STRING
        },
        endereco: {
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
