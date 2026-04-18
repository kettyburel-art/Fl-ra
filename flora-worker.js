/**
 * Flōra — Cloudflare Worker Proxy
 * Résout le problème CORS pour les appels à l'API Anthropic depuis le navigateur.
 *
 * DÉPLOIEMENT (gratuit) :
 * 1. Créer un compte sur https://workers.cloudflare.com
 * 2. Créer un nouveau Worker nommé "flora-api-proxy"
 * 3. Coller ce code dans l'éditeur
 * 4. Ajouter une variable d'environnement : ANTHROPIC_API_KEY = votre clé API
 * 5. Déployer → l'URL sera : flora-api-proxy.kettyburel-art.workers.dev
 *
 * La clé API reste sécurisée côté serveur, jamais exposée au navigateur.
 */

export default {
  async fetch(request, env) {

    // Headers CORS — autoriser uniquement le domaine Flōra
    const corsHeaders = {
      'Access-Control-Allow-Origin': 'https://kettyburel-art.github.io',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Pré-vérification CORS (preflight)
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // Seulement POST accepté
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers: corsHeaders });
    }

    try {
      // Lire le body envoyé par Flōra
      const body = await request.json();

      // Sécurité : vérifier que les paramètres sont dans des limites raisonnables
      if (!body.messages || !Array.isArray(body.messages)) {
        return new Response('Invalid request', { status: 400, headers: corsHeaders });
      }

      // Limiter le nombre de messages pour éviter les abus
      if (body.messages.length > 20) {
        return new Response('Too many messages', { status: 429, headers: corsHeaders });
      }

      // Appel à l'API Anthropic (côté serveur, pas de CORS)
      const anthropicResponse = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: body.model || 'claude-sonnet-4-20250514',
          max_tokens: Math.min(body.max_tokens || 1000, 2000), // Limiter à 2000 tokens max
          system: body.system || '',
          messages: body.messages,
        }),
      });

      const data = await anthropicResponse.json();

      return new Response(JSON.stringify(data), {
        status: anthropicResponse.status,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      });

    } catch (error) {
      return new Response(JSON.stringify({ error: { message: error.message } }), {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      });
    }
  },
};
