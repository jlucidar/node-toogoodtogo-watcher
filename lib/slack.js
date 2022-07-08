const api = require("got");
const { config } = require("./config");

module.exports = {
  notifySlack,
};

function notifySlack(slackMessage) {
  const slackWebhooks = config.get("notifications.slack.webhookUrls");
  for (const slackWebhook of slackWebhooks) {
    api.post(
      `${slackWebhook}`,
      {
        json: {
          text: slackMessage,
        },
      }
    );
  }
}
