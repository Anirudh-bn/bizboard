'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function submitLead(formData: FormData) {
  const supabase = await createClient()
  
  const rawData = {
    full_name: formData.get('name') as string,
    phone_number: formData.get('phone') as string,
    property_type: formData.get('propertyType') as string,
    location_area: formData.get('location') as string,
  }

  // Basic server-side validation
  if (!rawData.full_name || !rawData.phone_number || !rawData.property_type || !rawData.location_area) {
    return { error: 'All fields are required' }
  }

  const { error } = await supabase
    .from('leads')
    .insert(rawData)

  if (error) {
    console.error('Error submitting lead:', error)
    return { error: 'Failed to submit request. Please try again.' }
  }

  revalidatePath('/sell')
  return { success: true }
}
