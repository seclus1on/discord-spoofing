const { Client } = require('discord.js-selfbot-v13');
const config = require('./config');

for (const [browser, device] of Object.entries(config.devices)) {
    const client = new Client({
        http: {
            headers: {
                'User-Agent': `Discord/${browser} (${device})`,
                'Accept-Language': 'en-US',
            },
        },
        ws: {
            properties: {
                browser: browser,
                device: device,
            },
        },
    });

    client.on('ready', async () => {
        console.log(`spoofed as ${browser} on ${device}, for ${config.token.substring(0, 15)}... ${client.user?.username}`);
    })

    client.login(config.token);
}
