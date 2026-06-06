# Discord Platform Spoofer

Spoof multiple Discord platform sessions simultaneously using `discord.js-selfbot-v13`.

## Features

* Spoof as:

  * Discord VR (Meta Quest 3)
  * Discord Embedded (PS5)
  * Discord Android
  * Discord Client (Desktop)
* Custom User-Agent for each session
* Automatic login to all configured platforms
* Simple configuration file

## Installation

```bash
npm install discord.js-selfbot-v13
```

## Configuration

Create a `config.json` file:

```json
{
    "token": "",
    "devices": {
        "Discord VR": "Meta Quest 3",
        "Discord Embedded": "PS5",
        "Discord Android": "sdk_gphone64_x86_64, sdk_gphone64_x86_64",
        "Discord Client": "Desktop"
    }
}
```

Replace `token` with your Discord account token.

## Usage

```bash
npm i
node index.js
```

## Example Output

```text
spoofed as Discord VR on Meta Quest 3, for MTAxMjM0NTY3ODkw... Username
spoofed as Discord Embedded on PS5, for MTAxMjM0NTY3ODkw... Username
spoofed as Discord Android on sdk_gphone64_x86_64, sdk_gphone64_x86_64, for MTAxMjM0NTY3ODkw... Username
spoofed as Discord Client on Desktop, for MTAxMjM0NTY3ODkw... Username
```

## Source

```js
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
        console.log(
            `spoofed as ${browser} on ${device}, for ${config.token.substring(0, 15)}... ${client.user?.username}`
        );
    });

    client.login(config.token);
}
```

## Disclaimer

This project uses a selfbot library and may violate Discord's Terms of Service. Use at your own risk. Account limitations, restrictions, or bans may occur as a result of using selfbots or modified clients.
