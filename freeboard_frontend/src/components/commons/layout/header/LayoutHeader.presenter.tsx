import {
  InnerButton,
  InnerLogo,
  InnerWrapper,
  Wrapper,
} from "./LayoutHeader.styles";
import { ILayoutHeaderProps } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: ILayoutHeaderProps) {
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={props.onClickLogo}>π LIVE</InnerLogo>
        <div>
          <InnerButton onClick={props.onClickMoveToLogin}>λ‘κ·ΈμΈ</InnerButton>
          <InnerButton>νμκ°μ</InnerButton>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
