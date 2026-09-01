import api from './auth'

export interface MaterialItem {
  id: number
  subject: string
  description: string
  link: string
}

export function fetchMaterials(type: string) {
  return api.get<MaterialItem[]>(`/materials/${type}`)
}

export function createMaterial(type: string, data: { subject: string; description: string; link: string }) {
  return api.post<{ message: string; id: number }>(`/materials/${type}`, data)
}

export function deleteMaterial(id: number) {
  return api.delete<{ message: string }>(`/materials/${id}`)
}
