import { FooterPublic } from "../../component/footer-public";
import { HeaderPublic } from "../../component/header-public";
export function LayoutPublic(props) {
  const { children } = props;

  return (
    <div className="layout-public">
       <HeaderPublic />
      {children}
      <FooterPublic />
    </div>
  );
}