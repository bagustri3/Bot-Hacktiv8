const {
    SlashCommandBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
  } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder().setName("cheatsheet").setDescription("button!"),
  
    async execute(interaction, client) {
      const button = new ButtonBuilder()
        .setCustomId("libraries")
        .setLabel("Cheatsheet🖥💻📖")
        .setStyle(ButtonStyle.Primary);
        
      await interaction.reply({
        components: [new ActionRowBuilder().addComponents(button)],
      });
    },
  };
  