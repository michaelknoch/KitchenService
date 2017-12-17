const fetch = require('node-fetch');
const { RtmClient } = require('@slack/client');
const { token } = require('./env.json');


async function getChannelMembers() {
    const response = await fetch(`https://slack.com/api/channels.list?token=${token}`);
    const json = await response.json();

    const { channels } = json;
    const { members } = channels.find(channel => channel.name === 'küchendienst');
    return members;
}

async function sendMessage(receiver, message) {
    const messageRoute = 'https://slack.com/api/chat.postMessage';
    return fetch(`${messageRoute}?token=${token}&channel=${receiver}&text=${message}&username=slackbot&link_names=true`);
}

async function sendMessageToChannel(message) {
    const channelId = 'C8F3EFS80';
    return sendMessage(channelId, message);
}


module.exports = {
    getChannelMembers,
    sendMessage,
    sendMessageToChannel,
    client: new RtmClient(token),
};

