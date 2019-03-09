// for index signature purposes
interface Trans {
  [prop: string]: object;
}

export const trans: Trans = {
  EN: {
    title: 'Expenses Manager',
    history: {
      title: 'History',
      filter: 'Filter',
    }
  },
  ES: {
    title: 'Administrador de Gastos',
    history: {
      title: 'Historial',
      filter: 'Filtrar',
    }
  },
};
