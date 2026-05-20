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
      'sb_publishable_n2Eie22VCLWo0EtklBrACg__JYOHEEg'
    );
  }

  getClient() {
    return this.supabase;
  }
}