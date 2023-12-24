function getChartData() {
    var contractData = JSON.parse(document.getElementById('contract-data').textContent);
    var chartData = {
      labels: [],
      datasets: [{
        label: 'Estimated Value',
        data: [],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }, {
        label: 'Current Expenditure',
        data: [],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    };
    for (var i = 0; i < contractData.length; i++) {
      chartData.labels.push(contractData[i].number);
      chartData.datasets[0].data.push(contractData[i].estimated_value);
      chartData.datasets[1].data.push(contractData[i].current_expenditure);
    }
    return chartData;
  }
  