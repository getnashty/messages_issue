import { ChangeEvent, FormEvent } from "react";

export enum BlockTypes {
  canvas = "canvas",
  embed = "embed",
  list = "list",
  metricConfig = "metric-config",
  plugin = "plugin",
  spreadsheet = "spreadsheet",
  subscriptionConfig = "subscription-config",
  textEditor = "text-editor",
  vote = "vote",
  supa = "supa",
  form = "form",
}

export enum FeatureFlags {
  insights = "insights",
  crowdfunding = "crowdfunding",
  hiring = "hiring",
}

interface MetaData {
  [key: string]: any;
}

export interface MultiPaneTab {
  id: string;
  type: string;
  title: string;
  metaData?: MetaData;
}

export type onChangeSignature = (
  e: ChangeEvent | FormEvent<HTMLDivElement>,
  {
    name,
    value,
    metaData,
  }: {
    name: string;
    value: string | number | boolean;
    metaData?: MetaData;
  }
) => void;

export interface User {
  id: string;
  name: string;
}

export enum UrlContexts {
  thread = "thread",
}
