export const Circle = ({ props }) => {
  return (
    <div className={`circle ${props.active ? "active" : null}`}>{props.id}</div>
  );
};
