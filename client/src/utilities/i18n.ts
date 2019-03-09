import filterOptions from "../reducers/filterOptions";

// for index signature purposes
interface Trans {
  [prop: string]: any;
}

export const trans: Trans = {
  EN: {
    title: 'Expenses Manager',
    history: {
      title: 'History',
      filter: 'Filter',
      filterOptions: {
        startDate: 'Start Date',
        endDate: 'End Date',
        minAmount:'Minimum Amount',
        maxAmount: 'Maximum Amount',
        currency: 'Currency',
        filter: 'Filtrar'
      }
    }
  },
  ES: {
    title: 'Administrador de Gastos',
    history: {
      title: 'Historial',
      filter: 'Filtrar',
      filterOptions: {
        startDate: 'Fecha Inicial',
        endDate: 'Fecha Final',
        minAmount:'Cantidad Mínima',
        maxAmount: 'Cantidad Máxima',
        currency: 'Moneda',
        filter:'Filtrar'
      }
    }
  },
};
