const { SlashCommandBuilder, Embed, EmbedBuilder } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("See about test command!"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("Test Test Suara Saya Ada Ngga!?")
      .setDescription("Hehe🏃‍♂️🏃‍♂️")
      .setColor("e25609")
      .setImage("https://pbs.twimg.com/media/FfLiidwacAE8qI9?format=jpg&name=900x900")
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp(new Date())
      .setAuthor({
        url: `https://hacktiv8.com/`,
        iconURL: client.user.displayAvatarURL(),
        name: client.user.tag,
      })
      .setFooter({
        iconURL: client.user.displayAvatarURL(),
        text: client.user.tag,
      })
    await interaction.reply({
      embeds: [embed],
    });
  },
};
