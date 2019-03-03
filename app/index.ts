import { getChannelParticipants, sendMessage, sendMessageToChannel } from "./slack";
const currentWeekNumber = require("current-week-number");

async function sendPublicReminder(userId: String): Promise<void> {
    await sendMessageToChannel(`<@${userId}> hat Kuechendienst`);
}

export async function monday(): Promise<void> {
    const participants = await getChannelParticipants();
    const weekNumber: number = currentWeekNumber();
    const index = (participants.length % weekNumber) - 1;

    const newUserId = participants[index];
    sendMessage(newUserId, "Denk an dein Kuechendienst");

    sendPublicReminder(newUserId);
}

monday();
