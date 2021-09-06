import React from "react";
import { RouteProps } from "react-router";
import { Route as BaseRoute } from "react-router-dom";

export type IRouteProps = {
  private?: boolean
} & RouteProps;

export const Route = (props: IRouteProps) => {
  return <BaseRoute {...props} />
}