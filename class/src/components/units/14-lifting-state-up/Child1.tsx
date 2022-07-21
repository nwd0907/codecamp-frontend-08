export default function Child1(props: any) {
  // 방법 - 1
  //   const onClickCountUp = () => {
  //     props.setCount((prev: any) => prev + 1);
  //   };

  return (
    <div>
      <div>자식1의 카운트: {props.count}</div>
      <button onClick={props.onClickCountUp}>카운트 올리기!!!</button>
    </div>
  );
}
