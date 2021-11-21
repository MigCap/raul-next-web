import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="container">
      <div
        className="p-py-3"
        style={{
          position: "relative",
          width: "100%",
          // background: "#fff",
        }}
      >
        <Link href="/">
          <a>
            <Image
              src={`/assets/logo-raul.png`}
              // layout="fill"
              alt={`logo-raul`}
              width={50}
              height={50}
              className="logo"
            />
          </a>
        </Link>
      </div>
    </div>
  );
}
