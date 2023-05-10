import React, { useState } from "react";

import JoinForm from "./JoinForm";
import SVGView from "./SVGView";

export default function HomePage() {
  return (
    <div className="row">
      <div className="six columns">
        <JoinForm />
      </div>
      <div className="six columns hide-on-phone">
        <SVGView />
      </div>
    </div>
  );
}
