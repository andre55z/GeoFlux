import type { StatusResponse, HistoricoItem } from '@/types';

const API_PATH = "/api/Dev_Global/v1/projeto2GeoFlux";

export async function buscarHistorico() {
  const response = await fetch(`${API_PATH}/historico`);
  const Vresponse = {
    json: await response.json(),
    status: response.status
  }


  return Vresponse;
  
}

export async function dispararValidacao() {
  const response = await fetch(`${API_PATH}/dispararvalidacao`, {
    method: "POST"
  });
  return response.status;
}

