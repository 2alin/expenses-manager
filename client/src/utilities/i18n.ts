export interface Trans {
  // for index signature purposes
  [prop: string]: any;
}

export const trans: Trans = {
  EN: {
    title: 'Expenses Manager',
    i18nOptions: {
      langDescription: 'Select your language',
      currDescription: 'Select your currency',
    },
    history: {
      title: 'History',
      filter: 'Filter',
      messages: {
        errorAPI:
          'Error while fetching data from the server. Please check if your API is running, and reload after that.',
        emptyListFilter:
          'You are getting an empty list with the filters you chose. Try changing your filter options.',
        emptyListSearch:
          'You are getting an empty list with the search query you typed. Try another one.',
        loading: 'loading',
      },
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
      },
    },
    charts: {
      first: {
        title: 'Total Spent vs Budget Left',
        spent: 'Spent',
        left: 'Left',
      },
      second: {
        title: 'Expenses Number by Currency',
      },
    },
  },
  ES: {
    title: 'Administrador de Gastos',
    i18nOptions: {
      langDescription: 'Selecciona tu idioma',
      currDescription: 'Selecciona tu moneda',
    },
    history: {
      title: 'Historial',
      filter: 'Filtrar',
      footer: {
        previous: 'Anterior',
        next: 'Siguiente',
      },
      messages: {
        errorAPI:
          'Error mientras se obtenian datos del servidor. Revisa si la API se está ejecutando, y carga de nuevo la página.',
        emptyListFilter:
          'Obtuviste una lista vacía con los filtros que seleccionaste. Intenta cambiar las opciones de filtro.',
        emptyListSearch:
          'Obtuviste una lista vacía con el campo de busqueda que escribiste. Intenta uno diferente.',
        loading: 'cargando',
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
      },
    },
    charts: {
      first: {
        title: 'Gasto vs Presupuesto Restante',
        spent: 'Gasto',
        left: 'Resto',
      },
      second: {
        title: 'Número de Gastos por Moneda',
      },
    },
  },
};
