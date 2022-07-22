import styled from "@emotion/styled";
import { useState } from "react";

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 25%;
`;

export default function BoardCommentItem(props: any) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit(true);
  };

  return (
    <div>
      {isEdit === false && (
        <Row>
          <Column>{props.el.writer}</Column>
          <Column>{props.el.contents}</Column>
          <button onClick={onClickEdit}>수정하기</button>
        </Row>
      )}
      {isEdit === true && (
        <div>
          수정할 내용: <input type="text" />
        </div>
      )}
    </div>
  );
}
