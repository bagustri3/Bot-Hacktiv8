const { readdirSync } = require("fs");

module.exports = (client) => {
  client.handleComponents = async () => {
    const componentFolder = readdirSync("./src/components");
    for (const folder of componentFolder) {
      const componentFiles = readdirSync(`./src/components/${folder}`).filter(
        (file) => file.endsWith(".js")
      );
      const { buttons, menus } = client;


      switch (folder) {
        case "button":
          for (const file of componentFiles) {
            const button = require(`../../components/${folder}/${file}`);
            buttons.set(button.data.name, button);
            // buttons.push(button.data.toJSON())
            // commandsArr.push(command.data.toJSON());
          }
          break;
        case "selectMenu":
          for (const file of componentFiles) {
            const menu = require(`../../components/${folder}/${file}`)
            menus.set(menu.data.name, menu)
          }
          break;
        default:
          break;
      }
    }
  };
};
