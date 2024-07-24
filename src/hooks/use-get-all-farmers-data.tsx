"use client"

import useSupabaseBrowser from "@/utils/supabase-browser"
import { TypedSupabaseClient } from "@/utils/types"
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query"

export const useGetAllFarmersData = () => {
  const supabase = useSupabaseBrowser() as TypedSupabaseClient

  const query = supabase
    .from("farmers")
    .select("*", { count: "exact" })
    .limit(10)

  return useQuery(query, {
    enabled: true,
  })
}
