import * as d3 from "d3";

export default function OverlappingStackedBarChart({
  
  labels = ["August", "September", "October", "November", "December", "January"],
  width = 500,
  height = 230,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 50,
  marginLeft = 20,
  barWidth = 15,
  borderRadius = 5,
  color1 = "green",
  color2 = "#00E676",
  labelColor = "#BDBDBD",
  random
}) {
  let data1;
  let data2;
  if(random || random==false){

    data1 = [Math.floor(Math.random() * 30) + 1, Math.floor(Math.random() * 30) + 1, Math.floor(Math.random() * 30) + 1, Math.floor(Math.random() * 30) + 1, Math.floor(Math.random() * 30) + 1, Math.floor(Math.random() * 30) + 1]
    data2 = [Math.floor(Math.random() * 30) + 1, Math.floor(Math.random() * 30) + 1, Math.floor(Math.random() * 30) + 1, Math.floor(Math.random() * 30) + 1, Math.floor(Math.random() * 30) + 1, Math.floor(Math.random() * 30) + 1]
  }
  const x = d3
    .scaleBand()
    .domain(d3.range(data1.length))
    .range([marginLeft, width - marginRight])
    .padding(0.1);

  const y = d3
    .scaleLinear()
    .domain([0, d3.max(data1) + d3.max(data2)])
    .range([height - marginBottom, marginTop]);

  return (
    <svg width={width} height={height}>
      {data1.map((d, i) => (
        <g key={i} transform={`translate(${x(i)}, 0)`}>
          <rect
            x={0}
            y={y(d + data2[i])}
            width={barWidth}
            height={y(d) - y(d + data2[i])}
            fill={color2}
            rx={borderRadius}
            ry={borderRadius}
          />
          <rect
            x={0}
            y={y(d)}
            width={barWidth}
            height={height - marginBottom - y(d)}
            fill={color1}
            rx={borderRadius}
            ry={borderRadius}
          />
          <text
            x={barWidth / 2}
            y={height - marginBottom + 15}
            textAnchor="middle"
            fill={labelColor}
          >
            {labels[i]}
          </text>
        </g>
      ))}
    </svg>
  );
}
