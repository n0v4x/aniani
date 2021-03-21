import { withRouter } from "next/router";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { FunctionComponent, cloneElement } from "react";
import { WithRouterProps } from "next/dist/client/with-router";
import classnames from "classnames";

interface LinkProps extends WithRouterProps, NextLinkProps {
  children: JSX.Element;
  activeClassName?: string;
}

const Link: FunctionComponent<LinkProps> = ({ router, children, activeClassName, ...props }) => {
  let className = children.props.className;

  if (router.pathname === props.href && activeClassName) {
    className = classnames(className, activeClassName);
  }

  return <NextLink {...props}>{cloneElement(children, { className })}</NextLink>;
};

export default withRouter(Link);
