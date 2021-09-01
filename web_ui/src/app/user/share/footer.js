import React, { useState } from "react";
import Header from "./header";
export default function Footer() {
  return (
    <>
      {/* Begin Footer*/}
      <footer>
        <div className="header-in-footer">
          <Header c />
        </div>
        <div className="al-footer">
          Copyright © 2020 All rights Reserved - Eduo
        </div>
      </footer>
    </>
  );
}
