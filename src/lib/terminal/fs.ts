interface TFile {
    name: string;
    content: string;
    description?: string;
}

const TFileSystem: TFile[] = [
]

export default TFileSystem;
export type { TFile };