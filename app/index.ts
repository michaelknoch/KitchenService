import { getChannelParticipants, sendMessage, sendMessageToChannel } from "./slack";
const currentWeekNumber = require("current-week-number");

function sendPublicReminder(userId: String): void {
    sendMessageToChannel(`<@${userId}> hat Kuechendienst`);
}

export function monday(): void {
    getChannelParticipants().then(participants => {
        const weekNumber: number = currentWeekNumber();
        const index = participants.length % weekNumber - 1;

        const newUserId = participants[index];

        sendMessage(newUserId, "Denk an dein Kuechendienst");
        sendPublicReminder(newUserId);
    });
}
