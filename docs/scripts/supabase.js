import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    'https://pggepqcytcttzxlncwqd.supabase.co',

    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnZ2VwcWN5dGN0dHp4bG5jd3FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIwNzEwMTMsImV4cCI6MjA1NzY0NzAxM30._XB8EDwNIPzEUW7A8mQt1K-cGUi5yHQWJyyE1BCQtDs'
)

export async function deleteDestino(id) {
    const { error } = await supabase
        .from('Destinos')
        .delete()
        .eq('id', id)

    if (error) {
        console.error("Error al eliminar destino:", error);
        alert("No se pudo eliminar el destino.");
    } else {
        console.log("Destino eliminado correctamente");
    }
}

