// import timeblockrContent from "../include/terminal-files/project-timeblockr.md?raw";

interface TFile {
    name: string;
    content: string;
    description?: string;
}

const TFileSystem: TFile[] = [
    // {
    //     name: "timeblockr.md",
    //     content: timeblockrContent,
    //     description: "A time tracking app for the terminal",
    // }
]

export default TFileSystem;
export type { TFile };