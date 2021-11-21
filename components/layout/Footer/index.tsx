import { linkedinUrl } from "lib";

// import IconInstagram from "components/Icons/IconInstagram";
import IconLinkedin from "components/Icons/IconLinkedin";

export default function Footer() {
  return (
    <footer className="footer p-mt-3 p-mt-md-5 p-pt-md-5 footer">
      <div className="p-d-flex p-ai-center p-jc-center p-my-2">
        <p className="p-m-0 p-px-4">
          Copyright 2014-2021 – Raúl de Diego . All rights reserved
        </p>
        <div className="p-d-flex p-ai-center p-jc-center">
          <ul>
            <li className="p-mx-2">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={"Linkedin"}
                className="link-linkedin"
              >
                <IconLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p>
        Develop by{" "}
        <a
          href="https://miguelcapellan.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={"footer-author"}>MCV</span>
        </a>
      </p>
    </footer>
  );
}
