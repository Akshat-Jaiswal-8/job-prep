/* eslint-disable */

import { createClient } from "@supabase/supabase-js";

// eslint-disable-next-line no-undef
export const supabaseUrl = "https://ypvstpinzybaifxsiizg.supabase.co";
const supabaseanonkey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwdnN0cGluenliYWlmeHNpaXpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQxNTY2MzEsImV4cCI6MjAwOTczMjYzMX0.Ym_3TynkX9A_EEcKf7MyCzy6sw-q--XA1p_5wpWEQKM";
export const supabase = createClient(supabaseUrl, supabaseanonkey);
