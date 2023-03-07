import Charts from '../components/charts/Charts';
import ChartJobsByType from '../components/charts/ChartJobsByType';
import ChartJobsByBranch from '../components/charts/ChartJobsByBranch';


function AppChart() {
  return (
    // <div className="App">
    <div>
      <div>
      <Charts/>
      <ChartJobsByBranch/>
      <ChartJobsByType/>
      </div>
    </div>
  );
}

export default AppChart;