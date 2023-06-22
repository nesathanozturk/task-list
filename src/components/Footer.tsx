import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-center mt-4 text-sm">
      <p>
        Made with ❤️ by{" "}
        <Link
          href="https://www.github.com/nesathanozturk"
          className="text-purple-600 hover:underline"
        >
          Neşathan Öztürk
        </Link>
      </p>
    </footer>
  );
};

export default Footer;