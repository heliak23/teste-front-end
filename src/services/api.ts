import type { ApiResponse, Product } from '../types/product';

const REMOTE_URL = 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';
const PROXY_URL = '/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';
const LOCAL_FALLBACK_URL = '/produtos.json';

export async function fetchProducts(): Promise<Product[]> {
  const urlsToTry = [PROXY_URL, REMOTE_URL, LOCAL_FALLBACK_URL];

  for (const url of urlsToTry) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data: ApiResponse = await response.json();
        if (data && data.success && Array.isArray(data.products) && data.products.length > 0) {
          return data.products;
        }
      }
    } catch {
      // Continue to next fallback
      console.warn(`Tentativa de carregar produtos de ${url} falhou, tentando fallback...`);
    }
  }

  throw new Error('Não foi possível carregar os produtos.');
}

/**
 * Formata um valor numérico em Reais (BRL).
 * Se o valor for em centavos (ex: 15000 para R$ 150,00 ou 149990 para R$ 1.499,90),
 * faz a divisão adequada.
 */
export function formatCurrency(cents: number): string {
  const reais = cents / 100;
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(reais);
}
