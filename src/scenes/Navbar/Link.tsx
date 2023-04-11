import { useTheme } from "@mui/material";
import { SelectedPage } from "../../shared/Types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;

  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};
const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  console.log(selectedPage);
  const lowerCasePage = page.toLowerCase().replace(/ +/g, "") as SelectedPage;
  const { palette } = useTheme();
  console.log(lowerCasePage);
  return (
    <AnchorLink
      style={{ textDecoration: "none", color: palette.secondary.main }}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};
export default Link;
