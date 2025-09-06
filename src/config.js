/** @format */

module.exports = {
  token:
    "MTQxMzIwMzQ4NjkwODA4ODMyMA.G1qMGT.wXhW8YSMsEf5vBtLxIb3LV4YfbUxBwiCvaXqbM",
  clientId: "1413203486908088320",
  prefix: ">",
  ownerID: "1187434528810209470",
  SpotifyID: "85aab1d51a174aad9eed6d7989f530e6",
  SpotifySecret: "b2ad05aa725e434c88776a1be8eab6c2",
  mongourl:
    "mongodb+srv://idk:idka@cluster0.wbsfgzr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  embedColor: "#2f3136",
  logs: "https://discord.com/api/webhooks/1413206703767556157/cqVwERDKQ4DINRMjg-OrPhc-TaFjAd0T4kMQ2SmLbfYt9N2KXn-b0VYizBfuzMsHJfOP",
  node_source: "ytsearch",
  topgg:
    "here",
  links: {
    BG: "https://cdn.discordapp.com/attachments/1061636453437804544/1186002755924525166/20231217_232106.jpg",
    support: "discord.gg/fCBhQQKHEn",
    invite:
      "https://discord.com/oauth2/authorize?client_id=1413203486908088320&permissions=8&integration_type=0&scope=bot",
    arrkiii:
      "https://cdn.discordapp.com/attachments/1187323477032697867/1236626903847407696/Arrkiii.gif",
    power: "Powered by DiscorG3n 🌙",
    vanity: "discord.gg/fCBhQQKHEn",
    guild: "1411827030865084616",
    topgg: "https://top.gg/bot/1033496708992204840/vote",
  },
  Webhooks: {
      black: "https://discord.com/api/webhooks/1413206703767556157/cqVwERDKQ4DINRMjg-OrPhc-TaFjAd0T4kMQ2SmLbfYt9N2KXn-b0VYizBfuzMsHJfOP",
    player_create:
      "https://discord.com/api/webhooks/1413206703767556157/cqVwERDKQ4DINRMjg-OrPhc-TaFjAd0T4kMQ2SmLbfYt9N2KXn-b0VYizBfuzMsHJfOP",
    player_delete:
      "https://discord.com/api/webhooks/1413206703767556157/cqVwERDKQ4DINRMjg-OrPhc-TaFjAd0T4kMQ2SmLbfYt9N2KXn-b0VYizBfuzMsHJfOP",
    guild_join:
      "https://discord.com/api/webhooks/1413206703767556157/cqVwERDKQ4DINRMjg-OrPhc-TaFjAd0T4kMQ2SmLbfYt9N2KXn-b0VYizBfuzMsHJfOP",
      guild_leave: "https://discord.com/api/webhooks/1413206703767556157/cqVwERDKQ4DINRMjg-OrPhc-TaFjAd0T4kMQ2SmLbfYt9N2KXn-b0VYizBfuzMsHJfOP",
    cmdrun:
 "https://discord.com/api/webhooks/1413206703767556157/cqVwERDKQ4DINRMjg-OrPhc-TaFjAd0T4kMQ2SmLbfYt9N2KXn-b0VYizBfuzMsHJfOP",
  },

  nodes: [
    {
       url: process.env.NODE_URL || "lava-v4.ajieblogs.eu.org:443",
      name: process.env.NODE_NAME || "Lavalink",
      auth: process.env.NODE_AUTH || "discord.gg/fCBhQQKHEn",
      secure: parseBoolean(process.env.NODE_SECURE || "true"),
    },
  ],
};

function parseBoolean(value) {
  if (typeof value === "string") {
    value = value.trim().toLowerCase();
  }
  switch (value) {
    case true:
    case "true":
      return true;
    default:
      return false;
  }
}
