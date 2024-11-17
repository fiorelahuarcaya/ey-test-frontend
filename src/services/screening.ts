import { toast } from "react-toastify";
import apiScreening from "../utils/apiScreening";
import { OfacSanction, OffshoreLeak } from "../utils/types";

export const fetchOfacSanctions = async (
  search: string,
): Promise<OfacSanction[]> => {
  try {
    const response = await apiScreening.get(
      `/screening/ofac-sanctions?search=${search}`,
    );
    if (response.data.list) {
      return response.data.list as OfacSanction[];
    }
    return [];
  } catch (error) {
    console.error("Error al obtener OFAC Sanctions:", error);
    toast.error("No se pudo obtener la lista de la fuente Ofac Sanction.");
    return [];
  }
};

export const fetchOffshoreLeaks = async (
  search: string,
): Promise<OffshoreLeak[]> => {
  try {
    const response = await apiScreening.get(
      `/screening/offshore-leaks?search=${search}`,
    );
    if (response.data.list) {
      return response.data.list as OffshoreLeak[];
    }
    return [];
  } catch (error) {
    console.error("Error al obtener Offshore Leaks:", error);
    toast.error("No se pudo obtener la lista de la fuente Off shore Leak.");
    return [];
  }
};

export const fetchWorldBankScreening = async (
  search: string,
): Promise<any[]> => {
  try {
    const response = await apiScreening.get(`/screening/the-world-bank`, {
      params: { search },
    });
    return response.data.list || [];
  } catch (error: any) {
    console.error("Error al obtener datos de The World Bank Screening:", error);
    toast.error("No se pudo obtener la lista de The World Bank.");
    throw new Error(
      "No se pudieron obtener los datos de The World Bank Screening.",
    );
  }
};
