import React from 'react'
import { Line, defaults } from 'react-chartjs-2'
import styled from 'styled-components'


const Graph = () => {
  return (
    <Gr style={{padding:"15px",backgroundColor:"white",borderRadius:"16px", width: "80%","border":"13px solid #26003eff"}}>
      <Line
        data={{
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: 
          [
            {
              label: '# of votes',
              data: [12, 19, 3, 5, 2, 3],
              borderColor: [
                'rgba(255, 99, 132, 1)',
              ],
              borderWidth: 1,
              fill: {
                target: 'origin',
                above: 'rgba(255, 99, 132, 0.5)',
              }
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </Gr>
  )
}


const Gr = styled.div`
  margin: 0 auto;
  margin-top: 75px;
  margin-bottom: 75px;
`




export default Graph