export const ColumnResizer = ({ header }) => {
  if (header.column.getCanResize() === false) return <></>;

  return (
    <div
      {...{
        onMouseDown: header.getResizeHandler(),
        onTouchStart: header.getResizeHandler(),
        className: `absolute top-0 right-0 cursor-col-resize w-1 h-full bg-gray-800 hover:bg-gray-700 hover:w-2 bg-red-500`,
        style: {
          userSelect: "none",
          touchAction: "none",
        },
      }}
    />
  );
};
