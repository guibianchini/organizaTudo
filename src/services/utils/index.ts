const UtilService = {
  formatDate(date: string): string {
    return new Date(date).toLocaleDateString("pt-BR");
  },
};

export default UtilService;
