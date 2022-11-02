const { SlashCommandBuilder, Embed, EmbedBuilder } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("wibu")
    .setDescription("Get a random gif of animeg"),
  async execute(interaction, client) {
    // console.log(`${client.random}`)
    const embed = new EmbedBuilder()
      .setTitle("Weaboo as a Developer is the most powerful Person")
      .setDescription("Lari ada wibu🏃‍♂️🏃‍♂️")
      .setColor("e25609")
      .setImage(client.random)
      .setThumbnail(interaction.user.displayAvatarURL())
      .setTimestamp(new Date())
      .setAuthor({
        url: `https://hacktiv8.com/`,
        iconURL: interaction.user.displayAvatarURL(),
        name: interaction.user.tag,
      })
      .setFooter({
        iconURL: client.user.displayAvatarURL(),
        text: client.user.tag,
      })
    //   console.log(client.random)
    await interaction.reply({
      embeds: [embed],
    });
  },
};
