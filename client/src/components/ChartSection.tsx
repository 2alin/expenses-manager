import React from 'react';
import Chart from 'react-chartjs-2';
import { Finance } from '../types';
import styles from './ChartSection.module.scss';

interface Props {
  financeData: Finance;
}

const transparentColors = [
  'rgba(255, 99, 132, 0.4)',
  'rgba(54, 162, 235, 0.4)',
  'rgba(75, 192, 192, 0.4)',
  'rgba(255, 206, 86, 0.2)',
  'rgba(153, 102, 255, 0.2)',
  'rgba(255, 159, 64, 0.2)',
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
    labels: ['Total Spent', 'Budget Left'],
    datasets: [
      {
        label: 'Spent vs Budget',
        data: [totalSpent.toFixed(2), budgetLeft.toFixed(2)],
        backgroundColor: [
          'rgba(54, 162, 235, 0.4)',
          'rgba(153, 102, 255, 0.4)',
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
        label: 'Spent vs Budget',
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
    legend: { position: 'left' },
    title: {
      display: true,
      text: `Budget vs Spent (${financeData.currencySet})`,
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
