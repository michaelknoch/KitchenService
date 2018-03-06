import { Channel, QueryObject } from "./interfaces";
import fetch from "node-fetch";
import { RtmClient } from "@slack/client";
const { token } = require("../env.json");

async function getChannelParticipants() {
    const response = await fetch(`https://slack.com/api/channels.list?token=${token}`);
    const json = await response.json();

    const { channels } = json;
    const { members } = channels.find((channel: Channel) => channel.name === "küchendienst");
    return members;
}

async function sendMessage(receiver: String, message: String) {
    const queryString = objectToQueryString({
        channel: receiver,
        text: message,
        username: "slackbot",
        link_names: true,
        token
    });
    return fetch(`https://slack.com/api/chat.postMessage${queryString}`);
}

async function sendMessageToChannel(message: String) {
    const channelId = "C8F3EFS80";
    return sendMessage(channelId, message);
}

function objectToQueryString(queryObject: QueryObject) {
    let queryString = "";
    Object.keys(queryObject).forEach((key, index) => {
        const value = queryObject[key];
        const prefix = index === 0 ? "?" : "&";
        queryString = queryString.concat(`${prefix}${key}=${value}`);
    });
    return queryString;
}

export { getChannelParticipants, sendMessage, sendMessageToChannel };