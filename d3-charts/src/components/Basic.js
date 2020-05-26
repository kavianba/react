import React, { useState, useEffect, useRef } from 'react';
import { select } from 'd3';

const Basic = () => {
  const [data, setData] = useState([20, 30, 40, 50, 60]);
  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);

    svg.selectAll('circle')
        .data(data)
        .join('circle')
        /*.join(
          enter => enter.append('circle').attr('class', 'new'),
          update => update.attr('class', 'updated'),
          exit => exit.remove()
        )*/
        .attr('r', d => d)
        .attr('cx', d => d * 2)
        .attr('cy', d => d * 2)
        .attr('stroke', 'red')
        .attr('fill', 'yellow');
  }, [data]);

  return (
    <div>
      <svg ref={svgRef}></svg> 
      <br/>
      <button onClick={() => setData(data.map(d => d + 5 ))}>Update data</button>
      <button onClick={() => setData(data.filter(d => d < 30 ))}>Filter data</button>
    </div>
  )
}

export default Basic;