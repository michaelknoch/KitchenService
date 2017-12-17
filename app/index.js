const slack = require('./slack');
const { setCurrentIndex, getCurrentIndex } = require('./persist');

const { getChannelParticipants, sendMessage, sendMessageToChannel } = slack;


getChannelParticipants().then(console.log);

sendMessage('U8FSQDFJR', 'Denk an dein Kuechendienst diggi ;)');
sendPublicReminder('U8FSQDFJR');


async function sendPublicReminder(userId) {
    return sendMessageToChannel(`<@${userId}> hat Kuechendienst`);
}

slack.client.start();
