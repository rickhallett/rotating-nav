export const Circle = ({ active, i }) => {
  return (
    <div className={`circle ${active ? "active" : null}`}>{i}</div>
  );
};
