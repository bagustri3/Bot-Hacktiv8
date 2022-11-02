const { SlashCommandBuilder, SelectMenuBuilder, SelectMenuInteraction, ActionRowBuilder, SelectMenuOptionBuilder } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("menu")
    .setDescription("Return select menu!"),
  async execute(interaction, client) {
    
  },
};
