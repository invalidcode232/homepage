import SYSTEM_MESSAGE, {
    Commands,
    OutputHistory,
    OutputHistoryType,
} from "./objects";
import TFileSystem from "./fs";

export interface TerminalInput {
    command: Commands;
    args: string[];
}

class TerminalHandler {
    setOutputHistory: React.Dispatch<React.SetStateAction<OutputHistory[]>>;

    constructor(
        setOutputHistory: React.Dispatch<React.SetStateAction<OutputHistory[]>>,
    ) {
        this.setOutputHistory = setOutputHistory;
    }

    private addOutput(
        prompt: string | null,
        content: string,
        type: OutputHistoryType = OutputHistoryType.INFO,
    ) {
        const newOutput: OutputHistory = {
            id: crypto.randomUUID(),
            prompt,
            content,
            type,
        };

        this.setOutputHistory((outputs) => [...outputs, newOutput]);
    }

    sendSystemMessage() {
        this.addOutput(null, SYSTEM_MESSAGE);
    }

    handleCommand(input: string) {
        const [command, ...args] = input.trim().split(" ");

        switch (command) {
            case Commands.HELP:
                this.addOutput(
                    input,
                    "Available commands: help, clear, echo, system, ls, cat",
                );
                break;
            case Commands.CLEAR:
                this.setOutputHistory([]);
                break;
            case Commands.ECHO:
                if (args.length === 0) {
                    this.addOutput(input, "Usage: echo <message>");
                } else {
                    this.addOutput(input, args.join(" "));
                }

                break;
            case Commands.SYSTEM:
                this.addOutput(input, SYSTEM_MESSAGE);
                break;
            case Commands.LS:
                this.addOutput(
                    input,
                    TFileSystem.map((file) => file.name).join("\n"),
                );

                break;
            case Commands.CAT:
                const file = TFileSystem.find((file) => file.name === args[0]);
                if (file) {
                    this.addOutput(input, file.content);
                } else {
                    this.addOutput(input, `File not found: ${args[0]}`);
                }
                
                break;
            default:
                this.addOutput(input, `Unknown command: ${command}`);
                break;
        }
    }
}

export default TerminalHandler;
