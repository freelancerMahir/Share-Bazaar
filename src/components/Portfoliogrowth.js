import React from 'react'
import { Line, defaults } from 'react-chartjs-2'

const Graph = () => {
  return (
    <div style={{marginTop:"65px",marginBottom:"75px",padding:"15px",backgroundColor:"white",borderRadius:"16px", width: "80%", margin:"0 auto","border":"13px solid #26003eff"}}>
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
    </div>
  )
}

export default Graph