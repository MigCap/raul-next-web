'use client'

import { useCallback } from "react";
import Link from "next/link";

// import { Messages } from "primereact/messages";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

import { useGdprContext } from "contexts/gdpr";

// import useCookie from "hooks/useCookie";

import {
  getRoutePathById,
  // locales as localesConfig,
  // routesConfig as navLinks,
  ROUTES_IDS,
} from "lib";

import { GdprDialogContentContainer } from "./styles";

export function GdprDialog() {
  const gdrp = useGdprContext();
  const { showDialog, setShowDialog, onAcceptCookies, onDenyCookies } = gdrp;

  const onHide = useCallback(() => {
    setShowDialog(false);
  }, []);

  //   const renderHeader = () => {
  //     return (
  //       <div>

  //       </div>
  //     );
  //   };

  //   const renderFooter = () => {
  //     return (
  //       <div>
  //         {/* <Button
  //           label="No"
  //           icon="pi pi-times"
  //           onClick={() => onHide()}
  //           className="p-button-text"
  //         /> */}
  //         <Button
  //           label="Yes"
  //           icon="pi pi-check"
  //           onClick={() => onHide()}
  //           autoFocus
  //         />
  //       </div>
  //     );
  //   };

  return (
    <>
      <Dialog
        visible={showDialog}
        // header={"Gdpr"}
        // footer={renderFooter()}
        onHide={() => onHide()}
        modal
        position="bottom"
        style={{ width: "100vw", margin: 0 }}
        draggable={false}
        resizable={false}
        closable={false}
      >
        <GdprDialogContentContainer>
          {/* <p>This website uses cookies to enhance the user experience.</p> */}
          <div className="gdpr-paragraph">
            <p>
              <strong>Notice.</strong> rauldediego.com uses cookies to provide
              necessary website functionality, improve your experience and
              analyze our traffic. By using the website, you agree to the
              <Link legacyBehavior href={getRoutePathById(ROUTES_IDS.PRIVACY_POLICY)}>
                <a>Privacy Policy</a>
              </Link>{" "}
              and our cookies usage.{" "}
              <a
                href="https://www.cookiesandyou.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="lighten p-ml-1"
              >
                Learn more
              </a>
            </p>
          </div>
          <div className="ctas-buttons-container">
            {/* <Button
              label="Deny"
              icon="pi pi-times"
              onClick={() => onDenyCookies()}
              className="p-button-secondary p-mr-2"
            /> */}
            <Button
              label="Got it!"
              icon="pi pi-check"
              onClick={() => onAcceptCookies()}
              className=""
            />
          </div>
        </GdprDialogContentContainer>
      </Dialog>
    </>
  );
}
