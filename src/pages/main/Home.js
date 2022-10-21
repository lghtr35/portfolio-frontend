import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AdjustableSection } from "../../components/adjustable.section";
import "./Home.css";

export function Home() {
  return (
    <Stack>
      <AdjustableSection>What</AdjustableSection>
      <AdjustableSection>Happens</AdjustableSection>
      <AdjustableSection>Man</AdjustableSection>
      <AdjustableSection></AdjustableSection>
      <AdjustableSection></AdjustableSection>
      <AdjustableSection></AdjustableSection>
    </Stack>
  );
}
