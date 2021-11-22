import { socialLinks } from "lib";

export default function Footer() {
  return (
    <footer
      className="container footer"
      style={{
        margin: "15rem 0 0 0",
      }}
    >
      <div className="p-d-flex p-ai-center p-jc-center p-my-2">
        <p className="p-m-0 p-px-4">
          Copyright 2014-2021 – Raúl de Diego . All rights reserved
        </p>
      </div>

      <div className="p-d-flex p-ai-center p-jc-center p-my-2">
        <ul>
          {Object.keys(socialLinks)?.map((key) => {
            const { url, Icon, show } = socialLinks[key];
            if (!show || !Icon) return null;
            return (
              <li className="p-mx-2" key={key}>
                <a
                  href={url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={"Linkedin"}
                  className="link-linkedin lighten"
                >
                  <Icon />
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* <p className="p-d-flex p-ai-center p-jc-center p-my-2">
        Develop by
        <a
          href="https://miguelcapellan.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="lighten p-ml-1"
        >
          <span className={"footer-author"}>MCV</span>
        </a>
      </p> */}
    </footer>
  );
}
