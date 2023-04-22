import { BlockTypes, FeatureFlags, UrlContexts } from "utils/types";

enum MODAL_KEYS {
  about = "ab",
  block = "bl",
  manageSourceData = "mSd",
  profile = "pr",
  newCommunity = "nC",
  newDataSource = "nDs",
  newProject = "nPr",
  newThread = "nT",
  newMessage = "nM",
  newMetric = "nMt",
  newAction = "nA",
  newActionElection = "nAe",
  newActionRule = "nAr",
  newActionTask = "nAt",
  newActionVote = "nAv",
  newEvent = "nE",
  newProposal = "nP",
  newSubscriptions = "nS",
  newWizard = "nW",
  settings = "st",
  widgetGallery = "wd",
}

export const ACTION_LABELS = {
  task: "Task",
  vote: "Survey",
  rule: "Rule Change",
  election: "Election",
};

export const constants = {
  ACTION_LABELS,
  BLOCK_TYPES: BlockTypes,
  FEATURE_FLAGS: FeatureFlags,
  MODAL_KEY: "m",
  MODAL_STACKED_KEY: "mS",
  MODAL_PAGE: "mPg",
  MODAL_ID: "mId",
  MULTIPANE_MIN_WINDOW_WIDTH: 1500,
  UNIVERSAL_SEARCH_KEY: "us",
  MODAL_KEYS,
  SUB_THREAD_KEY: "sbtd",
  URL_CONTEXT: "ctx",
  URL_CONTEXTS: UrlContexts,
};
