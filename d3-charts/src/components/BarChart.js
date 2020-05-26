import React, { useRef, useEffect, useState} from 'react';
import { select, axisBottom, scaleLinear, scaleBand, axisLeft } from 'd3';

export const DEFAULT_COLORS = [
  '#45A2A1',
  '#9056FE',
  '#385774',
  '#F0715A',
  '#3F87CB',
  '#C43A5F',
  '#6817FE',
  '#E3AA5C',
  '#8BC5C5',
  '#4B5050',
  '#C25B94',
  '#A6B31A'
];

const BarChart = () => {
  const [data, setData] = useState([20, 30, 45, 60, 20, 65, 75]);
  const svgRef = useRef();
  const svgWidth = 300;
  const svgHeight = 150;

  useEffect(() => {
    const svg = select(svgRef.current);
    const xScale = scaleBand()
      .domain(data.map((value, index) => index))
      .range([0, svgWidth])
      .padding(0.2);

    const yScale = scaleLinear()
      .domain([0, 75])
      .range([svgHeight, 0]);
    
    const colorScale = scaleLinear()
      .domain([75, 100, 150])
      .range(["green","orange", "red"])
      .clamp(true);

    const xAxis = axisBottom(xScale).ticks(data.length);
    svg.select('.x-axis')
      .style("transform", "translateY(150px)")
      .call(xAxis);

    const yAxis = axisLeft(yScale);
    svg.select('.y-axis')
      .call(yAxis);

    svg.selectAll(".bar")
    .data(data)
    .join("rect")
    .attr("class", "bar")
    .style("transform", "scale(1, -1)")
    .attr("x", (value, index) => xScale(index))
    .attr("y", -150)
    .attr('rx', 2)
    .attr('ry', 2)
    .attr("width", xScale.bandwidth())
    .transition()
    .duration(500)
    .attr("fill", (d, i) => DEFAULT_COLORS[i])
    .attr("height", value => 150 - yScale(value));
   
  }, [data]);
  
  
  return(
    <div className="bar-chart">
      <h5>Bar Chart</h5>
      <svg ref={svgRef}>
        <g className="x-axis"/>
        <g className="y-axis"/>
      </svg>
      <br/><br/><br/>
      <button onClick={() => setData(data.map(d => d + 2 ))}>Update data</button>
      <button onClick={() => setData(data.filter(d => d < 40 ))}>Filter data</button>
    </div>
  )
}

export default BarChart;