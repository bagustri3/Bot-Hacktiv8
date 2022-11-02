const rga = require("random-gif-api");
const axios = require("axios");
module.exports = {
  name: "interactionCreate",
  async execute(interaction, client) {
    if (interaction.isChatInputCommand()) {
      const { commands } = client;
      const { commandName } = interaction;
      const command = commands.get(commandName);
      if (!command) return;

      const randomApiGif = [
        "https://api.satou-chan.xyz/api/endpoint/pat",
        "https://api.satou-chan.xyz/api/endpoint/anime",
        "https://api.satou-chan.xyz/api/endpoint/angry",
        "https://api.satou-chan.xyz/api/endpoint/bored",
        "https://api.satou-chan.xyz/api/endpoint/cuddle",
        "https://api.satou-chan.xyz/api/endpoint/happy",
        "https://api.satou-chan.xyz/api/endpoint/satouselfies",
        "https://api.satou-chan.xyz/api/endpoint/bite",
      ];
      try {
        const randomGif = await axios.get(
          randomApiGif[Math.floor(Math.random() * randomApiGif.length) + 1]
        );
        // console.log(client)
        // const loveCalculator = await axios.get(
        //   `https://love-calculator.p.rapidapi.com/getPercentage?sname=maria&fname=gio`,
        //   {
        //     headers: {
        //       "X-RapidAPI-Key":
        //         "de0fa337c0msh2a47a3e06500972p1d4d04jsn31cc3f2e535b",
        //       "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
        //     },
        //   }
        // );
        // console.log(loveCalculator.data);
        // client.loveCalculator = loveCalculator.data;
        client.random = randomGif.data.url;
        await command.execute(interaction, client);
      } catch (error) {
        console.error(error);
        await interaction.reply({
          content: `Something went wrong while execute this command`,
          ephemerel: true,
        });
      }
    } else if (interaction.isButton()) {
      const { buttons } = client;
      const { customId } = interaction;
      // console.log(customId)
      // console.log(buttons)
      const button = buttons.get(customId);
      // console.log(button)
      if (!button) return new Error("Theres no button");
      try {
        await button.execute(interaction, client);
      } catch (error) {
        console.error(error);
      }
    } else if(interaction.isSelectMenu()) {
      const {menus } = client
      const { customId } = interaction
      const menu = menus.get(customId)
      if(!menu) {
        return new Error('Theres no select menus')
      }

      try {
        await menu.execute(interaction, client)
      } catch (error) {
        console.error(error)
      }
    }
  },
};
