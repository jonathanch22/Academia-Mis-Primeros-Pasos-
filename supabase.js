// Configuración de conexión para Supabase
const supabaseUrl = 'https://kkedvilrxqqwtaqaxlgw.supabase.co';
const supabaseKey = 'sb_publishable_umIPUKcCOtfXQHxAlP7YCw_ffot99AJ';

// Inicialización del cliente de Supabase
// Hacemos que sea accesible globalmente a través de window
window.supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

console.log("Conexión con Supabase configurada exitosamente.");