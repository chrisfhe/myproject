    // setup 
    const data = {
        //labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // case handler
        datasets: [{
          label: 'Activities',
          data: [
            { x: ['2023-06-22','2023-06-23'], y: 'Bestilling mottatt', name: 'Jagroshan' },
            { x: ['2023-07-05','2023-07-06'], y: 'Anskaffelsesstrategi godkjent', name: 'Christian' },
            { x: ['2023-07-12','2023-08-14'], y: 'Kunngjøring', name: 'Jagroshan'},
            { x: ['2023-08-14','2023-08-14'], y: 'Tilbudsfrist', name: 'Thomas' },
            { x: ['2023-08-15','2023-08-23'], y: 'Evaluering og tildeling', name: 'Jagroshan' },
            { x: ['2023-08-23','2023-09-03'], y: 'Karensperiode', name: 'Jagroshan' },
          ],
          backgroundColor: [
            'rgba(134, 188, 37, 0.7)',
            'rgba(4, 106, 56, 0.7)',
            'rgba(98, 181, 229, 0.7)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(0, 0, 0, 0.2)'
          ],
          borderColor: [
            'rgba(134, 188, 37, 1)',
            'rgba(4, 106, 56, 1)',
            'rgba(98, 181, 229, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(0, 0, 0, 1)'
          ],
          borderWidth: 1,
          borderSkipped: false,
          borderRadius: 10, // gir avrundede kanter
          barPercentage: 0.5, // hvor tykk aktivitetene er 
        }]
      };
  
      // todayLine plugin block
      const todayLine = {
        id: 'todayLine',
        afterDatasetsDraw(chart, args, pluginOptions) {
          const {ctx, data, chartArea: {top, bottom, left, right}, scales: { x, y} } = chart;
          ctx.save();
        }
      };
  
      // assignedTasks plugin block
      const assignedTasks = {
        id: 'assignedTasks',
        afterDatasetsDraw(chart, args, pluginOptions) {
          const {ctx, data, chartArea: {top, bottom, left, right}, scales: { x, y} } = chart;
  
          ctx.font = 'bold 12px sans-serif';
          ctx.fillStyle = 'black';
          ctx.textBaseLine = 'middle';
  
          data.datasets[0].data.forEach((datapoint, index) => {
            ctx.fillText(datapoint.name, 10, y.getPixelForValue(index));
          })
        }
      }
  
      // config 
      const config = {
        type: 'bar',
        data,
        options: {
          layout: { // Code start for utvidelse av venstre side (for navn på ansvarlig)
            padding: {
              left: 100,
            }
          },  // Code end for utvidelse av venstre side (for navn på ansvarlig)
          indexAxis: 'y',
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'day'
              },
              min: '2023-06-22', // denne må være første datoen i datasettet
              max: '2023-09-03' // denne må være siste datoen i datasettet
            }
          },
          plugins: { // Code start for legend
            legend: {
              display: false
            }
          } // Code end for legend
        },
        plugins: [todayLine, assignedTasks]
      };
  
      // render init block
      const myChart = new Chart(
        document.getElementById('myChart'),
        config
      );
  
      // Instantly assign Chart.js version
      const chartVersion = document.getElementById('chartVersion');
      chartVersion.innerText = Chart.version;