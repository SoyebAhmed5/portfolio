export default function ContributionLegend() {
  const colors = [
    "#161B22",
    "#0E4429",
    "#006D32",
    "#26A641",
    "#39D353",
  ];

  return (
    <div className="mt-8 flex items-center justify-end gap-3 text-sm text-zinc-500">

      <span className="mr-2">
        Less Activity
      </span>

      {colors.map((color) => (
        <div
          key={color}
          className="
            h-4
            w-4
            rounded-[4px]
            border
            border-white/5
          "
          style={{
            backgroundColor: color,
          }}
        />
      ))}

      <span className="ml-2">
        More Activity
      </span>

    </div>
  );
}