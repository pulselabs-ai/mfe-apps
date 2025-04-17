import { PulseButton, PulseButtonSizes, PulseButtonTheme } from "@pulselabs-ai/shared-fe-ui";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export const MfaAppPage: React.FC = () => {
  const { appId } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      MfaAppPage for App ID: {appId}
      <br />
      <PulseButton
        theme={PulseButtonTheme.PRIMARY_SUCCESS}
        size={PulseButtonSizes.LARGE}
        onClick={() => {
          navigate("/app/123");
        }}
      >
        navigate("/app/123")
      </PulseButton>
      <button
        className="pulse-button"
        onClick={() => {
          navigate(`/app/${appId}/settings`);
        }}
        style={{ marginTop: "10px" }}
      >
        Go to Settings
      </button>
    </div>
  );
};
