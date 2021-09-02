import React, { useState } from "react";
import SubFooter from "./subFooter";
export default function Footer() {
  return (
    <>
      {/* Begin Footer*/}
      <footer>
        <div className="main-footer">
          <SubFooter />
        </div>
        <div className="al-footer">
          Copyright © 2020 All rights Reserved - Eduo
        </div>
      </footer>
    </>
  );
}
