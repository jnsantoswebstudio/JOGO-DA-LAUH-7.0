-- Execute no SQL editor de um projeto Supabase.
-- Ative confirmação de email em Auth e use HTTPS no aplicativo.
create table if not exists public.lauana_saves (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);
alter table public.lauana_saves enable row level security;
create policy "Leitura do próprio progresso" on public.lauana_saves
 for select to authenticated using (auth.uid()=user_id);
create policy "Criar o próprio progresso" on public.lauana_saves
 for insert to authenticated with check (auth.uid()=user_id);
create policy "Atualizar o próprio progresso" on public.lauana_saves
 for update to authenticated using (auth.uid()=user_id) with check (auth.uid()=user_id);
create or replace function public.touch_lauana_save() returns trigger language plpgsql as $$begin new.updated_at=now();return new;end$$;
drop trigger if exists t_lauana_save on public.lauana_saves;
create trigger t_lauana_save before update on public.lauana_saves for each row execute function public.touch_lauana_save();
