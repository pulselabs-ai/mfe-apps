import React from "react";
import { useParams } from "react-router-dom";

export const MfaAppPage: React.FC = () => {
  const { appId } = useParams();
  return <div>MfaAppPage for App ID: {appId}</div>;
};
