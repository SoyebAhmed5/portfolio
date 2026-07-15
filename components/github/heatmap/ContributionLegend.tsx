const COLORS = [
  "#161B22",
  "#0E4429",
  "#006D32",
  "#26A641",
  "#39D353",
];

export default function ContributionLegend() {
  return (
    <div className="mt-8 flex items-center justify-end gap-2 text-sm text-zinc-500">

      <span className="mr-2">
        Less
      </span>

      {COLORS.map((color) => (
        <div
          key={color}
          className="h-4 w-4 rounded-[4px]"
          style={{
            backgroundColor: color,
          }}
        />
      ))}

      <span className="ml-2">
        More
      </span>

    </div>
  );
}