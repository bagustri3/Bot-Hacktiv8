const {
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  Embed,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("hacktiv").setDescription("button!"),

  async execute(interaction, client) {
    const button = new ButtonBuilder()
      .setCustomId("hacktiv-8")
      .setLabel("Hacktiv8 ๐ฆ")
      .setStyle(ButtonStyle.Danger);
    const embeds = new EmbedBuilder()
    .setTitle("Hacktiv8 Student Bot")
    .setDescription("#Happycoding๐๐๐ฆ\n Hehe๐โโ๏ธ๐โโ๏ธ")
    .setColor("e25609")
    .setImage(client.user.displayAvatarURL())
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
    .setURL("https://hacktiv8.com/")
    .addFields([
      {
        name: `Hacktiv8 Profile`,
        value: `https://hacktiv8.com/`,
      },
      {
        name: `Libraries`,
        value: `!INFORMATION/CHEATSHEET :\nhttps://www.w3schools.com/\nhttps://www.javatpoint.com/\n!FUNDAMENTAL :\nhttps://www.codewars.com/\nhttps://www.hackerrank.com/`,
      },
    ]);
    await interaction.reply({
      embeds: [embeds],
      components: [new ActionRowBuilder().addComponents(button)],
    });
  },
};
