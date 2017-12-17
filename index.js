const slack = require('./slack');

const { getChannelMembers, sendMessage, sendMessageToChannel } = slack;

getChannelMembers().then(console.log);
sendMessageToChannel('<@U8FSQDFJR> hat Kuechendienst diggi');

sendMessage('U8FSQDFJR', 'yoyo');

slack.client.start();
