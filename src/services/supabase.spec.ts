import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      'https://qamsjihpyunbspoxkzjk.supabase.co',
      'PEGÁ_ACÁ_TU_PUBLISHABLE_KEY'
    );
  }

  getClient() {
    return this.supabase;
  }
}