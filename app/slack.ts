import { Channel, QueryObject } from "./interfaces";
import fetch, { Response } from "node-fetch";
import { RtmClient } from "@slack/client";
const { token } = require("../env.json");

const _fetch = async (...args: [any]) => {
    const result = await (await fetch(...args)).json();
    if (!result.ok) throw new Error(result.error);

    return result;
};

async function getChannels(): Promise<[Channel]> {
    const { channels } = await _fetch(`https://slack.com/api/channels.list?token=${token}`);
    return channels;
}

async function getChannelByName(name: String): Promise<Channel> {
    const channels = await getChannels();
    const channel = channels.find((channel: Channel) => channel.name === "food");

    if (!channel) {
        throw new Error("channel not found");
    }

    return channel;
}

async function getChannelParticipants(): Promise<[String]> {
    return (await getChannelByName("food")).members;
}

async function sendMessage(receiver: String, message: String): Promise<Response> {
    const queryString = objectToQueryString({
        channel: receiver,
        text: message,
        link_names: true,
        username: "slackbot",
        as_user: false,
        token
    });
    return _fetch(`https://slack.com/api/chat.postMessage${queryString}`);
}

async function sendMessageToChannel(message: String): Promise<Response> {
    const channelId = (await getChannelByName("food")).id;
    return sendMessage(channelId, message);
}

function objectToQueryString(queryObject: QueryObject): String {
    let queryString = "";
    Object.keys(queryObject).forEach((key, index) => {
        const value = queryObject[key];
        const prefix = index === 0 ? "?" : "&";
        queryString = queryString.concat(`${prefix}${key}=${value}`);
    });
    return queryString;
}

export { getChannelParticipants, sendMessage, sendMessageToChannel };
