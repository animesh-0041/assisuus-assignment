import * as d3 from "d3";

export default function Bar({
  labels = ["Older", "Jan 01-08", "Jan 09-16", "Jan 17-24", "Jan 25-31", "Future"],
  width = 500,
  height = 230,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 50,
  marginLeft = 20,
  barWidth = 15,
  borderRadius = 5,
  barColor = "#00E676",
  labelColor = "#BDBDBD" ,
  random
}) {
  let data;
  if(random || random==false){
    data = [Math.floor(Math.random() * 30) + 1, Math.floor(Math.random() * 30) + 1, Math.floor(Math.random() * 30) + 1, Math.floor(Math.random() * 30) + 1, Math.floor(Math.random() * 30) + 1, Math.floor(Math.random() * 30) + 1]
  }
  const x = d3.scaleBand().domain(d3.range(data.length)).range([marginLeft, width - marginRight]).padding(0.1);
  const y = d3.scaleLinear().domain([0, d3.max(data)]).range([height - marginBottom, marginTop]);

  return (
    <svg width={width} height={height}>
      {data.map((d, i) => (
        <g key={i}>
          <rect
            x={x(i) + (x.bandwidth() - barWidth) / 2}
            y={y(d)}
            width={barWidth}
            height={height - marginBottom - y(d)}
            fill={barColor}
            rx={borderRadius}
            ry={borderRadius}
          />
          <text
            x={x(i) + x.bandwidth() / 2}
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
