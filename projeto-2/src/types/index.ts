export interface StatusResponse {
  success: boolean;
  message: string;
}

export interface HistoricoItem {
  id: number;
  dataHora: string;
  status: number;
  id_ibge: number;
}