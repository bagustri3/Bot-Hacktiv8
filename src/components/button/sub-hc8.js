module.exports = {
    data : {
        name : 'hacktiv-8'
    },
    async execute(interaction, client) {
        await interaction.reply({
            content : 'https://hacktiv8.com'
        })
    }
}