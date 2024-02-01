


// define the sidebar

var sidebarOpen = false;

// var sideBar = document.querySelector("#sidebar");
var sideBar = document.getElementById("sidebar");

function openSideBar (){
    if (!sideBarOpen) {
        sideBar.classList.add("sidebar-responsive");
        sideBarOpen = true;
    }
}

function closeSidebar () {
    if (sidebarOpen) {
        sideBar.classList.remove("sidebar-responsive");
        sideBarOpen = false;
    }
}



// adding bar chart code from Apex.com 


var barChartOptions = {
    series: [{
    data: [9, 7, 4, 12, 10]
  }],
    chart: {
    type: 'bar',
    height: 350,
    toolbar: {
        show: false
    }
  },
  colors:[ 
    "#246dec",
    "#cc3c43",
    "#367952",
    "#f5b741",
    "#4f35a1",
  ],
  plotOptions: {
    bar: {
    distributed: true,
    borderRadius: 4,
    horizontal: false,
    columnWidth: '40%'
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: [ 'Bags', 'Headphones', 'Ipad', 'Laptop', 'Airpods'],
  },
  yaxis: {
    title: {
        text: 'Count'
    }
  }
  };

  var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
  barChart.render();


//   ****** AREA CHART ***** 

// https://apexcharts.com/javascript-chart-demos/mixed-charts/line-area/


var areaChartOptions = {
    series: [{
    name: 'Purchase Orders',
    data: [44, 55, 31, 47, 31, 43, 67, 45]
  }, {
    name: 'Sales Order',
    data: [50, 69, 45, 61, 43, 54, 37, 20]
  }],
    chart: {
    height: 350,
    type: 'area',
    toobar: {
        show: false},
  },
  colors: ["#cc3c43", "#367952"],
  dataLabels: {
    enabled: false,
  },

  stroke: {
    curve: 'smooth'
  },
 
  labels: ['Jan', 'Feb', 'March', 'Jun', 'Jul', 'Aug'],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Purchase Order',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Sales Order',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  }
  };

  var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
  areaChart.render();

  