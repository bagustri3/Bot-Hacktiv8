module.exports = {
    data : {
        name : 'libraries'
    },
    async execute(interaction, client) {
        await interaction.reply({
            content : 'Javascript :\n1. https://www.javatpoint.com/\n2. https://www.w3schools.com/js/default.asp\n3. https://stackoverflow.com/questions/tagged/javascript'
        })
    }
}