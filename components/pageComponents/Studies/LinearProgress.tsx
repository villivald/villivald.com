import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

export const LabProgress = () => {
  const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "#b2dfdb",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: "#00e676",
    },
    width: "80%",
    margin: "1% 0 0 6.5%",
  }));
  return <BorderLinearProgress variant="determinate" value={79} />;
};

export const HelsinkiProgress = () => {
  const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "#b2dfdb",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: "#00e676",
    },
    width: "80%",
    margin: "1% 0 0 6.5%",
  }));
  return (
    <BorderLinearProgress color="success" variant="determinate" value={100} />
  );
};
