import React, { useRef, useEffect, useState} from 'react';
import { select, line, curveCardinal, axisBottom, scaleLinear, axisRight } from 'd3';


const LineChart = () => {
  const [data, setData] = useState([20, 30, 45, 60, 20, 65, 75]);
  const svgRef = useRef();
  const svgWidth = 300;
  const svgHeight = 150;

  useEffect(() => {
    const svg = select(svgRef.current);
    const xScale = scaleLinear()
      .domain([0, data.length - 1])
      .range([0, svgWidth]);

    const yScale = scaleLinear()
      .domain([0, 75])
      .range([svgHeight, 0]);

    const xAxis = axisBottom(xScale).ticks(data.length).tickFormat(index => index + 1);
    svg.select('.x-axis')
      .style("transform", "translateY(150px)")
      .call(xAxis);

    const yAxis = axisRight(yScale);
    svg.select('.y-axis')
      .style("transform", "translateX(300px)")
      .call(yAxis);

    const myLine = line().x((value, index) => xScale(index))
                          .y(yScale)
                          .curve(curveCardinal);
    
    svg.selectAll('.line')
        .data([data])
        .join('path')
        .attr("d", myLine)
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", "blue");
  }, [data]);

  return(
    <div className="line-chart">
      <h5>Line Chart</h5>
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

export default LineChart;