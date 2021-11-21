import IconInstagram from "components/Icons/IconInstagram";
import IconLinkedin from "components/Icons/IconLinkedin";

export default function Footer() {
  return (
    <footer className="footer p-mt-3 p-mt-md-5 p-pt-md-5">
      <div className="p-d-flex p-ai-center p-jc-center p-my-2">
        <p className="p-m-0 p-px-4">
          Copyright 2014-2021 – Raúl de Diego . All rights reserved
        </p>
        <div className="p-d-flex p-ai-center p-jc-center">
          <ul>
            <li className="p-mx-2">
              <a
                href={"https://www.linkedin.com/in/miguel-capellan/"}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={"Linkedin"}
              >
                <IconLinkedin />
              </a>
            </li>
            <li className="p-mx-2 p-mt-1">
              <a
                href={"https://www.linkedin.com/in/miguel-capellan/"}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={"Instagram"}
              >
                <IconInstagram />
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
