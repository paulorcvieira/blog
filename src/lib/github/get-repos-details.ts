import axios from "axios"

export const getRepoDetails = async () => {
  const owner = "paulorcvieira"
  const repo = "blog"
  const response = await axios.get(
    `https://api.github.com/repos/${owner}/${repo}`
  )

  return response.data
}
