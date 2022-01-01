const fs = require('fs')
const ascii = require('ascii-table')

module.exports = async(client) => {
    let table = new ascii("Events");
    table.setHeading('Event', ' Load status');

    fs.readdirSync(`./src/events/`).forEach((dir) => {
      const directories = fs.readdirSync(`./src/events/${dir}`).filter((file) => file.endsWith('.js'))
      for(let file of directories) {
        const event = require(`../../../events/${dir}/${file}`)

        table.addRow(file, "✅");
    
        event(client)
      }
    })
    
    console.log(table.toString())
}