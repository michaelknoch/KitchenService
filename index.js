const { RtmClient } = require('@slack/client');
const { CLIENT_EVENTS } = require('@slack/client');

const { token } = require('./env.json');
const fetch = require('node-fetch');

const client = new RtmClient(token);

sendMessageToChannel('Anika hat Küchendienst diggi');
sendMessage('U8FSQDFJR', 'yoyo');

getChannelMembers().then(console.log);

async function getChannelMembers() {
    const response = await fetch(`https://slack.com/api/channels.list?token=${token}`);
    const json = await response.json();

    const { channels } = json;
    const { members } = channels.find(channel => channel.name === 'kuechendienst');
    return members;
}

async function sendMessage(receiver, message) {
    const messageRoute = 'https://slack.com/api/chat.postMessage';
    return fetch(`${messageRoute}?token=${token}&channel=${receiver}&text=${message}&username=slackbot`);
}

async function sendMessageToChannel(message) {
    const channelId = 'C8F3EFS80';
    return sendMessage(channelId, message);
}


client.start();

