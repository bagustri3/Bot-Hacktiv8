const { SlashCommandBuilder, EmbedBuilder, Embed } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("luck")
    .setDescription("See your luck RN!"),
  async execute(interaction, client) {
    const message = await interaction.deferReply({
      fetchReply: true,
    });
    // console.log(client)
    const math = Math.floor(Math.random()*100)+1
    let msg = ''
    if(math > 80) msg = 'Good Luck😎🙏'
    else if(math > 60) msg = 'WOW hope u get a nice day❤'
    else if(math > 25) msg = 'OMG😭 i hope u have a nice day'
    else if(math > 0) msg = 'OMG😭😭😭 Go to sleep'
    const newMessage = `Your luck is : ${math}% ${msg}`;
    await interaction.editReply({
      content: newMessage,
    });
  },
};
