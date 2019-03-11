import React from 'react';
import Chart from 'react-chartjs-2';
import { Finance } from '../types';
import styles from './ChartSection.module.scss';

interface Props {
  financeData: Finance;
}

const transparentColors = [
  'rgba(255, 99, 132, 0.5)',
  'rgba(54, 162, 235, 0.5)',
  'rgba(75, 192, 192, 0.5)',
  'rgba(255, 206, 86, 0.5)',
  'rgba(153, 102, 255, 0.5)',
  'rgba(255, 159, 64, 0.5)',
];

const solidColors = [
  'rgba(255,99,132,1)',
  'rgba(54, 162, 235, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
];

function ChartSection({ financeData }: Props) {
  const totalSpent = financeData.totalSpent.value;
  const budgetLeft = financeData.budget.value - financeData.totalSpent.value;

  const dataFirstChart = {
    labels: ['Spent', 'Left'],
    datasets: [
      {
        label: 'Total Spent vs Budget Left',
        data: [totalSpent.toFixed(2), budgetLeft.toFixed(2)],
        backgroundColor: [
          'rgba(54, 162, 235, 0.5)',
          'rgba(153, 102, 255, 0.5)',
        ],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(153, 102, 255, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const currencies = Object.keys(financeData.spentByCurrency);
  const numberExpenses = currencies.map(
    currency => financeData.spentByCurrency[currency].numberOfExpenses
  );

  const dataSecondChart = {
    labels: currencies,
    datasets: [
      {
        label: 'Number of Expenses by Currency',
        data: numberExpenses,
        backgroundColor: transparentColors,
        borderColor: solidColors,
        borderWidth: 1,
      },
    ],
  };

  const optionsFirstPlot = {
    responsive: true,
    maintainAspectRatio: false,
    legend: { position: 'left', labels: { boxWidth: 32} },
    title: {
      display: true,
      text: `Total Spent vs Budget Left (${financeData.currencySet})`,
    },
  };

  const optionsSecondPlot = {
    ...optionsFirstPlot,
    title: {
      display: true,
      text: 'Number of Expenses by Currency',
    },
  };

  return (
    <div className={styles.chartSection}>
      <div className={styles.chart}>
        <Chart
          type={'doughnut'}
          data={dataFirstChart}
          options={optionsFirstPlot}
        />
      </div>
      <div className={styles.chart}>
        <Chart
          type={'doughnut'}
          data={dataSecondChart}
          options={optionsSecondPlot}
        />
      </div>
    </div>
  );
}

export default ChartSection;
