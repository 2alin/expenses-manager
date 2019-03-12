import React from 'react';
import Chart from 'react-chartjs-2';
import { Finance } from '../types';
import styles from './ChartSection.module.scss';

interface Props {
  trans: any;
  financeData: Finance;
}

const transparentColors = [
  'rgba(255, 99, 132, 0.5)',
  'rgba(54, 162, 235, 0.5)',
  'rgba(255, 159, 64, 0.5)',
  'rgba(75, 192, 192, 0.5)',
  'rgba(255, 206, 86, 0.5)',
  'rgba(153, 102, 255, 0.5)',
];

const solidColors = [
  'rgba(255,99,132,1)',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(153, 102, 255, 1)',
];

function ChartSection({ trans, financeData }: Props) {
  const totalSpent = financeData.totalSpent.value;
  const budgetLeft = financeData.budget.value - financeData.totalSpent.value;

  const dataFirstChart = {
    labels: [trans.first.spent, trans.first.left],
    datasets: [
      {
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
        data: numberExpenses,
        backgroundColor: transparentColors,
        borderColor: solidColors,
        borderWidth: 1,
      },
    ],
  };

  const optionsChart = {
    responsive: true,
    maintainAspectRatio: false,
    legend: { position: 'left', labels: { boxWidth: 32 } },
  };

  return (
    <div className={styles.chartSection}>
      <div className={styles.chartContainer}>
        <div className={styles.title}>
          {`${trans.first.title} (${financeData.currencySet})`}
        </div>
        <div className={styles.chart}>
          <Chart
            type={'doughnut'}
            data={dataFirstChart}
            options={optionsChart}
          />
        </div>
      </div>

      <div className={styles.chartContainer}>
        <div className={styles.title}>{trans.second.title}</div>
        <div className={styles.chart}>
          <Chart
            type={'doughnut'}
            data={dataSecondChart}
            options={optionsChart}
          />
        </div>
      </div>
    </div>
  );
}

export default ChartSection;
