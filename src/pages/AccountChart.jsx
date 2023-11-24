import * as d3 from "d3";

export default function AccountChart({
  
  width = 500,
  height = 230,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 50,
  marginLeft = 20,
  lineColor = "#00E676", 
  curveType = d3.curveCardinal, 
  labelColor = "#BDBDBD",
  month,
  random
}) {
 let data;
 let labels ;

   if(random || random==false|| month){
    data = [Math.floor(Math.random() * 30) + 1,Math.floor(Math.random() * 30) + 1,Math.floor(Math.random() * 30) + 1,Math.floor(Math.random() * 30) + 1,Math.floor(Math.random() * 30) + 1,Math.floor(Math.random() * 30) + 1,Math.floor(Math.random() * 30) + 1,Math.floor(Math.random() * 30) + 1,Math.floor(Math.random() * 30) + 1,Math.floor(Math.random() * 30) + 1]
    labels = ["15", "16", "17", "18","19","20","21","22","23","24"]
  }
  const x = d3.scaleBand().domain(d3.range(data.length)).range([marginLeft, width - marginRight]).padding(0.1);
  const y = d3.scaleLinear().domain([0, d3.max(data)]).range([height - marginBottom, marginTop]);

  const line = d3.line()
    .x((d, i) => x(i) + x.bandwidth() / 2)
    .y(d => y(d))
    .curve(curveType);
  return (
    <svg width={width} height={height} >
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
