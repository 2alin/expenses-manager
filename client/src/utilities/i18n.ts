// for index signature purposes
export interface Trans {
  [prop: string]: any;
}

export const trans: Trans = {
  EN: {
    title: 'Expenses Manager',
    history: {
      title: 'History',
      filter: 'Filter',
      footer: {
        previous: 'Previous',
        next: 'Next',
      },
      filterOptions: {
        startDate: 'Start Date',
        endDate: 'End Date',
        minAmount: 'Minimum Amount',
        maxAmount: 'Maximum Amount',
        currency: 'Currency Used',
        filter: 'Filtrar',
      },
      expense: {
        addComment: 'Add Comment',
        addReceipt: 'Add Receipt',
        submit: 'Submit',
      },
      receiptForm: {
        title: '',
        descripttion: '',
        submit: 'Submit',
      }
    },
    charts: {
      first: {
        title: 'Total Spent vs Budget Left',
        spent: 'Spent',
        left: 'Left',
      },
      second: {
        title: 'Number of Expenses by Currency',
      }
    }
  },
  ES: {
    title: 'Administrador de Gastos',
    history: {
      title: 'Historial',
      filter: 'Filtrar',
      footer: {
        previous: 'Anterior',
        next: 'Siguiente',
      },
      filterOptions: {
        startDate: 'Fecha Inicial',
        endDate: 'Fecha Final',
        minAmount: 'Cantidad Mínima',
        maxAmount: 'Cantidad Máxima',
        currency: 'Moneda Utilizada',
        filter: 'Filtrar',
      },
      expense: {
        addComment: 'Agregar Comentario',
        addReceipt: 'Agregar Recibo',
        submit: 'Aceptar',
      },
      receiptForm: {
        title: '',
        descripttion: '',
        submit: 'Aceptar',
      }
    },
    charts: {
      first: {
        title: 'Gasto Total vs Resto de Presupuesto',
        spent: 'Gasto',
        left: 'Resto',
      },
      second: {
        title: 'Número de Gastos por Moneda',
      }
    }
  },
};
