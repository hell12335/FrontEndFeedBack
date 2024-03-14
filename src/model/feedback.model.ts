export interface FeedbackResponse {
  id: number,
  comment: string,
  created_at: string,
  user: {
    id: number,
    username: string
  }
}
