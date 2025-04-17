import React from "react";
import { useNavigate } from "react-router-dom";
import "./MfaAppsPage.scss";
import { PulseButton, PulseButtonTheme, PulseButtonSizes } from "@pulselabs-ai/shared-fe-ui";

const MfaAppsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="mfa-page">
      <div className="headline-xl">Apps</div>
      <PulseButton
        theme={PulseButtonTheme.PRIMARY}
        size={PulseButtonSizes.LARGE}
        onClick={() => {
          navigate("/app");
        }}
      >
        navigate("app");
      </PulseButton>
      <PulseButton
        theme={PulseButtonTheme.PRIMARY}
        size={PulseButtonSizes.LARGE}
        onClick={() => {
          navigate("/app/123");
        }}
      >
        navigate("app/123");
      </PulseButton>
      <PulseButton
        theme={PulseButtonTheme.PRIMARY}
        size={PulseButtonSizes.LARGE}
        onClick={() => {
          navigate("/app/123/settings");
        }}
      >
        navigate("/app/123/settings");
      </PulseButton>
      <PulseButton
        theme={PulseButtonTheme.PRIMARY}
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

export default MfaAppsPage;
