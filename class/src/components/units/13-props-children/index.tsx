import { ReactNode } from "react";

interface IProps {
  qqq: string;
  children: ReactNode;
}
export default function PropsChildren(props: IProps) {
  return (
    <>
      <div>안녕하세요 영희입니다</div>
      <div>{props.qqq}</div>
      <div>{props.children}</div>
      <div>안녕하세요 맹구입니다</div>
    </>
  );
}
