const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const fs = require("fs");
module.exports = (client) => {
  client.handleCommands = async () => {
    const commandFolders = fs.readdirSync("./src/commands");
    for (const folder of commandFolders) {
      const commandFiles = fs
        .readdirSync(`./src/commands/${folder}`)
        .filter((file) => file.endsWith(".js"));

      const { commands, commandsArr } = client;
      for (const file of commandFiles) {
        const command = require(`../../commands/${folder}/${file}`);
        commands.set(command.data.name, command);
        commandsArr.push(command.data.toJSON());
        // console.log(
        //   `Commands : ${command.data.name} has been passed Through the handler`
        // );
      }
    }
    const clientId = "1030698103046668288";
    const guildId = "1000761348659105852";
    const rest = new REST({ version: "9" }).setToken(process.env.DC_TOKEN);
    try {
      console.log(`Started refreshing app (/) commands.`);
      await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
        body: client.commandsArr,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
