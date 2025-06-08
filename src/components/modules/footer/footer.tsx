export default function Footer() {
  return (
    <footer className="text-sm text-gray-400 font-mono mt-4">
      © {new Date().getFullYear()}
      <a
        href="https://www.linkedin.com/in/james-sungarda/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-300 hover:underline hover:text-blue-400 mx-2"
      >
        James Sungarda
      </a>
      |
      <a
        href="https://github.com/invalidcode232/invalidcode232.github.io"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-300 hover:underline hover:text-blue-400 mx-2"
      >
        GitHub
      </a>
    </footer>
  );
}
