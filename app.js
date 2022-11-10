require("dotenv").config();
const fs = require("fs");
const { DC_TOKEN } = process.env;
const {
  Client,
  GatewayIntentBits,
  EmbedBuilder,
  PermissionsBitField,
  MessageActivityType,
  Collection,
} = require("discord.js");
// const prefix = "!";

//!

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

//!

client.commands = new Collection();
client.buttons = new Collection()
client.menus = new Collection()
client.commandsArr = []
console.log(client.buttons)

//!

const functionFolders = fs.readdirSync("./src/functions");

for (const folder of functionFolders) {
const test = "asewaawndwuiabnduiwa"
  const functionFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter((file) => file.endsWith(".js"));
  for (const file of functionFiles)
    require(`./src/functions/${folder}/${file}`)(client);
}

client.handleEvents()
client.handleComponents()
client.handleCommands()
// client.on("ready", () => {
//   console.log("Bot is online Right Now");
//   client.user.setActivity("Ready to ruin your day BB", { type: "WATCHING" });
// });
// client.on("messageCreate", (message) => {
//   if (!message.content.startsWith(prefix) || message.author.bot) return;

//   const args = message.content.slice(prefix.length).split(/ +/);

//   const command = args.shift().toLowerCase();

//   //! Message arr
//   const arrMessage = message.content.split(" ");
//   const argument = arrMessage.slice(1);
//   const cmd = arrMessage[0];
//   //! Commands

//   //!Test command
//   if (command === "test") {
//     message.channel.send("Tes Tes Ada Suara Saya Ngga?");
//   }
// });
client.login(DC_TOKEN);
