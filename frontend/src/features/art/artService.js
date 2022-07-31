import axios from 'axios'

const API_URL = '/api/Arts/'

// Create new Art
const createArt = async (ArtData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, ArtData, config)

  return response.data
}

// Get user Arts
const getArts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user Art
const deleteArt = async (ArtId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + ArtId, config)

  return response.data
}

const ArtService = {
  createArt,
  getArts,
  deleteArt,
}

export default ArtService