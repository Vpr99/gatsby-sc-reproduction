/* eslint-disable import/prefer-default-export, react/jsx-filename-extension */
import React from "react";
import BaseLayout from "./src/templates/base";

export const wrapRootElement = ({ element }) => (
  <BaseLayout>{element}</BaseLayout>
);
