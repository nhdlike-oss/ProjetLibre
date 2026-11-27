// Connexion au projet Supabase du site.

const URL_PROJET = "https://xjzwrslgpzyzwxrqhuuu.supabase.co";
const CLE_PUBLIQUE = "sb_publishable_fQASmP0ur0BqPxStdntIHg_ZMjv7YN3";

const client = supabase.createClient(URL_PROJET, CLE_PUBLIQUE);
