import { PulseButton, PulseButtonSizes, PulseButtonTheme } from "@pulselabs-ai/shared-fe-ui";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const MfaAppSettingsPage: React.FC = () => {
  const navigate = useNavigate();
  const { appId } = useParams();
  return (
    <div className="mfa-page">
      <div className="headline-xl">Apps Settings {appId}</div>
      <PulseButton
        theme={PulseButtonTheme.SECONDARY}
        size={PulseButtonSizes.LARGE}
        onClick={() => {
          navigate("/app");
        }}
      >
        navigate("app");
      </PulseButton>
      <PulseButton
        theme={PulseButtonTheme.SECONDARY}
        size={PulseButtonSizes.LARGE}
        onClick={() => {
          navigate("/app/123");
        }}
      >
        navigate("app/123");
      </PulseButton>
      <PulseButton
        theme={PulseButtonTheme.SECONDARY}
        size={PulseButtonSizes.LARGE}
        onClick={() => {
          navigate("/app/123/settings");
        }}
      >
        navigate("/app/123/settings");
      </PulseButton>
      <PulseButton
        theme={PulseButtonTheme.SECONDARY}
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
