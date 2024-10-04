import { useEffect, useState } from "react";
// import { Link } from "@tanstack/react-router";
import { useColorScheme, Option, Select, Typography, Stack } from "@mui/joy";

export default function Header() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <div />
      <Typography level="h1">Josh Hess</Typography>
      <Select
        value={mode}
        onChange={(_, newMode) => {
          setMode(newMode);
        }}
        sx={{ width: "max-content" }}
      >
        <Option value="system">System</Option>
        <Option value="light">Light</Option>
        <Option value="dark">Dark</Option>
      </Select>
    </Stack>
  );
}
