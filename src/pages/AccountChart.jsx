import * as d3 from "d3";

export default function AccountChart({
  data = [10,15,20,22,25,26,15,16,10,5],
  labels = ["09", "10", "11", "12","13","14","15","16","17","18"],
  width = 500,
  height = 230,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 50,
  marginLeft = 20,
  lineColor = "#00E676", // Line color
  curveType = d3.curveCardinal, // Curve interpolation type
  labelColor = "#BDBDBD"
}) {
  const x = d3.scaleBand().domain(d3.range(data.length)).range([marginLeft, width - marginRight]).padding(0.1);
  const y = d3.scaleLinear().domain([0, d3.max(data)]).range([height - marginBottom, marginTop]);

  const line = d3.line()
    .x((d, i) => x(i) + x.bandwidth() / 2)
    .y(d => y(d))
    .curve(curveType);

  return (
    <svg width={width} height={height}>
      <path
        d={line(data)}
        fill="none"
        stroke={lineColor}
        strokeWidth="2"
      />
      <g>
        {data.map((d, i) => (
          <text
            key={i}
            x={x(i) + x.bandwidth() / 2}
            y={height - marginBottom + 15}
            textAnchor="middle"
            fill={labelColor}
          >
            {labels[i]}
          </text>
        ))}
      </g>
    </svg>
  );
}
