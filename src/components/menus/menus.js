module.exports= {
    data : {
        name : 'menus'
    },
    async execute(interaction, client) {
        await interaction.reply({
            content : `Selected ${interaction.values[0]}`
        })
    }
}