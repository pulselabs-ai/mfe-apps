import { PulseButton, PulseButtonSizes, PulseButtonTheme } from "@pulselabs-ai/shared-fe-ui";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export const MfaAppPage: React.FC = () => {
  const { appId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="mfa-page">
      <div className="headline-xl">Apps {appId}</div>
      <PulseButton
        theme={PulseButtonTheme.TERTIARY}
        size={PulseButtonSizes.LARGE}
        onClick={() => {
          navigate("/app");
        }}
      >
        navigate("app");
      </PulseButton>
      <PulseButton
        theme={PulseButtonTheme.TERTIARY}
        size={PulseButtonSizes.LARGE}
        onClick={() => {
          navigate("/app/123");
        }}
      >
        navigate("app/123");
      </PulseButton>
      <PulseButton
        theme={PulseButtonTheme.TERTIARY}
        size={PulseButtonSizes.LARGE}
        onClick={() => {
          navigate("/app/123/settings");
        }}
      >
        navigate("/app/123/settings");
      </PulseButton>
      <PulseButton
        theme={PulseButtonTheme.TERTIARY}
        size={PulseButtonSizes.LARGE}
        onClick={() => {
          navigate("/projects/10");
        }}
      >
        navigate("/projects/10");
      </PulseButton>
    </div>
  );
};
