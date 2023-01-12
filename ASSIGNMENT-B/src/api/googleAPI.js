// FIXME: use arrow function
async function getTestData(url) {
  try {
    const response = await fetch(
      `https://lf-exam-v2.web.app/api/analyze?imageUrl=` + url
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    return null
  }
}

const googleApi = { getTestData }

export default googleApi
