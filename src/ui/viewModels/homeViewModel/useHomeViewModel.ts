import cv from "../../assets/documents/CV.pdf";
import { useNavigation } from "../../hooks";

export function useHomeViewModel() {
  const { navigateTo } = useNavigation();

  const handleDownloadCV = () => {
    var elementDownloadLogs = document.createElement("a");
    elementDownloadLogs.href = cv;
    elementDownloadLogs.download = "CV.pdf";
    elementDownloadLogs.click();
    document.body.removeChild(elementDownloadLogs);
  };

  const handleNavigateToSection = (sectionPath: string) => {
    var elementDownloadLogs = document.createElement("a");
    elementDownloadLogs.href = sectionPath;
    elementDownloadLogs.click();
    document.body.removeChild(elementDownloadLogs);
  };

  return { handleDownloadCV, handleNavigateToSection };
}
