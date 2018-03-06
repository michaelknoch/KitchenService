import { getChannelParticipants, sendMessage, sendMessageToChannel } from "./slack";
const currentWeekNumber = require("current-week-number");

async function sendPublicReminder(userId: String) {
    return sendMessageToChannel(`<@${userId}> hat Kuechendienst`);
}

export function monday() {
    getChannelParticipants().then(participants => {
        const weekNumber: number = currentWeekNumber();
        const index = participants.length % weekNumber - 1;

        const newUserId = participants[index];

        sendMessage(newUserId, "Denk an dein Kuechendienst");
        sendPublicReminder(newUserId);
    });
}

