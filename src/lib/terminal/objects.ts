export enum Commands {
    HELP = "help",
    CLEAR = "clear",
    ECHO = "echo",
    SYSTEM = "system",
    LS = "ls",
    CAT = "cat",
    // other commands
}

export enum OutputHistoryType {
    INFO = "info",
    ERROR = "error",
    SUCCESS = "success",
}

export interface OutputHistory {
    id: string;
    content: string;
    type: OutputHistoryType;
    prompt: string | null;
}

const SYSTEM_MESSAGE = `Welcome to the terminal interface of my portfolio!
You can interact with it using various commands.

Type 'help' to see the list of available commands.`;

export default SYSTEM_MESSAGE;
