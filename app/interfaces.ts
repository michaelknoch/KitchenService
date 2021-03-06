export interface QueryObject {
    channel: String;
    text: String;
    username: String;
    link_names: Boolean;
    token: String;
    [key: string]: any;
}

export interface Channel {
    id: String;
    name: String;
    members: [String];
}
