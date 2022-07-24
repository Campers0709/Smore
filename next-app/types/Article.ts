export type Article = {
  item_id: string
  user_id: string
  category_id: number | null
  url: string
  tweet: string
  user_text: string
  liked_at: string
  ai_summary?: string
}
